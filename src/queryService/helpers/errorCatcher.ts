const errorCatcher = (error: unknown) => {
  if (error instanceof Error) {
    console.log(error.message)
  } else {
    console.log('Unknown error', JSON.stringify(error))
  }
}

export default errorCatcher
