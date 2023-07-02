export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    authId: String!
    email: String
    posts: [Post]!
    ratings: [Rating]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    authId: String!
    email: String
  }

  input UpdateUserInput {
    authId: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
