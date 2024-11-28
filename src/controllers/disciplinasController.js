const { carregarDisciplinas } = require('../models/disciplinasModel');

// Retorna todos os períodos com suas disciplinas
const obterTodosPeriodos = () => {
  return carregarDisciplinas();
};

// Retorna todas as disciplinas como um array plano
const obterTodasDisciplinas = () => {
  return carregarDisciplinas().flatMap((periodo) => periodo.disciplinas);
};

// Busca uma disciplina pelo ID
const buscarDisciplinaPorId = (id) => {
  return obterTodasDisciplinas().find((disciplina) => disciplina.id === id);
};

module.exports = { obterTodosPeriodos, obterTodasDisciplinas, buscarDisciplinaPorId };
