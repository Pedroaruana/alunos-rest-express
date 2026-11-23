# alunos-rest-express

[![ci](https://img.shields.io/github/actions/workflow/status/Pedroaruana/alunos-rest-express/ci.yml?branch=main&label=ci&logo=githubactions&logoColor=white)](https://github.com/Pedroaruana/alunos-rest-express/actions)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.3-000000?logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-CommonJS-F7DF1E?logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-11-CB3837?logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)
![Excalidraw](https://img.shields.io/badge/Diagrama-Excalidraw-6965DB?logo=excalidraw&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

API REST de uma escola ficticia, feita com Node.js e Express, que lista alunos com nome, telefone e RG.

## Diagrama

![Diagrama da API](docs/diagrama-api.svg)

O arquivo editavel esta em `diagrama-api.excalidraw`.

## Tecnologias

- Node.js
- Express 5
- JavaScript (CommonJS)
- GitHub Actions (CI)
- Excalidraw (diagrama)

## Como rodar

```bash
npm install
npm run dev
```

Servidor em `http://localhost:3000`. A porta pode ser trocada com a variavel `PORT`.

## Endpoints

| Metodo | Rota          | Resposta                                 |
| ------ | ------------- | ---------------------------------------- |
| GET    | `/alunos`     | `200` lista de alunos                    |
| GET    | `/alunos/:id` | `200` aluno ou `404` `{ "erro": "..." }` |

## Exemplos

Listar alunos:

```bash
curl http://localhost:3000/alunos
```

```json
[
  { "id": 1, "nome": "Ana Souza", "telefone": "(11) 91234-5678", "rg": "12.345.678-9" },
  { "id": 2, "nome": "Bruno Lima", "telefone": "(21) 98765-4321", "rg": "23.456.789-0" }
]
```

Buscar por id:

```bash
curl http://localhost:3000/alunos/2
```

```json
{ "id": 2, "nome": "Bruno Lima", "telefone": "(21) 98765-4321", "rg": "23.456.789-0" }
```

Id inexistente:

```bash
curl -i http://localhost:3000/alunos/99
```

```
HTTP/1.1 404 Not Found

{ "erro": "Aluno nao encontrado" }
```

## Modelo

```json
{ "id": 1, "nome": "Ana Souza", "telefone": "(11) 91234-5678", "rg": "12.345.678-9" }
```

## Estrutura

```
src/
  server.js
  routes/alunos.js
  data/alunos.js
docs/diagrama-api.svg
diagrama-api.excalidraw
.github/workflows/ci.yml
```

## Desafio da aula

Modelar em um diagrama uma API REST que lista os dados de alunos de uma escola ficticia (nome, telefone e RG) e implementar o que foi desenhado com Node.js e Express.

## Aprendizados

- Desenhar o fluxo (cliente, router, controller, dados) antes de codar
- Separar rotas e dados em arquivos diferentes
- Usar `Router` do Express e status HTTP corretos (200 e 404)
- Configurar um workflow simples de CI no GitHub Actions

## Autor

Pedro Aruana - [@Pedroaruana](https://github.com/Pedroaruana)

## Licenca

[MIT](LICENSE)
