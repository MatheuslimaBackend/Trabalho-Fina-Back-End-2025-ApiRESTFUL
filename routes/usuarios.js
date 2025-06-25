const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController');

router.post('/', controller.criarUsuario);
router.get('/', controller.listarUsuarios); // opcional, mas o desafio pede
module.exports = router;
