'use strict';

const accountRouter = require('./webserver/routes/account-router'); // Con esto cogemos la variable accountRouter del archivo en el que la creamos.
const bodyParser = require('body-parser'); // Node.js body parsing middleware.Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const express = require('express');


const app = express();
app.use(bodyParser.json());

app.use('/api', accountRouter);