import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { authId: 'String5779066' } },
    two: { data: { authId: 'String3375301' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>