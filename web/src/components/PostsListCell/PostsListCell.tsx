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
  return (
    <section>
      {posts.map(({ id, title, excerpt }) => {
        return (
          <article key={id} className="border border-gray-300">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="font-bold text-orange-600"></p>
            <p>{excerpt}</p>
          </article>
        )
      })}
    </section>
  )
}
