import gql from 'graphql-tag';

export const LOGIN = gql `

Mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`