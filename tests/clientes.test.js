const request = require('supertest');
const app = require('../app');

let token;

beforeAll(async () => {
  const res = await request(app)
    .post('/login')
    .send({
      usuario: 'matheus',
      senha: '123senhaSegura'
    });

  token = res.body.token;
});

describe('GET /clientes', () => {
  it('deve retornar lista de clientes com token válido', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
