const MDUserSchema = require('./SchemaMongoDB');
module.exports = {
  //---------------------
  // REGISTRANDO USUARIO
  //---------------------
  async MDRegister({ strNames, strUser, strPassword, URLImgPerson }) {
    try {
      //--------------------
      // CREACIÓN DEL MODELO
      //---------------------
      const User = new MDUserSchema({
        strNames,
        strUser,
        strPassword,
        URLImgPerson
      });
      //-----------------------
      // GUARDAR USUARIO NUEVO
      //-----------------------
      await User.save();
    } catch (Error) {
      throw Error;
    }
  }
};
