const { ApolloServer, gql } = require('apollo-server-express');
const {
  obterTodosPeriodos,
  obterTodasDisciplinas,
  buscarDisciplinaPorId,
} = require('../controllers/disciplinasController');

const typeDefs = gql`
  type Disciplina {
    id: String!
    nome: String!
    descricao: String!
  }

  type Periodo {
    periodo: String!
    disciplinas: [Disciplina!]!
  }

  type Query {
    periodos: [Periodo!]!
    disciplinas: [Disciplina!]!
    disciplina(id: String!): Disciplina
  }
`;

const resolvers = {
  Query: {
    periodos: () => obterTodosPeriodos(),
    disciplinas: () => obterTodasDisciplinas(),
    disciplina: (_, { id }) => buscarDisciplinaPorId(id),
  },
};

const iniciarApolloServer = (app) => {
  const servidor = new ApolloServer({ typeDefs, resolvers });
  servidor.start().then(() => {
    servidor.applyMiddleware({ app });
  });
};

module.exports = iniciarApolloServer;
