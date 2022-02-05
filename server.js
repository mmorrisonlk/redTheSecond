const { ApolloServer } = require('apollo-server');
// const mongoose = require('mongoose');


const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
// const { MONGODB } = require('./config.js');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks: true,
    context: ({ req }) => ({ req })
});

// mongoose
//   .connect(MONGODB, { useNewUrlParser: true })
//   .then(() => {
//     console.log('MongoDB Connected');
//     return server.listen({ port: 5000 });
//   })
//   .then((res) => {
//     console.log(`Server running at ${res.url}`);
//   })
//   .catch(err => {
//     console.error(err)
//   })

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});