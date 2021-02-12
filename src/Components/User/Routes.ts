import express from 'express';
const uploadImg = require('../../libs/storage');
const router = express.Router();
const { RegisterUser, LoginUser } = require('./Controller');

router.route('/').post(uploadImg.single('URLImgPerson'), RegisterUser);
router.route('/StartSesion').post(LoginUser);

module.exports = router;
