import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String, $username: String, $password: String!){
        login(email: $email, username: $username, password: $password){
            token: ID!
            user: User
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token: ID!
            user: User
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput){
        saveBook(input: $input){
            _id: ID!
            username: String!
            email: String!
            bookCount: Int!
            savedBooks: [Book]
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId){
            _id: ID!
            username: String!
            email: String!
            bookCount: Int!
            savedBooks: [Book]
        }
    }
`;