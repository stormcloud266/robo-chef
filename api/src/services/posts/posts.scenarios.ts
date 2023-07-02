import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        metaDescription: 'String',
        slug: 'String',
        excerpt: 'String',
        body: 'String',
        ingredients: 'String',
        preparation: 'String',
        prepTime: 3784289,
        cookTime: 7327303,
        rating: 5774931,
      },
    },
    two: {
      data: {
        title: 'String',
        metaDescription: 'String',
        slug: 'String',
        excerpt: 'String',
        body: 'String',
        ingredients: 'String',
        preparation: 'String',
        prepTime: 5277329,
        cookTime: 5550652,
        rating: 4065487,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
