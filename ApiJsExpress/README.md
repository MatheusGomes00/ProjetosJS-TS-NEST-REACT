# API para Gerenciamento de Vendas com NodeJS, Express e MongoDB

## Descrição
Objetivo deste projeto é criar uma API backend para um sistema de gerenciamento interno de
vendas. A ideia é permitir controlar vendedores, suas vendas e metas a serem atingidas.
O sistema foi pensado para uma central de atendimento voltada para vendas facilitando a 
consulta e geração de relatórios e também para evitar o uso de planilhas sobrecarregadas.
Este projeto é a continuação do diretório [jsPuro](../jsPuro) deste repositório.

## Funcionamento
1. Visão Geral da API
   - Esta API gerencia vendedores, metas e vendas. Permite cadastrar vendedores, registrar
   vendas, definir metas a ser atingidas e consultar relatórios.
2. Modelos (MongoDB Schemas)
```
   Vendedor
   - nomeVendedor: String (obrigatório)
   - email: String (único, obrigatório)
   - ativo: Boolean (default:true)

   Venda
   - vendedorId: ObjectId (obrigatório, referência para Vendedor)
   - codigoVenda: String (único, default:UUIDv4, obrigatório)
   - categoria: String (obrigatório, enum:["Carro", "Moto", "Imobiliario", "Caminhao", "Aviao", "Seguro"])
   - valorVenda: Number (obrigatório)
   - dataVenda: Date (obrigatório, default:Date.now)

   Meta
   - tipoMeta: String (obrigatório, enum:["bronze", "prata", "ouro"])
   - periodo: String (obrigatório, enum:["mensal", "trimestral", "semestral", "anual"])
   - valorMeta: Number (obrigatório)
   obs.: gerado indice composto para aceitar apenas 1 conjunto tipoMeta + periodo
```   
3. Endpoints
```
Foram definidas 3 rotas principais com suas subdivisões, vendedor, vendas e metas:
/api/vendedor
POST /cadastrar                         Cadastrar novo vendedor
GET /listar                             Listar vendedores
GET /meta-mensal/:vendedorId            Verificar meta mensal por vendedor
GET /meta-mensal-todos                  Verificar meta mensal de todos vendedores
PUT /editar/:vendedorId                 Editar vendedor
DELETE /remover/:vendedorId             Excluir vendedor de forma lógica

/api/vendas
POST /adicionar/:vendedorId             Adicionar venda
GET /listar                             Listar vendas
GET /buscar/:codigoVenda                Buscar venda por código
GET /vendedor/:vendedorId               Buscar vendas por vendedor
GET /calc-total                         Calcular total de vendas
POST /filtrar-valor                     Filtrar vendas por valor
PUT /editar/:codigoVenda                Editar venda
DELETE /remover/:codigoVenda            Remover venda

/api/metas
POST /cadastrar                         Cadastrar nova meta
PUT /editar/:metaId                     Editar meta existente
GET /buscar                             Buscar metas cadastradas                         
```
4. Fluxo de funcionamento
<img src="./static/fluxo inicial.png">

5. Estrutura de pastas
```
/ApiJsExpress
    /config
    /routes
    /schemas
    /service
    /static
    .env
    server.js
```


## Como Usar
1. Após baixado projeto, abra uma IDE de sua preferência na raiz do projeto.
2. Abra o terminal e instale as dependências do package.json com `npm install`.
3. Depois inicie o servidor com `node server.js`. É esperado que apareça as seguintes mensagens no console:
```
    MongoDB conectado.
    Servidor rodando na porta 5005.
```
4. Teste os endpoints em uma ferramenta para consumir APIs como `Insomnia` ou `Postman`. Caso você já tenha o `Insomnia` instalado, na raiz deste repositório tem uma pasta [CollectionsInsomnia](../CollectionsInsomnia) com arquivo .yaml que pode ser importado para testes.


## Tecnologias Utilizadas
- **NodeJS 22**
- **Framework Express**
- **Banco de dados NoSQL MongoDB**
- **Lib Mongoose**
- **Insomnia**

## Conceitos Explorados
- **Estrutura modularizada**: Separação de responsabilidades entre as camadas do servidor, facilitando os testes, manutenção e refatoração futura.
- **Padronização JSON**: Respostas da api seguem um padrão json, garantindo consistência e facilitando a integração com o frontend.
- **Validação de entradas**: Garantia de que os dados que são recebidos em uma requisição estão de acordo com os requisitos dos modelos estruturados.
- **Métodos HTTP**: Operações essenciais para manipular dados na web como `GET, POST, PUT, DELETE`.
- **Métodos da lib mongoose**: Métodos utilizados para persistência e consulta de dados como `.findOneAndUpdate()`, `.create()`, `.save()`, `.aggregate()`, `.findOneAndDelete()`.
- **Exclusão lógica/física**: Ao receber uma requisição para remover um recurso, optar remover o registro do banco de dados ou apenas alterar o status de um campo.
- **Assincronia**: Uso de `async/await` com Promises para criação de funções e manipulação do banco de dados.
- **Princípios REST**: Organização da API seguindo boas práticas de recursos, rotas semânticas e uso adequado dos códigos de status HTTP.
- **Códigos de Status HTTP**: Retorno de mensagens padronizadas com status como 200, 400, 404, 500 para indicar o resultado das requisições.
- **Testes com clientes de API**: Uso do Insomnia para validar endpoints.


## Próximos Passos
- **Testes automatizados:** Implementar testes unitários e de integração para garantir a qualidade e a estabilidade da API.
- **Migração para banco SQL:** Por facilidade de conexão, baixa complexidade de estruturação de modelos e testes rápidos, utilizei o MongoDB. Entretanto para geração de relatórios o SQL se mostrou mais recomendado pela rede. Além disso os modelos que já foram criados possui relacionamentos e os campos são fixos não apresentando muita margem para variação ou novos campos.
- **Autenticação e Autorização:** Adicionar uma camada de segurança para controle de acesso. A proposta é criar uma API stateless utilizando `JWT` para autenticação e `bcrypt` para hashing de senhas.
- **Manipulação global de erros:** Utilizar os recursos do `Express` para centralizar e padronizar o tratamento de erros, fornecendo respostas mais claras para o cliente.
- **Integração com frontend:** Habilitar `CORS` e realizar testes de consumo da API diretamente a partir do frontend, garantindo compatibilidade entre as camadas.
