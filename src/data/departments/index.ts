import { cse } from './cse'
import { eee } from './eee'
import { publicHealth } from './public-health'
import { law } from './law'
import { business } from './business'
import { english } from './english'
import { sociology } from './sociology'
import { agriculture } from './agriculture'
import type { Department, DepartmentId } from './types'

export const departments: Record<DepartmentId, Department> = {
  'cse': cse,
  'eee': eee,
  'public-health': publicHealth,
  'law': law,
  'business': business,
  'english': english,
  'sociology': sociology,
  'agriculture': agriculture
}

export const departmentList: Department[] = [
  cse,
  eee,
  publicHealth,
  law,
  business,
  english,
  sociology,
  agriculture
]

export { cse, eee, publicHealth, law, business, english, sociology, agriculture }
export * from './types'
