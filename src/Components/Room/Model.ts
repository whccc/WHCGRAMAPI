const MDSchemaRoom = require('./SchemaMongoDB');
module.exports = {
  async MDFindRoomAsync({ ArrayMembers, strType }) {
    try {
      //EL STRTYPE INDICA EL TIPO DE MENSAJE SI ES 1V1 O GRUPAL
      //ESTO DETERMINARA EL TIPO DE BUSQUEDA DE LA SALA
      // SI ES 1V1 SE BUSCARA POR MIEMBROS EN LA SALA, SI ES GRUPAL
      //SE HARA LA BUSQUEDA POR EL ID DEL ROOM
      if (strType === '1V1') {
        return await MDSchemaRoom.findOne({
          $and: [
            {
              'ArrayMembers.IdUser':
                typeof ArrayMembers[0].IdUser === 'object'
                  ? ArrayMembers[0].IdUser._id
                  : ArrayMembers[0].IdUser
            },
            {
              'ArrayMembers.IdUser':
                typeof ArrayMembers[1].IdUser === 'object'
                  ? ArrayMembers[1].IdUser._id
                  : ArrayMembers[1].IdUser
            }
          ]
        }).populate('ArrayMembers.IdUser');
      }
    } catch (Error) {
      throw Error;
    }
  },
  async MDCreateRoom({ _idRoom, strType, ArrayMembers }) {
    try {
      const Room = new MDSchemaRoom({
        _idRoom,
        strType,
        ArrayMembers,
        ArrayMessages: []
      });
      return await Room.save();
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
  },
  async MDAddMessagesRoom({ IdRoom, _idSendingUser, strMessage }) {
    try {
      await MDSchemaRoom.updateOne(
        { _id: IdRoom },
        {
          $push: {
            ArrayMessages: { _idSendingUser, Message: strMessage }
          }
        }
      );
    } catch (Error) {
      throw Error;
    }
  }
};
