import express from 'express';
const uploadImg = require('../../libs/storage');
const router = express.Router();
const { CreatePostAsync, GetPostUserAsync } = require('./Controller');

router
  .route('/CreatePost')
  .post(uploadImg.single('URLImgPost'), CreatePostAsync);
router.route('/:_id').get(GetPostUserAsync);

module.exports = router;
