import jwt from 'jsonwebtoken';
import { ErrorHandler } from './ErrorHandler.js';

// Verify Session Token
export const VerifyToken=async(req,res,next)=>{
    const token=req.cookies.access_token;
    try {
        if(!token){
            return next(ErrorHandler(404,'Please Login With Your Credentials First'));
        }
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,token)=>{
            if(err){
                return next(ErrorHandler(404,'You are Unauthorized'))
            }
            req.token=token;
            next();
        })
    } catch (error) {
            next(error)
    }
}