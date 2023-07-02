import type { Rating } from '@prisma/client'

import {
  ratings,
  rating,
  createRating,
  updateRating,
  deleteRating,
} from './ratings'
import type { StandardScenario } from './ratings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ratings', () => {
  scenario('returns all ratings', async (scenario: StandardScenario) => {
    const result = await ratings()

    expect(result.length).toEqual(Object.keys(scenario.rating).length)
  })

  scenario('returns a single rating', async (scenario: StandardScenario) => {
    const result = await rating({ id: scenario.rating.one.id })

    expect(result).toEqual(scenario.rating.one)
  })

  scenario('creates a rating', async () => {
    const result = await createRating({
      input: { rating: 6654046 },
    })

    expect(result.rating).toEqual(6654046)
  })

  scenario('updates a rating', async (scenario: StandardScenario) => {
    const original = (await rating({ id: scenario.rating.one.id })) as Rating
    const result = await updateRating({
      id: original.id,
      input: { rating: 1770913 },
    })

    expect(result.rating).toEqual(1770913)
  })

  scenario('deletes a rating', async (scenario: StandardScenario) => {
    const original = (await deleteRating({
      id: scenario.rating.one.id,
    })) as Rating
    const result = await rating({ id: original.id })

    expect(result).toEqual(null)
  })
})
