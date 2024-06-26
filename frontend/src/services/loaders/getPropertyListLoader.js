import Toastify from '../utils/toastify.js';

export default function GetPropertyListLoader(){


    const{showErrorMessage}=Toastify();


    const GetPropertyList=async()=>{
        try {
            const response=await fetch('/ghar/property/properties',{
                method:"GET",
                headers:{
                    "Content-Type":"json"
                }
            })
            if(response.ok){

                const responseData=await response.json();
                return responseData
            }
            return null
        } catch (error) {
            showErrorMessage(error.message)
        }
    }

    const GetPropertyConstants=async()=>{
        try {
            const response=await fetch('/ghar/property/getpropertyconstants',{
                method:"GET",
                headers:{
                    "Content-Type":"json"
                }
            })
            if(response.ok){

                const responseData=await response.json();
                return responseData
            }
            return null
        } catch (error) {
            showErrorMessage(error.message)
        }
    }

    const GetLandlordProperty=async()=>{
        try {
            const response=await fetch('/ghar/property/landlordproperty',{
                method:"GET",
                headers:{
                    "Content-Type":"json"
                }
            })
            if(response.ok){

                const responseData=await response.json();
                return responseData
            }
            return null
        } catch (error) {
            showErrorMessage(error.message)
        }
    }


    return{GetPropertyList,GetPropertyConstants,GetLandlordProperty}
}