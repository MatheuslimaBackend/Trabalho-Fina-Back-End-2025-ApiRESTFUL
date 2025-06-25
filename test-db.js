const pool = require('./configs/db');

(async () => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS resultado');
    console.log('✅ Conexão com o banco funcionando. Resultado:', rows[0].resultado);
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco:', error.message);
  }
})();