import gql from 'graphql-tag';

export const QUERY = gql `
{
    me {
        username
        email
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
        }

    }
}

`
