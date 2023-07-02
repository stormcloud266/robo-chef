import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const postsList: QueryResolvers['postsList'] = ({ take, skip }) => {
  return db.post.findMany({
    where: { published: true },
    take,
    skip,
    orderBy: { createdAt: 'desc' },
  })
}
