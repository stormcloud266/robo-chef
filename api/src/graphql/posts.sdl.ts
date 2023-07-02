export const schema = gql`
  type Post {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User
    userId: String
    ratings: [Rating]!
    published: Boolean!
    title: String!
    metaDescription: String!
    slug: String!
    excerpt: String!
    body: String!
    ingredients: [String]!
    preparation: [String]!
    prepTime: Int!
    cookTime: Int!
    averageRating: Int
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: String!): Post @requireAuth
  }

  input CreatePostInput {
    userId: String
    published: Boolean!
    title: String!
    metaDescription: String!
    slug: String!
    excerpt: String!
    body: String!
    ingredients: [String]!
    preparation: [String]!
    prepTime: Int!
    cookTime: Int!
    averageRating: Int
  }

  input UpdatePostInput {
    userId: String
    published: Boolean
    title: String
    metaDescription: String
    slug: String
    excerpt: String
    body: String
    ingredients: [String]!
    preparation: [String]!
    prepTime: Int
    cookTime: Int
    averageRating: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
