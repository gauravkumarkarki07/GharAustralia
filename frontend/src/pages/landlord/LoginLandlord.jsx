import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '../../components/UI/Button.jsx';
import InputField from '../../components/UI/InputField.jsx';
import useInputChange from '../../hooks/useInputChange.js';
import ApiRequest from '../../services/api/ApiRequest.js';
import { useDispatch } from 'react-redux';
import { loginLandlord } from '../../services/redux/landlord/LandlordSlice.js';
import { useNavigate } from 'react-router-dom';

export default function LoginLandlord() {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const initialFormData={
        usernameOrEmail:'',
        password:''
    }
    const {data,handleChange}=useInputChange(initialFormData);

    const{PostRequest}=ApiRequest();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await PostRequest('/ghar/auth/loginlandlordaccount',data);
            if(response){
                dispatch(loginLandlord(response));
                navigate('/landlord')
                return
            }
        } catch (error) {
            throw new Error(error)
        }
    }

  return (
    <div className="flex flex-col md:flex-row lg-flex-row w-screen font-Poppins min-h-screen">
        <section className="md:w-[60%] lg:w-[60%] px-8 py-10 flex flex-col gap-8">
            <div className='text-primary text-2xl font-semibold flex gap-2 items-center'>
                <img src={logo} className='w-4 h-4 object-contain'/>
                <Link to={'/home'}>
                    Ghar
                </Link>
            </div>
            <div className='flex justify-center items-center pt-20'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <h1 className='font-Archivo text-5xl'>Login to Your Account</h1>
                    <InputField
                        placeholder={'Username Or Email'}
                        name={'usernameOrEmail'}
                        value={data.usernameOrEmail}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder={'Password'}
                        type={'password'}
                        name={'password'}
                        value={data.password}
                        onChange={handleChange}
                    />
                    <Button variant={'green'}>
                        Login
                    </Button>
                    <span>
                        Don&apos;t Have an Account ?
                        <Link to={'/register-landlord'} className='text-green-800 hover:underline px-2'>Register as Landlord</Link>
                    </span>
                </form>

            </div>
        </section>
        <section className="md:w-[40%] lg:w-[40%] px-8 text-lg text-center bg-green-800 text-white flex flex-col gap-8 items-center pt-52">
            <h1 className='font-Archivo text-5xl'>Landlord</h1>
            <article className='font-Poppins'>
            Welcome back to <span className='text-secondary'>Ghar</span> Please log in to 
            access your landlord dashboard and manage your properties with ease.
            </article>
        </section>
    </div>
  )
}
