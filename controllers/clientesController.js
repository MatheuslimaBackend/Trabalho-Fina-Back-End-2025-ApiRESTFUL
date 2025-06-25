const cache = require('../middlewares/cache');

const clienteService = require('../services/clientesService');

exports.listarClientes = async (req, res) => {
  try {
    const cacheKey = 'clientes';

    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    const clientes = await clienteService.listar();
    cache.set(cacheKey, clientes);

    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar clientes' });
  }
};


exports.criarCliente = async (req, res) => {
  try {
    await clienteService.criar(req.body);
    cache.del('clientes'); // limpa o cache após alteração
    res.status(201).json({ mensagem: 'Cliente criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};


exports.atualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await clienteService.atualizar(id, req.body);

    if (!atualizado) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    cache.del('clientes'); // limpa o cache após atualização
    res.status(200).json({ mensagem: 'Cliente atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

exports.deletarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await clienteService.deletar(id);

    if (!deletado) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    cache.del('clientes'); // limpa o cache após exclusão
    res.status(200).json({ mensagem: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cliente' });
  }
};
