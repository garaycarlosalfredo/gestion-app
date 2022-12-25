const { ApolloServer } = require("apollo-server");
const dbConnnect = require("./src/config/db"); // Conexion a base de atos MongoDb
const { buildSchema } = require("./src/schema"); // Build schema for Apollo server
const { printSchema } = require("graphql"); // To check schema builded

// Database conector
dbConnnect();

console.log("recived schema in graphql", printSchema(buildSchema()));
const server = new ApolloServer({ schema: buildSchema() });

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
