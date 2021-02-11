import express from 'express';
const router = express.Router();
const { Login } = require('./Controller');

router.route('/').post(Login);

module.exports = router;
