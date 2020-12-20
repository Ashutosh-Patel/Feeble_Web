const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const { MongoDB } = require('./config.js')

const typeDefs = require('./GraphQL/typeDefs')

const resolvers = require('./GraphQL/Resolvers/index')

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose.connect(MongoDB, {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('MongoDB connected successfully')
        return server.listen({port:5500});
    })
    .then(res => {
        console.log(`Server started at ${res.url}`);
    })

