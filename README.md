# Sistema Operadora de Saude (Teste 4)
![Hex.pm](https://img.shields.io/badge/node-%3E%3D%2010.18-blue?logo=Node.js&link=https://nodejs.org/en/) ![vue.pm](https://img.shields.io/badge/node-%3E%3D%204.5.9-blue?logo=Vue.js)

Projeto Vue.JS de um sistema simples voltado a busca e consulta de operadoras da area de saude no Brasil

## Execução

### Configuração

O projeto desenvolvido utiliza o `Node.js` na versão `10.18` e a framework do `@vue/cli` 
na sua versão `4.5.9`.

Para instalar as dependencias, executar na pasta raiz:

```$ yarn install```

### Backend

No ambiente Linux, basta estar na pasta root do projeto e digitar via terminal:

```$ yarn dev ```

Este rodará a parte do back do sistema, rodado na rota `http://localhost:5000/api/operators/`.

### Frontend

Para a execução do front, entre na pasta `/client` e execute:

```$ yarn run serve ```

Como parte do sistema integrado do `front + back`, ambos servidores devem estar rodando 
juntos simultaneamente. O front roda na rota `http://localhost:8080/`.

### Credits
elephant clipart PNG Designed By Mark1987 from <a href="https://pngtree.com">Pngtree.com</a>