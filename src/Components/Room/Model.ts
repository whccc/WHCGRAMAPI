const MDSchemaRoom = require('./SchemaMongoDB');
module.exports = {
  async MDFindRoomAsync({ _idRoom }) {
    try {
      return await MDSchemaRoom.findOne({ _idRoom });
    } catch (Error) {
      throw Error;
    }
  },
  async MDCreateRoom({ _idRoom, TypeRoom, ArrayMembers, Message }) {
    try {
      const Room = new MDSchemaRoom({
        _idRoom,
        strType: TypeRoom,
        ArrayMembers,
        ArrayMessages: [Message]
      });
      await Room.save();
    } catch (Error) {
      throw Error;
    }
  },
  async MDGetRoomAsync({ _idRoom }) {
    try {
      console.log(_idRoom);
      return await MDSchemaRoom.find({ _idRoom }).populate(
        'ArrayMembers.IdUser'
      );
    } catch (Error) {
      throw Error;
    }
  }
};
