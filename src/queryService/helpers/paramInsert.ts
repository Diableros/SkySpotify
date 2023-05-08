import { EndpointsType } from '../queries'

const paramInsertionMask = '{param}'

const paramInsert = (string: EndpointsType, param: string): string => {
  return string.replace(paramInsertionMask, param)
}

export default paramInsert
