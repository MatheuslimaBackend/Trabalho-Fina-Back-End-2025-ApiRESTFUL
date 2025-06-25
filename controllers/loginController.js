const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../configs/db');

exports.login = async (req, res) => {
  try {
    const { usuario, senha } = req.body;

    // Busca o usuário
    const [rows] = await db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

      console.log('Senha recebida:', senha);
      console.log('Senha hash salva:', user.senha);
    const senhaValida = await bcrypt.compare(senha, user.senha);
    console.log('Resultado da comparação:', senhaValida);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Gera o token JWT se estiver tudo certo
    const token = jwt.sign(
      { id: user.id, usuario: user.usuario },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno no login' });
  }
};