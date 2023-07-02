import type { Prisma, Rating } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RatingCreateArgs>({
  rating: {
    one: { data: { rating: 2897764 } },
    two: { data: { rating: 1860668 } },
  },
})

export type StandardScenario = ScenarioData<Rating, 'rating'>
