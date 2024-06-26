import express from 'express';
import {GetTenantDetails,UpdateTenantProfileDetails,ChangePassword} from '../controllers/TenantController.js';
import { VerifyToken } from '../utils/VerifyToken.js';

const router=express.Router();

router.get('/getprofiledetails',VerifyToken,GetTenantDetails);

router.put('/updateProfileDetails',VerifyToken,UpdateTenantProfileDetails);
router.put('/changepassword',VerifyToken,ChangePassword);

export default router;

