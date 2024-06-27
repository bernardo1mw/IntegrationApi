# SaaS Integration API

Este projeto implementa um servidor de API REST utilizando Node.js e NestJS, retornando dados de usuários após aplicar transformações específicas, como ofuscação de e-mails e formatação de datas, conforme requisitos.

## Tecnologias Utilizadas

- Node.js
- NestJS
- Axios (para requisições HTTP)
- Jest (para testes unitários)
- Supertest (para testes de integração)

## Pré-requisitos

- Node.js instalado na máquina local
- Arquivo `.env` configurado (conforme `.env.example`)

## Instalação

1. Clone o repositório para a sua máquina local:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. Instale as dependências do projeto:

    ```bash
    cd <NOME_DO_DIRETORIO>
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias:

    ```env
    API_URL=http://localhost:3000
    ```

## Execução

Primeiro inicie a api mock com
```bash
npm install -g json-server
cd config
json-server --watch db.json
```

## Testes

Para rodar os testes execute
```bash
npx jest
```

Para iniciar o servidor:

```bash
npm start
```

## Outros comentários
O framework NestJs foi escolhido pela minah familiaridade com ele e por seus diversos benefícios e popularidade.

Algumas vantagens são:
- Modularidade e Organização de Código: NestJS incentiva uma estrutura de código modular, o que facilita a organização do projeto em módulos distintos. Isso pode ser útil para separar a lógica de integração com a API, transformação de dados, manipulação de erros e outros aspectos do projeto.

 - Injeção de Dependência: A injeção de dependência (DI) é um padrão de design que torna o código mais testável e gerenciável. NestJS tem um poderoso sistema de DI embutido que pode simplificar a gestão das dependências no seu projeto.

 - Suporte para Middleware e Guards: NestJS oferece suporte integrado para middleware e guards, permitindo adicionar facilmente funcionalidades como autenticação, autorização e logging.

 - Testabilidade: NestJS é projetado com testabilidade em mente. Ele fornece utilitários para facilitar a criação de testes unitários e de integração.
