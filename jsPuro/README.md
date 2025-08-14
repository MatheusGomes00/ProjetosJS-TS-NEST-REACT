# Sistema de Gerenciamento de Vendas em JS

## Descrição
Este projeto é um exercício prático para revisar **JavaScript puro**, utilizando apenas a biblioteca `readline` do Node.js para capturar entradas do console. O objetivo é explorar fundamentos de JavaScript, como arrays, funções assíncronas, Promises, condicionais, loops e manipulação de dados, através de um sistema de gerenciamento de vendas.

O sistema permite:
- Cadastrar vendas (nome do vendedor, valor, data).
- Listar todas as vendas.
- Calcular o total de vendas.
- Filtrar vendas por valor (menor ou maior que um valor especificado).
- Verificar se um vendedor atingiu uma meta de vendas.
- Sair do programa.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **readline**: Módulo nativo para entrada de dados via console.
- **JavaScript (ES6+)**: Usado com ES modules (`import`, `async/await`).


## Pré-requisitos
- Node.js (v16 ou superior)
- Editor de texto (ex.: VS Code)


## Como Usar
1. Rode `node index.js`.
2. Escolha uma opção de 1 a 6 no menu interativo:
    - **1**: Adicionar uma venda (nome do vendedor, valor, data no formato DD-MM-AAAA).
    - **2**: Listar todas as vendas.
    - **3**: Calcular o total de vendas.
    - **4**: Filtrar vendas por valor (menor ou maior que um valor).
    - **5**: Verificar se um vendedor atingiu a meta de R$1000.
    - **6**: Sair do programa.
3. Digite as entradas solicitadas no console.

## Conceitos Explorados
- **let vs const**: Uso de `let` para a lista `vendas` (reatribuível) e `const` para objetos imutáveis.
- **Tipos primitivos**: Strings (nome, data), números (valor, ID), validação com `typeof` e `isNaN`.
- **Operadores**: Matemáticos (`+` para somar vendas), comparação (`>`, `<`, `===`), lógicos (`&&`, `||`).
- **Condicionais**: `if` para validação, `switch` no menu.
- **Loops**: `for...of` para listar vendas, `while` no menu interativo.
- **Assincronia**: Uso de `async/await` com Promises para entradas do console via `readline`.

## Exemplo de Saída
```
Digite uma opcao de 1 a 6:
1 - Adicionar Venda
2 - Listar Vendas
3 - Calcular Total de Vendas
4 - Filtrar Vendas por Valor
5 - Verificar Meta de Vendas
6 - Sair.
Opcao: 1
Nome Cliente: Ana
Valor da venda: 1500
Data (DD-MM-AAAA): 15-08-2025
Venda adicionada: Ana - R$1500 em 15-08-2025
```
