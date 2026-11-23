const express = require('express')
const alunosRouter = require('./routes/alunos')

const app = express()
const PORT = process.env.PORT || 3000

app.use('/alunos', alunosRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
