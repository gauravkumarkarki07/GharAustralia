//This component is currently not using data api to get the data,
// It is getting the data from redux slice which is set during login where user details are retrieved.

import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";
import {useSelector} from 'react-redux';
import useInputChange from '../../hooks/useInputChange.js';
import { useState } from "react";
import FirebaseApiRequest from "../../services/firebase/FirebaseApiRequest.js";
import ApiRequest from "../../services/api/ApiRequest.js";
import { useDispatch } from "react-redux";
import { loginLandlord } from "../../services/redux/landlord/LandlordSlice.js";


export default function PersonalDetails() {

  const dispatch=useDispatch();
  const{PutRequest}=ApiRequest();
  
  const session=useSelector(state=>state.landlord.session.sessionDetails);
  
  const initialFormData={
    profilePicture:'',
    firstName:session.firstName,
    lastName:session.lastName,
    email:session.email,
    username:session.username
  }
  
  // Custom Hook to change input data
  const{data,handleChange}=useInputChange(initialFormData);
  
  //useState for image input
  const[image,setImage]=useState(null);
  const{uploadImageToFireBase}=FirebaseApiRequest();

  //Save Changes
  const SaveChanges=async(e)=>{
    e.preventDefault();
    const firebaseResponse=await uploadImageToFireBase(image,'landlord','profilePicture',session._id);
    const updatedData = {...data, profilePicture: firebaseResponse};
    const response=await PutRequest('/ghar/landlord/updateProfileDetails',updatedData);
    if(response){
      return dispatch(loginLandlord({sessionDetails:response.landlordDetails}));
    }
  }
  

  return (
    <div className="flex flex-col gap-4 px-28 py-8 font-Poppins">
      <h1 className="font-Archivo text-4xl">Personal Details</h1>
      <section className="flex flex-col gap-4 justify-center items-center">
        <img className="border-4 border-secondary w-40 h-40 rounded-full object-fill" src={image? URL.createObjectURL(image) : session.profilePicture}/>
        <input
          type="file"
          className="border rounded-lg px-2 py-2"
          accept="image/*"
          onChange={(e)=>setImage(e.target.files[0])}
        />
      </section>
      <form onSubmit={SaveChanges} className="flex flex-col gap-6">
        <section className="flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            <label>First Name*</label>
            <InputField
            name={'firstName'}
            placeholder={'First Name'}
            value={data.firstName}
            onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
          <label>Last Name*</label>
            <InputField
              name={'lastName'}
              placeholder={'Last Name'}
              value={data.lastName}
              onChange={handleChange}
            />
            </div>
        </section>
        <div className="flex flex-col gap-2 w-full">
        <label>Email*</label>
            <InputField
              name={'email'}
              placeholder={'Email'}
              value={data.email}
              onChange={handleChange}
            />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label>Username*</label>
          <InputField
            name={'username'}
            placeholder={'Username'}
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <Button>Save Changes</Button>
      </form>
    </div>
  )
}
