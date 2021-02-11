import express from 'express';
const routers = express.Router();
import Login = require('../Components/Login/Routes');

routers.use('/Login', Login);

module.exports = routers;
