import bcryptjs from 'bcryptjs';
import TenantModel from '../models/TenantModel.js';
import LandlordModel from '../models/LandlordModel.js';
import {ErrorHandler} from '../utils/ErrorHandler.js';
import jwt from 'jsonwebtoken';

//Register Tenant Account
export const RegisterTenantAccount=async(req,res,next)=>{
    const{firstName,lastName,email,username,password}=req.body;
    try {
        const emailExist=await TenantModel.findOne({email:email});
        if(emailExist){
            return next(ErrorHandler(400,'Email is already taken'));
        }
        const usernameExist=await TenantModel.findOne({username:username});
        if(usernameExist){
            return next(ErrorHandler(400,'Username is already taken'));
        }

        const hashedPassword=bcryptjs.hashSync(password,10);

        const newTenantAccount=new TenantModel({
            firstName:firstName,
            lastName:lastName,
            email:email,
            username:username,
            password:hashedPassword
        })

        await newTenantAccount.save();

        res.status(200).json({
            message:`${username} registered successfully`
        })
        return
    } catch (error) {
        next(error)
    }
}

// Register Landlord Account
export const RegisterLandlordAccount=async(req,res,next)=>{
    const{firstName,lastName,email,username,password}=req.body;
    try {
        const emailExist=await LandlordModel.findOne({email:email});
        if(emailExist){
            return next(ErrorHandler(400,'Email is already taken'));
        }
        const usernameExist=await LandlordModel.findOne({username:username});
        if(usernameExist){
            return next(ErrorHandler(400,'Username is already taken'));
        }

        const hashedPassword=bcryptjs.hashSync(password,10);

        const newLandlordAccount=new LandlordModel({
            firstName:firstName,
            lastName:lastName,
            email:email,
            username:username,
            password:hashedPassword
        })

        await newLandlordAccount.save();

        res.status(200).json({
            message:`${username} registered successfully`
        })
        return
    } catch (error) {
        next(error)
    }
}


//Login Tenant Account
export const LoginTenantAccount=async(req,res,next)=>{
    const{usernameOrEmail,password}=req.body;
    try {
        const validTenantAccount=await TenantModel.findOne({
            $or:[
                {email:usernameOrEmail},
                {username:usernameOrEmail}
            ]
        })
        if(!validTenantAccount){
           return next(ErrorHandler(404,'Username or Email doesnt exists'));
        }
        const validPassword=bcryptjs.compareSync(password,validTenantAccount.password);
        if(!validPassword){
            return next(ErrorHandler(404,'Check Your Password'));
        }

        const {password:exclude,...tenantDetails}=validTenantAccount._doc;
        const token=jwt.sign({id:validTenantAccount._id},process.env.JWT_SECRET_KEY);
        res.cookie('access_token',token,{httpOnly:true});
        res.status(200).json({
            sessionDetails:tenantDetails,
            message:'Login Successfull'
        })
        return
    } catch (error) {
        next(error)
    }
}


//Login Landlord Account
export const LoginLandlordAccount=async(req,res,next)=>{
    const{usernameOrEmail,password}=req.body;
    try {
        const validLandlordAccount=await LandlordModel.findOne({
            $or:[
                {email:usernameOrEmail},
                {username:usernameOrEmail}
            ]
        })
        if(!validLandlordAccount){
           return next(ErrorHandler(404,'Username or Email doesnt exists'));
        }
        const validPassword=bcryptjs.compareSync(password,validLandlordAccount.password);
        if(!validPassword){
            return next(ErrorHandler(404,'Check Your Password'));
        }

        const {password:exclude,...landlordDetails}=validLandlordAccount._doc;
        const token=jwt.sign({id:validLandlordAccount._id},process.env.JWT_SECRET_KEY);
        res.cookie('access_token',token,{httpOnly:true});
        res.status(200).json({
            sessionDetails:landlordDetails,
            message:'Login Successfull'
        })
        return
    } catch (error) {
        next(error)
    }
}


//Sign in Using Google For Tenant
export const GoogleSignIn=async(req,res,next)=>{
    const{email,displayName,photoURL}=req.body;
    try {
        const validTenant=await TenantModel.findOne({email:email});
        if(validTenant){
            const{password:exclude,...sessionDetails}=validTenant._doc;
            const token=jwt.sign({id:validTenant._id},process.env.JWT_SECRET_KEY);
            res.cookie('access_token',token,{httpOnly:true})
                .status(200).json({
                    sessionDetails:sessionDetails,
                    message:"Login Successfull wtih Google"
                })
            return
        }
        const generetedUsername=displayName.replace(/ /g, '').toLowerCase();
        const fullName=displayName.split(" ");
        const firstName=fullName[0];
        const lastName=fullName[fullName.length - 1] || firstName;
    console.log(fullName,firstName,lastName);

        const generatedPassword=Math.random().toString(36).slice(-8);
        const hashedPassword=bcryptjs.hashSync(generatedPassword,10);
        const newTenant=new TenantModel({
            email:email,
            firstName:firstName,
            lastName:lastName,
            username:generetedUsername,
            password:hashedPassword,
            profilePicture:photoURL
        })
        await newTenant.save()
        const{password:exclude,...sessionDetails}=newTenant._doc;
        const token=jwt.sign({id:newTenant._id},process.env.JWT_SECRET_KEY);
            res.cookie('access_token',token,{httpOnly:true})
                .status(200).json({
                    sessionDetails:sessionDetails,
                    message:"Register Successfull wtih Google"
                })
        return

    } catch (error) {
        next(error)
        
    }
}


// Logout session
export const Logout=async(req,res,next)=>{
    try {
        if(!req.cookies.access_token){
            return next(ErrorHandler(400,'You are not logged in'))
        }
        res.clearCookie('access_token').status(200).json({
            message:"Logout Successfull"
        })
        return
    } catch (error) {
        next(error)
    }
}
