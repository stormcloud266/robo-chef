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
        prepTime: 1633519,
        cookTime: 1964899,
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
        prepTime: 6132041,
        cookTime: 7051537,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
