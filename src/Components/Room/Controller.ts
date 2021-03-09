export {};
const MDRoom = require('./Model');
const MDUser = require('../User/Controller');
const SocketIOClient = require('../../libs/SocketIOClient');

module.exports = {
  async CreateRoom(req, res) {
    try {
      await MDRoom.MDFindRoomAsync(req.body);
    } catch (Error) {
      res.status(500).json({ Success: false });
    }
  },
  async MessageEntryAsync(req, res) {
    try {
      //const Data = await MDRoom.MDFindRoomAsync(req.body);
      /* if (Data === null) {
        const RoomCreate = await MDRoom.MDCreateRoom(req.body);
        //AGREGANDO SALAS A LOS USUARIOS
        await MDUser.AddRoomsToUserAsync(RoomCreate);
        console.log(RoomCreate);
      } else {*/
      console.log(req.body);
      await MDRoom.MDAddMessagesRoom(req.body);
      // }
      //-----------------------------
      //EMITIENDO MENSAJE A SOCKETIO
      //-----------------------------
      // SocketIOClient.emit('MessageApi', req.body);
      res.status(200).json({ Success: true });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({ Success: false });
    }
  },
  async GetRoomAsync(req, res) {
    try {
      let Data = await MDRoom.MDFindRoomAsync(req.body);

      //Creando sala inicial
      if (Data === null) {
        Data = await MDRoom.MDCreateRoom(req.body);
        //AGREGANDO SALAS A LOS USUARIOS
        await MDUser.AddRoomsToUserAsync(Data);
      }
      console.log(Data);
      // ADD SALA USERS

      //SocketIOClient.emit('AddUsers', Data);
      res.status(200).json({
        Success: true,
        DataRoom: [Data]
      });
    } catch (Error) {
      res.status(500).json({ Success: false });
    }
  }
};
