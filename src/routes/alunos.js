const { Router } = require('express')
const alunos = require('../data/alunos')

const router = Router()

router.get('/', (req, res) => {
  res.json(alunos)
})

module.exports = router
