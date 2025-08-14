#CRUD Simples com Node.js, Express, MongoDB e React
##Descrição
Este projeto é parte do estudo inicial de JavaScript e React, com foco na criação de uma aplicação CRUD (Create, Read, Update, Delete) simples. O objetivo é aprender conceitos fundamentais do ecossistema JavaScript, como funções assíncronas, Promises, manipulação de listas e integração entre backend e frontend.

---

**Backend:** API RESTful construída com Node.js, Express e MongoDB (usando Mongoose) para gerenciar itens (ex.: nome e preço).
**Frontend:** Interface básica em React com JavaScript, permitindo cadastrar, listar e deletar itens.
**Funcionalidades:**
*Cadastrar itens via formulário.
*Listar todos os itens salvos no banco.
*Deletar itens específicos.

---

##Tecnologias Utilizadas

**Backend:**
*Node.js
*Express
*MongoDB (Mongoose)
*CORS

---

**Frontend:**
*React (Create React App)
*JavaScript (ES6+)
*Axios ou Fetch (para chamadas à API)

---

**Outras ferramentas:**
*Visual Studio Code
*Postman (para testar a API)
*MongoDB Community Server

---

Estrutura do Projeto
crud1/
├── backend/
│   ├── config/
│   │   └── db.js              # Configuração da conexão com MongoDB
│   ├── models/
│   │   └── ItemSchema.js      # Schema do Mongoose para itens
│   ├── routes/
│   │   └── itemRotas.js       # Rotas da API
│   ├── controllers/
│   │   └── itemController.js  # Lógica das rotas
│   ├── server.js              # Ponto de entrada do backend
│   └── package.json
├── frontend/crud-frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItemForm.js    # Formulário para adicionar itens
│   │   │   └── ItemList.js    # Lista de itens com botão de exclusão
│   │   ├── services/
│   │   │   └── api.js        # Configuração do Axios
│   │   ├── App.js            # Componente principal
│   │   ├── App.css           # Estilos básicos
│   │   └── index.js
│   └── package.json
└── README.md

---

Pré-requisitos

Node.js (v16 ou superior)
MongoDB (local ou Atlas)
Navegador moderno (para o frontend)
Postman (opcional, para testar a API)

---

Instalação

Clone o repositório:
git clone https://github.com/MatheusGomes00/ProjetosJS-TS-NEST-REACT.git
cd crud1


Configurar o backend:
cd backend
npm install


Crie um arquivo .env com a conexão do MongoDB:MONGODB_URI=mongodb://localhost:27017/crud1


Inicie o servidor:npm start

O backend rodará em http://localhost:5001.

---

Configurar o frontend:
cd frontend
npm install
npm start

O frontend rodará em http://localhost:3000.

MongoDB:

Certifique-se de que o MongoDB está rodando localmente (mongod) ou use MongoDB Atlas.



Como Usar

Acesse http://localhost:3000 no navegador.
Use o formulário para adicionar itens (ex.: nome e preço).
Veja a lista de itens renderizada.
Clique em "Excluir" para remover um item.
Teste a API diretamente com Postman:
GET /api/itens: Lista todos os itens.
POST /api/itens/criar: Cria um item (envie { "nome": "Item", "preco": 10 }).
DELETE /api/itens/excluir/:id: Deleta um item pelo ID.



Estrutura da API



Método
Endpoint
Descrição



GET
/api/itens
Lista todos os itens


POST
/api/itens/criar
Cria um novo item


DELETE
/api/itens/excluir/:id
Deleta um item pelo ID


Conceitos Explorados

JavaScript: Arrays (listas), funções assíncronas, Promises, manipulação de objetos.
React: Componentes funcionais, useState, useEffect, integração com API.
Node.js/Express: Criação de rotas, middlewares, conexão com banco.
MongoDB/Mongoose: Schemas, operações CRUD assíncronas.
Assincronia: Uso de async/await para chamadas à API e operações de banco.

Melhorias Futuras

Adicionar funcionalidade de atualização (PUT).
Implementar validação no frontend e backend.
Adicionar estilização com Bootstrap ou Tailwind.
Migrar para TypeScript para tipagem estática.
Explorar Next.js para renderização server-side.
