const asynhandlers = (requestHandler) =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}



export {asynhandlers}



// const asyncHandlder = () => {}
// const asynchandler = (func) => () => {}
// const asynchandler = (func) => async () => {}

    //ANOTHER-WAY

// const asyncHandlder = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.Status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }