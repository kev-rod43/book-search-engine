const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
}

type Book {
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

input BookInput {
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    me(username: String, userId: String): User    
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String, username: String, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs; 