# Coodesh Much Tech Challenge

Código criado para o desafio relacionado à vaga de Backend NodeJS na Coodesh.

Repositório do Desafio: https://github.com/sousaprogramador/pharma_Inc_api

&nbsp;

Menu:

- [Ferramentas Utilizadas](#ferramentas-utilizadas)
- [Instalação](#instalação)
- [Arquivo de configuração](#arquivo-de-configuração)
- [Documentação da API](#documentação-da-api)

&nbsp;

## Ferramentas Utilizadas

Para desenvolvimento desse aplicativo foram utilizadas as ferramentas à seguir:

- NestJS (framework) utilizando Typescript
- Swagger (documentação da api)
- Lint e Prettier (formatação e qualidade do código)

&nbsp;

## Instalação

Executar o comando para instalar as dependências

```bash
$ yarn
# ou
$ npm install
```

&nbsp;

## Arquivo de configuração

Criar um arquivo `.env` baseado no arquivo `.env.example`, editando os valores que já existem, caso necessário, e inserindo os que estão vazios.

&nbsp;

## Executar a aplicação com Docker

Executar o comando:

```bash
$ docker-compose up -d 
```

OBS: esse comando inicializará a aplicação

&nbsp;

## Acesso ao projeto

Após executar o projeto o mesmo poderá ser visualizado através da URL:

`http://localhost:{PORT}/`

Onde `{PORT}` é o valor da porta configurada no arquivo `.env`, por padrão é a 3333.

`http://localhost:{PORT}/docs`

&nbsp;



