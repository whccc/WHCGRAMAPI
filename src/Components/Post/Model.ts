export {};
const MDPostSchema = require('./SchemaMongoDB');
const ConfigServer = require('../../config/config');
module.exports = {
  //------------
  // CREATE POST
  //-------------
  async MDCreatePostAsync({ strTitle, strDescription, _id }, { filename }) {
    try {
      const MDPost = new MDPostSchema({
        strTitle,
        strDescription,
        URLImagen: `${ConfigServer.URL_DOMAIN}${filename}`,
        strIdUserPost: _id
      });
      await MDPost.save();
    } catch (Error) {
      throw Error;
    }
  },
  //---------------------
  // OBTENER POSTBY USER
  //---------------------
  async MDFindPostByUserAsync({ _id }) {
    try {
      return await MDPostSchema.find({ strIdUserPost: _id })
        .populate('strIdUserPost')
        .sort({ $natural: -1 });
    } catch (Error) {
      throw Error;
    }
  }
};
