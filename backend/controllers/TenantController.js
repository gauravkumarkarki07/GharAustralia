import TenantModel from '../models/TenantModel.js';
import {ErrorHandler} from "../utils/ErrorHandler.js";
import bcryptjs from 'bcryptjs';


// Get Tenant Details
export const GetTenantDetails=async(req,res,next)=>{
    try {
        const tenantProfileDetails=await TenantModel.findById(req.token.id);
        if(!tenantProfileDetails){
            return next(ErrorHandler(400,'Tenant Profile Not Found'));
        }
        const{password:exclude,...tenantDetails}=tenantProfileDetails._doc;
        res.status(200).json({
            tenantDetails:tenantDetails
        })
        return
    } catch (error) {
        next(error)
    }
}

//Update Tenant Profile Details
export const UpdateTenantProfileDetails=async(req,res,next)=>{
    const{firstName,lastName,email,username,profilePicture}=req.body;
    try {
        const updatedTenantDetails=await TenantModel.findByIdAndUpdate(
            req.token.id,
            {
                firstName,
                lastName,
                username,
                email,
                profilePicture:profilePicture
            },
            {
                new:true,
                runValidators:true
            }
        )
        if(!updatedTenantDetails){
            return next(ErrorHandler(400,'Tenant Profile Not Found'));
        }
        const{password:exclude,...tenantDetails}=updatedTenantDetails._doc;
        res.status(200).json({
            tenantDetails:tenantDetails,
            message:"Profile Updated Successfully"
        })
        return
    } catch (error) {
        next(error)
    }
}

// Change Password
export const ChangePassword=async(req,res,next)=>{
    const{currentPassword,newPassword,confirmNewPassword}=req.body;
    try {
        const validTenant=await TenantModel.findById(req.token.id);
        const validPassword=bcryptjs.compareSync(currentPassword,validTenant.password);
        if(!validPassword){
            return next(ErrorHandler(400,'Check Your Current Password'));
        }
        if(newPassword !==confirmNewPassword){
            return next(ErrorHandler(400,'New Password and Confirm New Password do not match'));
        }
        const hashedPassword=bcryptjs.hashSync(newPassword,10);
        await TenantModel.findByIdAndUpdate(
            req.token.id,
            {password:hashedPassword},
            {runValidators:true}
        )
        res.clearCookie('access_token');
        res.status(200).json({
            message:'Password Changed Successfully'
        })
        return
    } catch (error) {
        next(error);
    }
}