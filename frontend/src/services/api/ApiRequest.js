import Toastify from '../utils/toastify.js';
import {useDispatch} from 'react-redux';
import {loadingStart,loadingStop} from '../redux/global/GlobalSlice.js';

export default function ApiRequest() {

    const{showSuccessMessage,showErrorMessage}=Toastify();

    const dispatch=useDispatch();

    //Get Request
    const GetRequest=async(url)=>{
        dispatch(loadingStart());
        try {
            const response=await fetch(url,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const responseData=await response.json()
            if(response.ok){
                dispatch(loadingStop());
                return responseData
            }
            dispatch(loadingStop());
            showErrorMessage(responseData.message)
        } catch (error) {
            dispatch(loadingStop());
            showErrorMessage(error.message)
        }

    }

    //Post Request
    const PostRequest=async(url,data={})=>{
        dispatch(loadingStart());
        try {
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const responseData=await response.json()
            if(response.ok){
                dispatch(loadingStop());
                showSuccessMessage(responseData.message);
                return responseData
            }
            dispatch(loadingStop());
            showErrorMessage(responseData.message);
        } catch (error) {
            dispatch(loadingStop());
            showErrorMessage(error.message)
        }

    }

        //Put Request
        const PutRequest=async(url,data={})=>{
            dispatch(loadingStart());
            try {
                const response=await fetch(url,{
                    method:"PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                })
                const responseData=await response.json()
                if(response.ok){
                    dispatch(loadingStop());
                    showSuccessMessage(responseData.message);
                    return responseData
                }
                dispatch(loadingStop());
                showErrorMessage(responseData.message);
            } catch (error) {
                dispatch(loadingStop());
                showErrorMessage(error.message);
            }

        }
        
        
        //Delete Request
        const DeleteRequest=async(url)=>{
            dispatch(loadingStart());
            try {
                const response=await fetch(url,{
                    method:"DELETE",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                const responseData=await response.json()
                if(response.ok){
                    dispatch(loadingStop());
                    showSuccessMessage(responseData.message)
                    return responseData
                }
                dispatch(loadingStop());
                showErrorMessage(responseData.message);
            } catch (error) {
                dispatch(loadingStop());
                showErrorMessage(error.message);
            }

        }


  return {GetRequest,PostRequest,PutRequest,DeleteRequest}
}
