import { ErrorHandler } from "./ErrorHandler.js";

export const SessionCheck=async(req,res,next)=>{
    try {
        if(req.cookies.access_token){
            return next(ErrorHandler(400,'You are already logged in'))
        }
        next();
    } catch (error) {
        next(error)
    }
}