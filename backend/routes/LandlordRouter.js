import express from 'express';
import { VerifyToken } from '../utils/VerifyToken.js';
import { GetLandlordDetails,UpdateLandlordProfileDetails,ChangePassword } from '../controllers/LandLordController.js';

const router=express.Router();

router.get('/getprofiledetails',VerifyToken,GetLandlordDetails);

router.put('/updateProfileDetails',VerifyToken,UpdateLandlordProfileDetails);
router.put('/changepassword',VerifyToken,ChangePassword);

export default router;

