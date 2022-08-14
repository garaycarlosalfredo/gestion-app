const {ApolloServer} = require("apollo-server")
const dbConnnect = require('./src/config/db')   //Conexion a base de atos MongoDb
const typeDefs = require("./src/graphql/typeDefs/typeDefs")
const resolvers = require("./src/graphql/resolvers/resolver")

//Conectar a la base de datos
dbConnnect()

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({url})=>{
    console.log(`Server is running on ${url}`)
})