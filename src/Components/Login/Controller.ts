const MDUser = require('./Model');
module.exports = {
  async Login(req: any, res: any) {
    try {
      //--------------
      // DATA USUARIO
      //--------------
      await MDUser.MDRegister(req.body);
      res.status(200).json({
        Success: true
      });
    } catch (Error) {
      res.status(500).json({
        Success: false
      });
    }
  }
};
