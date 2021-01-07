import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
    
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
  `,
  resolvers
});

const PORT = process.env.PORT || 4000;
server.start(() => console.log(`Server running on Port : ${PORT}`));
/*
server.listen({ PORT: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
  console.log(`Server running on port : ${PORT}`);
});
*/