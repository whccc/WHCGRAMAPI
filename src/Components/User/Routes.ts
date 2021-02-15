import express from 'express';
const uploadImg = require('../../libs/storage');
const router = express.Router();
const {
  RegisterUserAsync,
  LoginUserAsync,
  GetUsersAsync
} = require('./Controller');

router
  .route('/')
  .post(uploadImg.single('URLImgPerson'), RegisterUserAsync)
  .get(GetUsersAsync);
router.route('/StartSesion').post(LoginUserAsync);

module.exports = router;
