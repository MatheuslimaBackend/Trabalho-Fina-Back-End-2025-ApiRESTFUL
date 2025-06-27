# Autores: Matheus Moreira de Lima & Emanuel Edgard de Carvalho Sousa. Curso: Analise e desenvolvimento de Sistemas.
# 💻 API RESTful - Projeto Final (Back-End 2025)

Este é o projeto final do módulo de Back-End, desenvolvido com Node.js, Express e MySQL. A aplicação expõe uma API RESTful para cadastro de usuários, autenticação com JWT e operações completas de CRUD para **clientes** e **produtos**.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MySQL (via XAMPP)
- JWT (jsonwebtoken)
- Bcrypt
- Jest + Supertest
- Dotenv
- Nodemon
- Node-Cache

---

## 📁 Estrutura do Projeto

├── app.js
├── .env
├── configs/
│ └── db.js
├── controllers/
│ ├── clientesController.js
│ ├── produtosController.js
│ └── loginController.js
├── middlewares/
│ └── auth.js
├── models/
├── routes/
│ ├── clientes.js
│ ├── produtos.js
│ ├── usuarios.js
│ └── login.js
├── services/
│ ├── clientesService.js
│ ├── produtosService.js
│ └── usuariosService.js
├── tests/
│ └── login.test.js


---

## ⚙️ Variáveis de Ambiente

Criei um arquivo `.env` na raiz com as seguintes configurações:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=api_restful
JWT_SECRET=segredo123


---

## 🔐 Autenticação

- A API utiliza **JWT**.
- Após login, o token deve ser enviado no header `Authorization`:

---

## 🔧 Endpoints Principais

### 👤 Usuários

| Método | Rota         | Protegida | Descrição            |
|--------|--------------|-----------|------------------------|
| POST   | /usuarios    | ❌        | Cadastrar usuário     |
| POST   | /login       | ❌        | Autenticar e gerar token |

---

### 🧑‍💼 Clientes (Protegido)

| Método | Rota             | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /clientes        | Listar clientes            |
| GET    | /clientes/:id    | Buscar cliente por ID      |
| POST   | /clientes        | Cadastrar cliente          |
| PUT    | /clientes/:id    | Atualizar cliente          |
| DELETE | /clientes/:id    | Remover cliente            |

---

### 📦 Produtos (Público ou Protegido, conforme sua decisão)

| Método | Rota             | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /produtos        | Listar produtos            |
| GET    | /produtos/:id    | Buscar produto por ID      |
| POST   | /produtos        | Cadastrar produto          |
| PUT    | /produtos/:id    | Atualizar produto          |
| DELETE | /produtos/:id    | Remover produto            |

---

## 🧪 Rodando os Testes

Com `jest` e `supertest` instalados:

```bash
npm test
