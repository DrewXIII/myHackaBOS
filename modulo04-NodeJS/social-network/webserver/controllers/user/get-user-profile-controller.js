'use strict';

async function getUserProfile(req, res, next) {
  res.send(`Hola ${req.claims.uuid}`);
}

module.exports = getUserProfile;
