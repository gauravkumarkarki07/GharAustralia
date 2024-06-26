import PropertyModel from "../models/PropertyModel.js";
import {ErrorHandler} from "../utils/ErrorHandler.js";
import {facilities,houseRules,rentalTypes} from '../constants/PropertyConstants.js';


// Get All Properties
export const GetProperties=async(req,res,next)=>{
    try {
        const properties=await PropertyModel.find().populate({
            path:'landlordId',
            select:'firstName lastName profilePicture'
        });
        if(!properties){
            return next(ErrorHandler(400,'Cannot Retrieve Properties'))
        }
        res.status(200).json({
            properties:properties
        })
        return
    } catch (error) {
        next(error)
    }
}

//Get Property By Id
export const GetPropertyById=async(req,res,next)=>{
    const{propertyId}=req.params;
    try {
        const propertyDetails=await PropertyModel.findById(propertyId).populate({
            path:'landlordId',
            select:'firstName lastName profilePicture email'
        });
        if(!propertyDetails){
            return next(ErrorHandler(400,'Cannot Retrieve Properties'))
        }
        res.status(200).json({
            propertyDetails:propertyDetails
        })
        return
    } catch (error) {
        next(error)
    }
}


// Get Property Constants
export const GetPropertyConstant=async(req,res,next)=>{
    try {
        const constants={
            facilities,
            houseRules,
            rentalTypes
        }
        res.status(200).json(constants);
    } catch (error) {
        next(error)
    }
}

//List New Property
export const ListNewProperty=async(req,res,next)=>{
    const {
        title,
        description,
        address,
        latitude,
        longitude,
        price,
        bedRoom,
        bathRoom,
        propertyPictures,
        facilities,
        houseRules,
        rentalType,
        landlordId
      } = req.body;
    try {
        const newProperty = new PropertyModel({
            title,
            description,
            address,
            latitude,
            longitude,
            price,
            bedRoom,
            bathRoom,
            propertyPictures,
            facilities,
            houseRules,
            rentalType,
            landlordId
          });
        await newProperty.save();
        res.status(200).json({
            message:"Property Listed Successfully"
        })
    } catch (error) {
     next(error)   
    }
}


//List Properties of landlord
export const LandlordProperty=async(req,res,next)=>{
    try {
        const propertyList=await PropertyModel.find({landlordId:req.token.id});
        if(!propertyList){
            next(ErrorHandler(400,'No Property Found'))
            return
        }
        res.status(200).json({
            propertyList:propertyList
        })
    } catch (error) {
        next(error)
    }
}