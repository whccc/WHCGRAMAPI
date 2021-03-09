const MDUser = require('./Model');
module.exports = {
  async RegisterUserAsync(req: any, res: any) {
    try {
      //--------------
      // DATA USUARIO
      //--------------
      await MDUser.MDRegister(req.body, req.file);
      res.status(200).json({
        Success: true
      });
    } catch (Error) {
      res.status(500).json({
        Success: false
      });
    }
  },
  async LoginUserAsync(req, res) {
    try {
      //------------------
      // INICIO DE SESIÓN
      //------------------
      console.log(req.body);
      const Data = await MDUser.MDFindUser(req.body);
      console.log(Data);
      res.status(200).json({
        Success: Data !== null,
        DataUser: Data
      });
    } catch (Error) {
      res.status(500).json({
        Success: false
      });
    }
  },
  //-----------
  // GET USERS
  //-----------
  async GetUsersAsync(req, res) {
    try {
      const Data = await MDUser.MDFindUsersAsync();
      res.status(200).json({
        Success: false,
        DataUsers: Data
      });
    } catch (Error) {
      res.status(500).json({
        Success: false
      });
    }
  },
  async AddRoomsToUserAsync({ _id, ArrayMembers }) {
    try {
      await ArrayMembers.forEach(async (User) => {
        await MDUser.MDaddRoomToUsers({ idRoom: _id, idUser: User.IdUser });
      });
    } catch (Error) {
      console.log(Error);
    }
  },

  async GetRoomsByUserAsync(req, res) {
    try {
      console.log(req.params);
      const Data = await MDUser.MDGetRoomsByUserAsync(req.params);
      res.status(200).json({
        Success: true,
        DataRoomsUser: Data
      });
    } catch (Error) {
      res.status(500).json({
        Success: false
      });
    }
  }
};
