import express from 'express';
import { VerifyToken } from '../utils/VerifyToken.js';
import{GetProperties,ListNewProperty,GetPropertyById,GetPropertyConstant,LandlordProperty} from '../controllers/PropertyController.js';

const router=express.Router();

router.get('/properties',GetProperties);
router.get('/propertydetails/:propertyId',GetPropertyById);
router.get('/getpropertyconstants',GetPropertyConstant);
router.get('/landlordproperty',VerifyToken,LandlordProperty);

router.post('/listnewproperty',ListNewProperty);


export default router;