![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-db7093.svg?style=for-the-badge&logo=styled-components&logoColor=white) ![Axios](https://img.shields.io/badge/axios-671ddf.svg?style=for-the-badge&logo=axios&logoColor=white) ![JSON Server](https://img.shields.io/badge/json--server-000000.svg?style=for-the-badge&logo=json&logoColor=white)

# TitunTech Login

Aplicação web desenvolvida com React para simular o acesso a uma plataforma da TitunTech. O projeto possui páginas de início, login, cadastro de usuários e feed, com navegação entre rotas usando React Router. Este projeto é a solução do desafio de projeto 3 da Formação React Developer da DIO.

O login consulta os usuários armazenados em um backend simulado com `json-server`. A página de cadastro valida os dados, verifica se o email já está registrado e cria novos usuários no arquivo `db.json`, atribuindo um ID inteiro sequencial.

## Tecnologias

- React
- JavaScript
- Styled Components
- React Router DOM
- React Hook Form
- Yup
- Axios
- JSON Server `0.17.4`
- Create React App

## Estrutura do projeto

```text
.
├── db.json
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── assets/
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Header/
│   │   ├── Input/
│   │   └── UserInfo/
│   ├── pages/
│   │   ├── cadastro/
│   │   ├── feed/
│   │   ├── home/
│   │   └── login/
│   ├── services/
│   │   └── api.js
│   └── styles/
│       └── global.js
├── package.json
└── README.md
```

### Responsabilidades principais

- `src/App.js`: configura as rotas `/`, `/login`, `/cadastro` e `/feed`.
- `src/pages/home`: apresenta a página inicial e direciona o usuário para o login.
- `src/pages/login`: valida email e senha e consulta o endpoint `GET /users` usando Axios.
- `src/pages/cadastro`: valida nome, email e senha; impede emails duplicados; calcula o próximo ID e cria usuários com `POST /users`.
- `src/pages/feed`: exibe o feed apresentado após o login.
- `src/components`: reúne os componentes reutilizáveis de botão, cabeçalho, campos de entrada, cards e informações de usuários.
- `src/services/api.js`: configura a instância Axios com a URL base `http://localhost:8001`.
- `db.json`: funciona como banco de dados local dos usuários.

## Como executar

Instale as dependências do projeto:

```bash
npm install
```

Em um terminal, inicie o backend simulado:

```bash
npm run api
```

O `json-server` ficará disponível em [http://localhost:8001](http://localhost:8001), com os usuários em [http://localhost:8001/users](http://localhost:8001/users).

Em outro terminal, inicie a aplicação React:

```bash
npm start
```

Depois, acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Fluxos disponíveis

- **Login:** exige email e senha válidos cadastrados em `db.json`. Após a autenticação, direciona para `/feed`.
- **Cadastro:** exige nome, email válido e senha com pelo menos seis caracteres. Emails já existentes não são cadastrados.
- **Novo usuário:** o cadastro grava os campos `id`, `name`, `email` e `senha`. O `id` é calculado como o maior ID atual mais 1.
- **Navegação:** a página inicial, o cabeçalho e os links de login/cadastro permitem navegar entre as páginas da aplicação.

## Outros comandos

Gerar uma versão otimizada para produção:

```bash
npm run build
```

Executar os testes configurados pelo Create React App:

```bash
npm test
```

## Observações

- O backend é apenas uma simulação local baseada no arquivo `db.json`; não há autenticação de produção ou banco de dados real.
- As senhas são armazenadas em texto simples para fins didáticos. Em uma aplicação real, elas devem ser protegidas no backend com hash e mecanismos de autenticação adequados.
- O `json-server` está fixado na versão `0.17.4` para preservar os IDs dos usuários como números inteiros.
- É necessário manter o backend em execução na porta 8001 enquanto a aplicação React estiver sendo utilizada.
