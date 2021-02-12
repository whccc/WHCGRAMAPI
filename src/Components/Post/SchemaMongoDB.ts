export {};
const { Schema, model } = require('mongoose');

const Post = new Schema({
  strTitle: {
    type: String,
    trim: true,
    required: true
  },
  strDescription: {
    type: String,
    trim: true,
    required: true
  },
  URLImagen: {
    type: String,
    trim: true,
    required: true
  },
  strIdUserPost: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    trim: true,
    required: true
  }
});

module.exports = model('Post', Post);
