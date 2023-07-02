import type { Post } from '@prisma/client'

import { posts, post, createPost, updatePost, deletePost } from './posts'
import type { StandardScenario } from './posts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('posts', () => {
  scenario('returns all posts', async (scenario: StandardScenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario: StandardScenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async () => {
    const result = await createPost({
      input: {
        title: 'String',
        metaDescription: 'String',
        slug: 'String',
        excerpt: 'String',
        body: 'String',
        ingredients: 'String',
        preparation: 'String',
        prepTime: 1826708,
        cookTime: 1097360,
        rating: 2849009,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.metaDescription).toEqual('String')
    expect(result.slug).toEqual('String')
    expect(result.excerpt).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.ingredients).toEqual('String')
    expect(result.preparation).toEqual('String')
    expect(result.prepTime).toEqual(1826708)
    expect(result.cookTime).toEqual(1097360)
    expect(result.rating).toEqual(2849009)
  })

  scenario('updates a post', async (scenario: StandardScenario) => {
    const original = (await post({ id: scenario.post.one.id })) as Post
    const result = await updatePost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a post', async (scenario: StandardScenario) => {
    const original = (await deletePost({ id: scenario.post.one.id })) as Post
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
