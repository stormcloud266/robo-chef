import type { PostRelationResolvers, QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const postsList: QueryResolvers['postsList'] = ({ take, skip }) => {
  return db.post.findMany({
    where: { published: true },
    take,
    skip,
    orderBy: { createdAt: 'desc' },
  })
}

export const Post: PostRelationResolvers = {
  averageRating: async (_obj, { root }) => {
    const ratings = await db.rating.aggregate({
      where: { postId: root?.id },
      _avg: {
        rating: true,
      },
    })
    return ratings._avg.rating
  },
  userRating: async (_obj, { root }) => {
    if (typeof context.currentUser.id !== 'string') {
      return undefined
    }

    const { rating } = await db.rating.findUnique({
      where: {
        userId_postId: {
          postId: root?.id,
          userId: context.currentUser.id,
        },
      },
      select: {
        rating: true,
      },
    })

    return rating
  },
}
