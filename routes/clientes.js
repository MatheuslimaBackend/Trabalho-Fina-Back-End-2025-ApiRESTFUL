const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientesController');
const auth = require('../middlewares/auth');

router.get('/', controller.listarClientes);
router.post('/', controller.criarCliente);
router.put('/:id', controller.atualizarCliente);
router.delete('/:id', controller.deletarCliente);


module.exports = router;
