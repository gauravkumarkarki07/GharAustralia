import {GoogleAuthProvider,getAuth, signInWithPopup} from "firebase/auth"
import { FirebaseApp } from "./FirebaseApp.js";
import { useDispatch } from "react-redux";
import {loginTenant} from '../redux/tenant/TenantSlice.js';
import {useNavigate} from 'react-router-dom';
import ApiRequest from "../api/ApiRequest.js";
import Toastify from "../utils/toastify.js";
import { loadingStart,loadingStop } from "../redux/global/GlobalSlice.js";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export default function FirebaseApiRequest(){

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {showErrorMessage}=Toastify();
    const{PostRequest}=ApiRequest();

    const auth=getAuth(FirebaseApp);

// Google Sign In
    const handleGoogleSignIn=async()=>{
        const provider= new GoogleAuthProvider()
        provider.setCustomParameters({prompt:'select_account'})
        try {
          const resultFromGoogle=await signInWithPopup(auth,provider);
          dispatch(loadingStart());
          const response=await PostRequest('/ghar/auth/gogglesignin',resultFromGoogle.user);
          if(response){
            dispatch(loadingStop());
            dispatch(loginTenant(response));
            navigate('/tenant');
            return
          }
        } catch (error) {
          dispatch(loadingStop());
          showErrorMessage(error.message);
        }
      }



// Upload Images to Firebase


const uploadImageToFireBase = async(image,userType,imageCategory,userId) => {
  if(image===null){
    return
  }
  dispatch(loadingStart());
  try {
    const storage = getStorage(FirebaseApp);
    const fileName = image.name;
    const imageRef = ref(storage, `${userType}/${userId}/${imageCategory}/${fileName}`);
    await uploadBytes(imageRef,image);
    const response=await getDownloadURL(imageRef);
    if(response){
      dispatch(loadingStop());
      return response
    }
    dispatch(loadingStop());
  } catch (error) {
    dispatch(loadingStop());
    showErrorMessage(error.message);
  }
};


// Upload Property Images
const uploadPropertyImageToFireBase = async(images,userId) => {
  if(images===null){
    return
  }
  dispatch(loadingStart());
  try {
    const storage = getStorage(FirebaseApp);
    
    const uploadPromises = images.map(async (image) => {
      const fileName = image.name;
      const imageRef = ref(storage, `landlord/${userId}/propertyPictures/${fileName}`);
      await uploadBytes(imageRef, image);
      return getDownloadURL(imageRef);
    });

    const downloadURLs = await Promise.all(uploadPromises);

    dispatch(loadingStop());
    return downloadURLs;
  } catch (error) {
    dispatch(loadingStop());
    showErrorMessage(error.message);
  }
};



return {handleGoogleSignIn,uploadImageToFireBase,uploadPropertyImageToFireBase}
}