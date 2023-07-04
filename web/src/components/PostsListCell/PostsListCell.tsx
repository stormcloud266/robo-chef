import { useMutation } from '@apollo/client'
import type {
  FindPostsListQuery,
  FindPostsListQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPostsListQuery($take: Int!, $skip: Int!) {
    posts: postsList(take: $take, skip: $skip) {
      id
      title
      excerpt
      slug
      averageRating
      userRating
    }
  }
`

const UPSERT_RATING_MUTATION = gql`
  mutation UpsertRatingMutation($postId: String!, $rating: Int!) {
    upsertRating(postId: $postId, rating: $rating) {
      success
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPostsListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  posts,
}: CellSuccessProps<FindPostsListQuery, FindPostsListQueryVariables>) => {
  const [rate] = useMutation(UPSERT_RATING_MUTATION)

  return (
    <section>
      <p>{JSON.stringify(posts)}</p>
      {posts.map(({ id, title, excerpt, averageRating, userRating }) => {
        return (
          <article key={id} className="border border-gray-300">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="font-bold text-orange-600">
              {userRating || averageRating}
            </p>
            <p>{excerpt}</p>
            <div>
              {[...Array(5).keys()].map((num) => (
                <button
                  onClick={() => {
                    rate({
                      variables: {
                        postId: id,
                        rating: num + 1,
                      },
                    })
                  }}
                  key={num}
                  className=" mr-1 bg-gray-200 p-1"
                >
                  {num + 1}
                </button>
              ))}
            </div>
          </article>
        )
      })}
    </section>
  )
}
