import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        metaDescription: 'String',
        body: 'String',
        ingredients: 'String',
        preparation: 'String',
        prepTime: 7680871,
        cookTime: 906769,
        rating: 111982,
      },
    },
    two: {
      data: {
        title: 'String',
        metaDescription: 'String',
        body: 'String',
        ingredients: 'String',
        preparation: 'String',
        prepTime: 1151850,
        cookTime: 2408424,
        rating: 8211930,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
