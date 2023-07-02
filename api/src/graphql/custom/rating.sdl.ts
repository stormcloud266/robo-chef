export const schema = gql`
  type UpsertRatingResponse {
    success: Boolean!
  }

  type Mutation {
    upsertRating(postId: String, rating: Int): UpsertRatingResponse!
      @requireAuth
  }
`
