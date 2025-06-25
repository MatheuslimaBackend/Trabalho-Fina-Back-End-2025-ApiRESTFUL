const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtosController');

router.get('/', controller.listarProdutos);
router.get('/:id', controller.obterProdutoPorId);
router.post('/', controller.criarProduto);
router.put('/:id', controller.atualizarProduto);
router.delete('/:id', controller.deletarProduto);

module.exports = router;