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
}
