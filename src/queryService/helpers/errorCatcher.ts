import { HTTPError } from 'ky'

const errorCatcher = (error: HTTPError) => {
  throw new Error(error.message)
}

export default errorCatcher
