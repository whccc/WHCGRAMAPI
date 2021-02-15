import express from 'express';
const routers = express.Router();
import Login = require('../Components/User/Routes');
import Post = require('../Components/Post/Routes');
const Room = require('../Components/Room/Routes');

routers.use('/User', Login);
routers.use('/Post', Post);
routers.use('/Room', Room);

module.exports = routers;
