export const schema = gql`
  type Post {
    id: String!
    user: User
    userId: String
    body: String!
    ingredients: [String]!
    preparation: [String]!
    prepTime: Int!
    cookTime: Int!
    rating: Int!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: String!): Post @requireAuth
  }

  input CreatePostInput {
    userId: String
    body: String!
    ingredients: [String]!
    preparation: [String]!
    prepTime: Int!
    cookTime: Int!
    rating: Int!
  }

  input UpdatePostInput {
    userId: String
    body: String
    ingredients: [String]!
    preparation: [String]!
    prepTime: Int
    cookTime: Int
    rating: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
