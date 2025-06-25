const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.status(200).json({ mensagem: 'Logout efetuado com sucesso' });
});

module.exports = router;