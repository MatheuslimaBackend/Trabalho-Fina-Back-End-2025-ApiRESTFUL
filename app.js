const express = require('express');
const app = express();
require('dotenv').config();

// Middleware para interpretar JSON
app.use(express.json());

// Importação das rotas
const clientesRoutes = require('./routes/clientes');
const produtosRoutes = require('./routes/produtos');
const usuariosRoutes = require('./routes/usuarios');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout'); // Rota logout apenas de enfeite

// Registro das rotas
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes); //chamada antes da exportação

// Exportação do app para testes com Jest/Supertest
module.exports = app;

// Inicialização do servidor somente se não estiver em teste
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
