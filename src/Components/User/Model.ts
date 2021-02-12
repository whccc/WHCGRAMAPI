const MDUserSchema = require('./SchemaMongoDB');
const ConfigServer = require('../../config/config');
module.exports = {
  //---------------------
  // REGISTRANDO USUARIO
  //---------------------
  async MDRegister(
    {
      strNames,
      strUser,
      strPassword
    }: { strNames: string; strUser: string; strPassword: string },
    { filename }: { filename: string }
  ) {
    try {
      //--------------------
      // CREACIÓN DEL MODELO
      //---------------------
      const User = new MDUserSchema({
        strNames,
        strUser,
        strPassword,
        URLImgPerson: `${ConfigServer.URL_DOMAIN}${filename}`
      });
      //-----------------------
      // GUARDAR USUARIO NUEVO
      //-----------------------
      await User.save();
    } catch (Error) {
      throw Error;
    }
  },
  async MDFindUser({ strUser, strPassword }) {
    try {
      const Data = await MDUserSchema.findOne({
        strUser,
        strPassword
      });
      return Data;
    } catch (Error) {
      throw Error;
    }
  }
};
