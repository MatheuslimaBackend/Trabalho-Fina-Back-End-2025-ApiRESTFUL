const produtoService = require('../services/produtosService');

exports.listarProdutos = async (req, res) => {
  const produtos = await produtoService.listar();
  res.json(produtos);
};

exports.criarProduto = async (req, res) => {
  const novoProduto = await produtoService.criar(req.body);
  res.status(201).json(novoProduto);
};

exports.atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const produtoAtualizado = await produtoService.atualizar(id, req.body);
  res.json(produtoAtualizado);
};

exports.deletarProduto = async (req, res) => {
  const { id } = req.params;
  await produtoService.deletar(id);
  res.sendStatus(204);
};

exports.obterProdutoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await produtoService.obterPorId(id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(produto);
  } catch (error) {
    console.error('Erro ao obter produto por ID:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};
