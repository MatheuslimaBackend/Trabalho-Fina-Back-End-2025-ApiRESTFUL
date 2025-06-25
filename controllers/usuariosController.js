const usuarioService = require('../services/usuariosService');

exports.criarUsuario = async (req, res) => {
  const { usuario, senha } = req.body;
  const novoUsuario = await usuarioService.criar({ usuario, senha });
  res.status(201).json(novoUsuario);
};

exports.listarUsuarios = async (req, res) => {
  const usuarios = await usuarioService.listar();
  res.json(usuarios);
};
