const { Router } = require('express')
const alunos = require('../data/alunos')

const router = Router()

router.get('/', (req, res) => {
  res.json(alunos)
})

router.get('/:id', (req, res) => {
  const aluno = alunos.find((a) => a.id === Number(req.params.id))

  if (!aluno) {
    return res.status(404).json({ erro: 'Aluno nao encontrado' })
  }

  res.json(aluno)
})

module.exports = router
