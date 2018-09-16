import { neo4jgraphql } from "neo4j-graphql-js";
import fs from 'fs';
import path from 'path';

export const typeDefs = 
  fs.readFileSync(process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql"))
    .toString('utf-8');

export const resolvers = {
  Query: {
  	users: neo4jgraphql,
  	locations: neo4jgraphql,
  	things: neo4jgraphql,
  	tags: neo4jgraphql,
  }
};
