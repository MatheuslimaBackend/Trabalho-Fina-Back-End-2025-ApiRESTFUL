const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginController');

router.post('/', controller.login);

module.exports = router;
