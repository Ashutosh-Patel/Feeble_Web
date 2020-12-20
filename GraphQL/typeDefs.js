const gql = require('graphql-tag')

module.exports = gql`
    type Blog {
        id: ID,
        username: String,
        body: String!,
        createdAt: String,
    }
    type User {
        id: ID!,
        email: String!,
        username: String!,
        token: String!,
        createdAt: String!,
        
    }

    input RegisterInput {
        username: String!,
        password: String!,
        confirmPassword: String!,
        email: String!,
    }

    type Query{
        getBlogs: [Blog]
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        
    }
`;