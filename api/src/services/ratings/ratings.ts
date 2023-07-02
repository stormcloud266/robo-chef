import type {
  QueryResolvers,
  MutationResolvers,
  RatingRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const ratings: QueryResolvers['ratings'] = () => {
  return db.rating.findMany()
}

export const rating: QueryResolvers['rating'] = ({ id }) => {
  return db.rating.findUnique({
    where: { id },
  })
}

export const createRating: MutationResolvers['createRating'] = ({ input }) => {
  return db.rating.create({
    data: input,
  })
}

export const updateRating: MutationResolvers['updateRating'] = ({
  id,
  input,
}) => {
  return db.rating.update({
    data: input,
    where: { id },
  })
}

export const deleteRating: MutationResolvers['deleteRating'] = ({ id }) => {
  return db.rating.delete({
    where: { id },
  })
}

export const Rating: RatingRelationResolvers = {
  user: (_obj, { root }) => {
    return db.rating.findUnique({ where: { id: root?.id } }).user()
  },
  post: (_obj, { root }) => {
    return db.rating.findUnique({ where: { id: root?.id } }).post()
  },
}
