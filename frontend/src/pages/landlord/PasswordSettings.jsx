import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";
import ApiRequest from "../../services/api/ApiRequest";
import { useDispatch } from "react-redux";
import { logoutLandlord } from "../../services/redux/landlord/LandlordSlice.js";
import useInputChange from "../../hooks/useInputChange";

export default function PasswordSettings() {
  const dispatch=useDispatch();
  const{PutRequest}=ApiRequest();
  
  const initialFormData={
    currentPassword:'',
    newPassword:'',
    confirmNewPassword:''
  }

  const{data,handleChange}=useInputChange(initialFormData);

  const ChangePassword=async(e)=>{
    e.preventDefault();
    const response=await PutRequest('/ghar/landlord/changepassword',data);
    if(response){
      dispatch(logoutLandlord());
      return
    }
  }

  return (
    <div className="flex flex-col gap-4 px-28 py-8 font-Poppins">
      <h1 className="font-Archivo text-4xl">Password Settings</h1>
      <form onSubmit={ChangePassword} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 w-full">
        <label>Current Password*</label>
            <InputField
              name={'currentPassword'}
              placeholder={'Current Password'}
              value={data.name}
              onChange={handleChange}
            />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label>New Password*</label>
          <InputField
            name={'newPassword'}
            placeholder={'New Password'}
            value={data.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label>Confirm New Password*</label>
          <InputField
            name={'confirmNewPassword'}
            placeholder={'Confirm New Password'}
            value={data.confirmNewPassword}
            onChange={handleChange}
          />
        </div>
        
        <Button>Save Changes</Button>
      </form>
    </div>
  )
}
