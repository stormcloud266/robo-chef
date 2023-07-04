export const schema = gql`
  type Query {
    postsList(take: Int, skip: Int): [Post!]! @skipAuth
  }
`
