const fs = require('fs');
const path = require('path');

// Função para carregar os dados do arquivo JSON
const carregarDisciplinas = () => {
  try {
    const filePath = path.resolve(__dirname, '../data/disciplinas.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Erro ao carregar o arquivo disciplinas.json:', error);
    return [];
  }
};

module.exports = { carregarDisciplinas };
