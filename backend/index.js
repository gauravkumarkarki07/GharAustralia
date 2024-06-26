import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {GlobalErrorMiddleware} from './middleware/GlobalErrorMiddleware.js';
import AuthRouter from './routes/AuthRouter.js';
import TenantRouter from './routes/TenantRouter.js';
import LandlordRouter from './routes/LandlordRouter.js';
import PropertyRouter from './routes/PropertyRouter.js';
import { ErrorHandler } from './utils/ErrorHandler.js';

dotenv.config()

const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;


mongoose.connect(MONGO_URL).then(()=>console.log('Database connected')).catch((err)=>console.log(err));

const app=express();

//middlewares
app.use(cookieParser());
app.use(express.json());

//api routes
app.use('/ghar/auth',AuthRouter);
app.use('/ghar/tenant',TenantRouter);
app.use('/ghar/landlord',LandlordRouter);
app.use('/ghar/property',PropertyRouter);



//Undefined Routes
app.use('*',(req,res,next)=>{
    return next(ErrorHandler(400,'Undefined Routes'))
})

//Global Error Handler
app.use(GlobalErrorMiddleware);


app.listen(PORT,()=>{
    console.log('Server is running')
});