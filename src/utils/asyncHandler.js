const asyncHandler = (requestHandler) => {
   (requestHandler,res,next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
   }
}

export {asyncHandler}










//Different approaches::
// const asyncHandler = (fn) => async (req, res, next) => {
//    try {
//       await fn(req, res, next)
//    } catch (error) {
//       res.status(error.code || 500).json({
//          success: false,
//          message: err.message || 'Internal Server Error',
//       })
//    }
// }


//Normal Syntax::
// const asyncHandler = () => {}
// const asyncHandler = (func) => {}

// const asyncHandler = () => {
//    () => {}
// }
// OR 
// const asyncHandler = () => () => {}

// For async:
// const asyncHandler = () => async () => {}