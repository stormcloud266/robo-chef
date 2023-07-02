import type { Prisma, Rating } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RatingCreateArgs>({
  rating: {
    one: { data: { rating: 9310768 } },
    two: { data: { rating: 1467170 } },
  },
})

export type StandardScenario = ScenarioData<Rating, 'rating'>
