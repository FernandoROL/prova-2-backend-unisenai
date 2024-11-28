const express = require('express');
const {
  obterTodosPeriodos,
  obterTodasDisciplinas,
  buscarDisciplinaPorId,
} = require('../controllers/disciplinasController');

const router = express.Router();

// Rota: Retorna todos os períodos com suas disciplinas
router.get('/periodos', (req, res) => {
  const periodos = obterTodosPeriodos();
  res.json(periodos);
});

// Rota: Retorna todas as disciplinas
router.get('/disciplinas', (req, res) => {
  const disciplinas = obterTodasDisciplinas();
  res.json(disciplinas);
});

// Rota: Retorna uma disciplina específica pelo ID
router.get('/disciplinas/:id', (req, res) => {
  const disciplina = buscarDisciplinaPorId(req.params.id);
  if (disciplina) {
    res.json(disciplina);
  } else {
    res.status(404).json({ mensagem: 'Disciplina não encontrada' });
  }
});

module.exports = router;
