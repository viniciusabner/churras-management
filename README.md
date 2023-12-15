# churras-management

## Status

🚧 Em construção... 🚧

### Descrição do Projeto

Projeto simples para gerenciamento de eventos.

São 3 páginas: a primeira (/home) de login (admin@admin.com.br) e senha (123456), a segunda (/list) de listagem dos eventos e a terceira (/details) com os detalhes do eventos, podendo adicionar e remover participantes.

Foi utilizado Next.JS, Tailwind, Typescript, Storybook

#### Features

- [x] Criar component de login e senha simples;
- [x] Incluir novo churrasco com data e nome;
- [x] Mostrar a lista de churrascos cadastrados;
- [x] Adicionar e remover participantes (colocando o seu valor de contribuição);
- [x] Visualizar os detalhes do churrasco, total de participantes e valor arrecadado;
- [ ] Colocar um valor sugerido por usuário de contribuição (valor com e sem bebida inclusa);

Extras:

- [ ] Criar um endpoint simples para poder retirar os dados do localstorage;
- [ ] Fazer validação de login e senha mais segura, utilizando JWT;;
- [ ] Criar calculadora de churrasco
- [ ] Criação de testes unitários com Jest

### Pré-requisitos

[Node.js](https://nodejs.org/en/)
[VSCode](https://code.visualstudio.com/)

# Clone este repositório

$ git clone <https://github.com/viniciusabner/churras-management>

# Instale as dependências

$ npm install

# Execute a aplicação em modo de desenvolvimento

$ npm run dev
