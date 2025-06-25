const db = require('../configs/db');

exports.listar = async () => {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
};

exports.criar = async (produto) => {
  const { nome, descricao, preco } = produto;
  const dataAtual = new Date();
  const [result] = await db.query(
    'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)',
    [nome, descricao, preco, dataAtual]
  );
  return { id: result.insertId, ...produto, data_atualizado: dataAtual };
};

exports.atualizar = async (id, produto) => {
  const { nome, descricao, preco } = produto;
  const dataAtual = new Date();
  await db.query(
    'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?',
    [nome, descricao, preco, dataAtual, id]
  );
  return { id, nome, descricao, preco, data_atualizado: dataAtual };
};

exports.deletar = async (id) => {
  await db.query('DELETE FROM produtos WHERE id = ?', [id]);
};

exports.obterPorId = async (id) => {
  const [rows] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
  return rows[0]; // retorna só um produto
};
