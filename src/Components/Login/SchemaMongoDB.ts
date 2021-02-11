const { Schema, model } = require('mongoose');

const User = new Schema({
  strNames: {
    type: String,
    trim: true,
    required: true
  },
  strUser: {
    type: String,
    trim: true,
    required: true
  },
  strPassword: {
    type: String,
    trim: true,
    required: true
  },
  URLImgPerson: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = model('User', User);
