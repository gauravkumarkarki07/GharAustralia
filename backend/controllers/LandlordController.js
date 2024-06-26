import LandlordModel from '../models/LandlordModel.js';
import {ErrorHandler} from "../utils/ErrorHandler.js";
import bcryptjs from 'bcryptjs';


// Get Landlord Details
export const GetLandlordDetails=async(req,res,next)=>{
    try {
        const landlordProfileDetails=await LandlordModel.findById(req.token.id);
        if(!landlordProfileDetails){
            return next(ErrorHandler(400,'Landlord Profile Not Found'));
        }
        const{password:exclude,...landlordDetails}=landlordProfileDetails._doc;
        res.status(200).json({
            landlordDetails:landlordDetails
        })
        return
    } catch (error) {
        next(error)
    }
}

//Update Landlord Profile Details
export const UpdateLandlordProfileDetails=async(req,res,next)=>{
    const{firstName,lastName,email,username,profilePicture}=req.body;
    try {
        const updatedLandlordDetails=await LandlordModel.findByIdAndUpdate(
            req.token.id,
            {
                firstName,
                lastName,
                username,
                email,
                profilePicture
            },
            {
                new:true,
                runValidators:true
            }
        )
        if(!updatedLandlordDetails){
            return next(ErrorHandler(400,'Landlord Profile Not Found'));
        }
        const{password:exclude,...landlordDetails}=updatedLandlordDetails._doc;
        res.status(200).json({
            landlordDetails:landlordDetails,
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
        const validLandlord=await LandlordModel.findById(req.token.id);
        const validPassword=bcryptjs.compareSync(currentPassword,validLandlord.password);
        if(!validPassword){
            return next(ErrorHandler(400,'Check Your Current Password'));
        }
        if(newPassword !==confirmNewPassword){
            return next(ErrorHandler(400,'New Password and Confirm New Password do not match'));
        }
        const hashedPassword=bcryptjs.hashSync(newPassword,10);
        await LandlordModel.findByIdAndUpdate(
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