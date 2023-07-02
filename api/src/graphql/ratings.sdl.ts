export const schema = gql`
  type Rating {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User
    userId: String
    post: Post
    postId: String
    rating: Int!
  }

  type Query {
    ratings: [Rating!]! @requireAuth
    rating(id: String!): Rating @requireAuth
  }

  input CreateRatingInput {
    userId: String
    postId: String
    rating: Int!
  }

  input UpdateRatingInput {
    userId: String
    postId: String
    rating: Int
  }

  type Mutation {
    createRating(input: CreateRatingInput!): Rating! @requireAuth
    updateRating(id: String!, input: UpdateRatingInput!): Rating! @requireAuth
    deleteRating(id: String!): Rating! @requireAuth
  }
`
