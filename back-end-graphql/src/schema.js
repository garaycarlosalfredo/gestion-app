"use strict";
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("graphql-tools");

function buildSchema() {
  // Load resolvers from files
  const resolverFiles = loadFilesSync("./**/*.resolver.js");
  // Merge all resolvers files
  const resolvers = mergeResolvers(resolverFiles);

  // Load schemas from giles
  const typeDefs = loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });
  // combine schema and resolvers using makeExecutableSchema
  return makeExecutableSchema({ typeDefs, resolvers });
}

module.exports = {
  buildSchema,
};
