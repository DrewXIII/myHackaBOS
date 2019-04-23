'use strict';

const bcrypt = require('bcrypt'); // "A library to help you hash passwords". Esta librería sirve para hashear el código (una especia de cifrado para que esté oculto y seguro).
const express = require('express');
const Joi = require('joi'); // "Object schema description language and validator for JavaScript objects". Instalamos Joi para hacer validaciones.
const mysqlPool = require('../../databases/mysql-pool'); // Esta no es ninguna librería, requerimos el código de ese archivo, que está en esa ubicación.
const sendgridMail = require('@sendgrid/mail'); // "This is a dedicated service for interaction with the mail endpoint of the Sendgrid v3 API". Utilizamos esto para poder usar la página sendgrid y así poder mandar nuestros correos de prueba.
const uuidV4 = require('uuid/v4');// "Generate and return a RFC4122 v4 UUID". Es una librería que sirve para generar los números de id. Usamos la versión 4.

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router(); //

/**
 * Creamos la función que va a validar.
 */

async function validateSchema(payload) {
    /**
     * TODO: Lo que está escrito a continuación es una variable que indica que esquema se debe de seguir al cubrir los campos de email y password. La librería Joi sirve precisamente para crear esos esquemas de validación. Todo el código está copiado directamente de la página de Joi, no es necesario escribir nada. Esas son las validaciones para emails y passwords con Joi.
     * email:
        - Tiene que ser un string.
        - Tiene que tener 2 dominios, como por ejemplo: ejemplo.com
     * password: 
        - Puede ser un string.
        - La regular expression nos indica que el password puede contener letras (mayúsculas y/o minúsculas) y números. Así mismo, el password tendrá que tener mínimo 3 cifras y máximo 30.
     */
    const schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    };

    return Joi.validate(payload, schema);
}


async function addVerificationCode(uuid) {
    /**
     * TODO: Lo que está escrito a continuación significa que se crea un código de verificación para el usuario dado e inserta ese código en la base de datos.
     * verificationCode:
        - Utilizamos la librería uuidV4 para crear ese id del usuario.
     * createdAt:
        - toISOString() va a darnos la fecha en formato ISO, el cual es el siguiente: año-mes-díaThora-minutos-segundos-TZD(time zone designator). Para quitar esa T que viene de separador, hacemos el replace y la sustituímos por un espacio.
     * sqlQuery:
        - Este código son las instrucciones que se le mandan a mysql. Esta metiendo en esa tabla la información.
     * connection:
        -mysqlPool viene de otro archivo (ver).
     * 
     */
    const verificationCode = uuidV4();
    const now = new Date();
    const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
    const sqlQuery = 'INSERT INTO users_activation SET ?';
    const connection = await mysqlPool.getConnection();

    /**
     * 
     * 
     */

    await connection.query(sqlQuery, {
        user_uuid: uuid,
        verification_code: verificationCode,
        created_at: createdAt,
    });

    connection.release();

    return verificationCode;
}

/**
 * TODO: La función que está escrita abajo sirve para mandar al usuario el correo con el link de verificación de la cuenta creada en la red social.
 * mgs:
    - Este es el objeto que se manda en el mail.
 * data:
    -Aquí se manda el mail con el objeto a sendgridMail. Esta es una página que sirve para probar estas cosas, de mandar mails y así.
 * 
 */

async function sendEmailRegistration(userEmail, verificationCode) {
    const linkActivation = `http://localhost:3000/api/account/activate?verification_code=${verificationCode}`;
    const mgs = {
        to: userEmail,
        from: {
            email: 'socialnetwork@yopmail.com',
            name: 'Social Network :)',
        },
        subject: 'Welcome to Hack a Bos Social Network',
        text: 'Start meeting people of your interests',
        html: `To confirm the account <a href="${linkActivacion}">activate it here</a>`,
    };

    const data = await sendgridMail.send(msg);

    return data;
}


/**
 * TODO: A continuación creamos la función de crear la cuenta. Ya la hemos valido y hecho todo lo pertinente para confirmar que está bien todo, así que ahora la creamos.
 * accountData:
    - Creamos una variable para req.body para poder guardar ahí la información y poder usarla en el POST.
 * Usamos try y catch para la validación del esquema por si falla que nos dé un error.
 * 
 * 
 */

async function createAccount(req, res, next) {
    const accountData = req.body;

    try {
        await validateSchema(accountData);
    } catch (e) {
        return res.status(400).send(e);
    }

    /**
  * Tenemos que insertar el usuario en la bbdd, para ello:
  * 1. Generamos un uuid v4
  * 2. Miramos la fecha actual created_at
  * 3. Calculamos hash de la password que nos mandan para almacenarla
  * de forma segura en la base de datos
  * 
  * Con la librería bcrypt hasheamos el código. 
  * Utilizamos el momento de la creación para que sea más seguro.
  * Lo añadimos a MYSQL.
  */
    const now = new Date();
    const securePassword = await bcrypt.hash(accountData.password, 10);
    const uuid = uuidV4();
    const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');

    const connection = await mysqlPool.getConnection();

    const sqlInsercion = 'INSERT INTO users SET ?';

    try {
        const resultado = await connection.query(sqlInsercion, {
            uuid, // uuid: uuid,
            email: accountData.email,
            password: securePassword,
            created_at: createdAt,
        });
        connection.release();

        const verificationCode = await addVerificationCode(uuid);

        await sendEmailRegistration(accountData.email, verificationCode);

        return res.status(201).send();
    } catch (e) {
        if (connection) {
            connection.release();
        }

        return res.status(500).send(e.message);
    }
}

router.post('/account', createAccount);

module.exports = router;
