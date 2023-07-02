import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        body: 'String',
        ingredients: 'String',
        preparation: 'String',
        prepTime: 8387628,
        cookTime: 6140259,
        rating: 8001856,
      },
    },
    two: {
      data: {
        body: 'String',
        ingredients: 'String',
        preparation: 'String',
        prepTime: 2092475,
        cookTime: 9920465,
        rating: 2048746,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
