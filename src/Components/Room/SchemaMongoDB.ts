export {};
const { Schema, model } = require('mongoose');
const Room = new Schema({
  _idRoom: {
    type: String,
    trim: true
  },
  strType: {
    type: String,
    trim: true,
    required: true
  },
  ArrayMembers: [
    {
      IdUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        trim: true,
        required: true
      }
    }
  ],
  ArrayMessages: {
    type: Array,
    trim: true,
    default: [],
    required: true
  }
});

module.exports = model('Rooms', Room);
