import type { MutationResolvers } from 'types/graphql'

import { AuthenticationError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const upsertRating: MutationResolvers['upsertRating'] = async ({
  postId,
  rating,
}) => {
  try {
    if (typeof context.currentUser.id !== 'string') {
      throw new AuthenticationError('Must be logged in to rate')
    }

    await db.rating.upsert({
      where: {
        userId_postId: {
          userId: context.currentUser.id,
          postId,
        },
      },
      create: {
        userId: context.currentUser.id,
        postId,
        rating,
      },
      update: {
        rating,
      },
    })

    return { success: true }
  } catch (e) {
    console.error(e)

    return { success: false }
  }
}
