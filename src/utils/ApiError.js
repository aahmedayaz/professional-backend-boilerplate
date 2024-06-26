class ApiError extends Error{
  constructor(message = 'Something went wrong !', statusCode, errors = [], stack = ''){
    super(message)
    this.message = message
    this.statusCode = statusCode
    this.errors = errors
    this.data = null
    this.success = false // It is false, because it is always a Error

    if(stack){
      this.stack = stack
    }
    else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

module.exports = ApiError