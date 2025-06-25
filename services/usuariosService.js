const db = require('../configs/db');
const bcrypt = require('bcrypt');

exports.criar = async ({ usuario, senha }) => {
  const hash = await bcrypt.hash(senha, 10);
  const [result] = await db.query(
    'INSERT INTO usuarios (usuario, senha) VALUES (?, ?)',
    [usuario, hash]
  );
  return { id: result.insertId, usuario };
};

exports.listar = async () => {
  const [rows] = await db.query('SELECT id, usuario FROM usuarios');
  return rows;
};
