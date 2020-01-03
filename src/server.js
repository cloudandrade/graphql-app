const { GraphQLServer} = require('graphql-yoga');
const resolvers = require("./graphql/resolvers")
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/graphqlnode", {
    useNewUrlParser: true
})


const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'graphql/schema.graphql'),
    resolvers: resolvers
});
//port 4000
server.start();