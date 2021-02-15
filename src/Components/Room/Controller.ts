const MDRoom = require('./Model');
module.exports = {
  async CreateRoom(req, res) {
    try {
      const Data = await MDRoom.MDFindRoomAsync(req.body);
      console.log(Data);
    } catch (Error) {
      res.status(500).json({ Success: false });
    }
  },
  async MessageEntryAsync(req, res) {
    try {
      const Data = await MDRoom.MDFindRoomAsync(req.body);
      console.log(Data);
      if (Data === null) {
        await MDRoom.MDCreateRoom(req.body);
      }
      res.status(200).json({ Success: true });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({ Success: false });
    }
  },
  async GetRoomAsync(req, res) {
    try {
      console.log(req.params);
      const Data = await MDRoom.MDGetRoomAsync(req.params);
      res.status(200).json({
        Success: true,
        DataRoom: Data
      });
    } catch (Error) {
      res.status(500).json({ Success: false });
    }
  }
};
