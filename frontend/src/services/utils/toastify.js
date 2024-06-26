import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toastify(){
    const showSuccessMessage=(message)=>{
        toast.success(message)
    }
    const showErrorMessage=(message)=>{
        toast.error(message)
    }
    return{showErrorMessage,showSuccessMessage}
}