'use strict';

const express = require('express');
const multer = require('multer');
const checkJwtToken = require('../controllers/session/check-jwt-token');
const getUserProfile = require('../controllers/user/get-user-profile-controller');
const uploadAvatar = require('../controllers/user/upload-avatar');
const getUserWall = require('../controllers/user/get-user-wall');

const upload = multer();
const router = express.Router();

router.get('/user/profile', checkJwtToken, getUserProfile);
router.post('/user/avatar', checkJwtToken, upload.single('avatar'), uploadAvatar);
router.get('/user/wall', checkJwtToken, getUserWall);

module.exports = router;
