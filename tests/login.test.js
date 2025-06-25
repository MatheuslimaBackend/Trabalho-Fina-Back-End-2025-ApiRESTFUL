const request = require('supertest');
const app = require('../app'); // importa o app Express

describe('POST /login', () => {
  it('deve retornar um token ao logar com credenciais válidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        usuario: 'matheus',
        senha: '123senhaSegura'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
