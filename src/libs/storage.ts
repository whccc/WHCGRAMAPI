const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'URLImgPost') {
      cb(null, './src/storage/post');
    } else {
      cb(null, './src/storage/profile');
    }
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}.jpg`);
  }
});

const uploadImg = multer({ storage });

module.exports = uploadImg;
