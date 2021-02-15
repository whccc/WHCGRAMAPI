const express = require('express');
const router = express.Router();

const { MessageEntryAsync, GetRoomAsync } = require('./Controller');

router.route('/Message').post(MessageEntryAsync);
router.route('/:_idRoom').get(GetRoomAsync);
module.exports = router;
