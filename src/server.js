const express = require('express');
const restRoutes = require('./routes/restRoutes');
const iniciarApolloServer = require('./routes/graphqlSchema');

const app = express();
const PORTA = 3000;

app.use('/api', restRoutes);

iniciarApolloServer(app);

app.listen(PORTA, () => {
  console.log(`Servidor REST rodando em: http://localhost:${PORTA}/api`);
  console.log(`Servidor GraphQL rodando em: http://localhost:${PORTA}/graphql`);
});
