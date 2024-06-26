// Global Error Handling Middleware

export const GlobalErrorMiddleware=(err,req,res,next)=>{
    const errStatus=err.statusCode || 500;
    const errMsg=err.message || "Internal Server Error";
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMsg,
    })
}