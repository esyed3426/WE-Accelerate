const { ApolloServer } = require('apollo-server');
const { PORT = 3030 } = process.env;
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const data = require('./data');
const server = new ApolloServer({ typeDefs, resolvers });



server
    .listen(PORT)
    .then(({url}) => console.log(`Server is listening at ${url}`));