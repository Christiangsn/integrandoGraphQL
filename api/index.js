const { ApolloServer, gql } = require('apollo-server')
const userSchema = require('./users/schema/user.graphql');

const users  = [
    { 
        name: 'Ana',
        active: true

    },
    { 
        name: 'João',
        active: false

    }
]

const typeDefs = [ userSchema ];
const resolvers = {}

const server = new ApolloServer( { typeDefs, resolvers });