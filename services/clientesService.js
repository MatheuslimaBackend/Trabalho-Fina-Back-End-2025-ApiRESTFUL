const db = require('../configs/db');

exports.listar = async () => {
  const [rows] = await db.query('SELECT * FROM clientes');
  return rows;
};

exports.criar = async (dados) => {
  const { nome, sobrenome, email, idade } = dados;

  await db.query(
    'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
    [nome, sobrenome, email, idade]
  );
};

exports.atualizar = async (id, cliente) => {
  const { nome, sobrenome, email, idade } = cliente;
  await db.query(
    'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?',
    [nome, sobrenome, email, idade, id]
  );
  return { id, ...cliente };
};

exports.deletar = async (id) => {
  await db.query('DELETE FROM clientes WHERE id = ?', [id]);
};