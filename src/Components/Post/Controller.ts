const MDPost = require('./Model');
module.exports = {
  //------------
  // CREAR POST
  //------------
  async CreatePostAsync(req, res) {
    try {
      await MDPost.MDCreatePostAsync(req.body, req.file);
      res.status(200).json({
        Success: true
      });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({
        Success: false
      });
    }
  },
  //--------------
  //OBTENER POSTS
  //--------------
  async GetPostUserAsync(req, res) {
    try {
      const Data = await MDPost.MDFindPostByUserAsync(req.params);
      res.status(200).json({
        Success: true,
        DataPost: Data
      });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({
        Success: false
      });
    }
  }
};
