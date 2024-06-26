import express from 'express';
import {RegisterLandlordAccount,
        RegisterTenantAccount,LoginLandlordAccount,
        LoginTenantAccount,Logout,
        GoogleSignIn
        } from '../controllers/AuthController.js';
import { SessionCheck } from '../utils/SessionCheck.js';

const router=express.Router();

router.post('/registertenantaccount',RegisterTenantAccount);
router.post('/registerlandlordaccount',RegisterLandlordAccount);
router.post('/logintenantaccount',SessionCheck,LoginTenantAccount);
router.post('/loginlandlordaccount',SessionCheck,LoginLandlordAccount);
router.post('/gogglesignin',SessionCheck,GoogleSignIn);
router.post('/logout',Logout);


export default router;

