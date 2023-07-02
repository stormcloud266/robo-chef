import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { authId: 'String7395985' } },
    two: { data: { authId: 'String3271759' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
