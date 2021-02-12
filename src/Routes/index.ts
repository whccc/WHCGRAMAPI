import express from 'express';
const routers = express.Router();
import Login = require('../Components/User/Routes');
import Post = require('../Components/Post/Routes');

routers.use('/Login', Login);
routers.use('/Post', Post);

module.exports = routers;
