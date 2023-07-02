import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { authId: 'String4377227' } },
    two: { data: { authId: 'String4480901' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
