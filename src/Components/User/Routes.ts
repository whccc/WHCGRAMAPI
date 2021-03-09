import express from 'express';
const uploadImg = require('../../libs/storage');
const router = express.Router();
const {
  RegisterUserAsync,
  LoginUserAsync,
  GetUsersAsync,
  GetRoomsByUserAsync
} = require('./Controller');

router
  .route('/')
  .post(uploadImg.single('URLImgPerson'), RegisterUserAsync)
  .get(GetUsersAsync);
router.route('/StartSesion').post(LoginUserAsync);
router.route('/GetRoomUser/:_idUser').get(GetRoomsByUserAsync);
module.exports = router;
