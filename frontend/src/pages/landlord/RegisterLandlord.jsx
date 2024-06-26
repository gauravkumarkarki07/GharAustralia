import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '../../components/UI/Button.jsx';
import InputField from '../../components/UI/InputField.jsx';

import ApiRequest from '../../services/api/ApiRequest.js';
import useInputChange from '../../hooks/useInputChange.js';
import { useNavigate } from 'react-router-dom';

export default function RegisterLandlord() {

    const initialFormData={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        username:''
    }
    const navigate=useNavigate();

    const{PostRequest}=ApiRequest();

    const{data,handleChange}=useInputChange(initialFormData);

    const RegisterTenant=async(e)=>{
        e.preventDefault();
        const response=await PostRequest('/ghar/auth/registerlandlordaccount',data);
        if(response){
            navigate('/login-landlord');
            return
        }
    }


  return (
    <div className="flex flex-col md:flex-row lg-flex-row w-screen font-Poppins min-h-screen">
        <section className="md:w-[60%] lg:w-[60%] px-8 py-6 flex flex-col gap-8">
            <div className='text-primary text-2xl font-semibold flex gap-2 items-center'>
                <img src={logo} className='w-4 h-4 object-contain'/>
                <Link to={'/home'}>
                    Ghar
                </Link>
            </div>
            <div className='flex justify-center items-center pt-1'>
                <form onSubmit={RegisterTenant} className='flex flex-col gap-6'>
                    <h1 className='font-Archivo text-5xl'>Register With Us</h1>
                    <div className='flex gap-2'>
                      <InputField
                          placeholder={'First Name'}
                          name={'firstName'}
                          value={data.firstName}
                          onChange={handleChange}
                      />
                      <InputField
                          placeholder={'Last Name'}
                          name={'lastName'}
                          value={data.lastName}
                          onChange={handleChange}
                      />
                    </div>
                    <InputField
                        placeholder={'Email'}
                        name={'email'}
                        value={data.email}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder={'Username'}
                        name={'username'}
                        value={data.username}
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
                        Register
                    </Button>
                    <span>
                        Already Have an Account ?
                        <Link to={'/login-landlord'} className='text-green-800 hover:underline px-2'>Landlord Login</Link>
                    </span>
                </form>

            </div>
        </section>
        <section className="md:w-[40%] lg:w-[40%] px-8 text-lg text-center bg-green-800 text-white flex flex-col gap-8 items-center pt-44">
            <h1 className='font-Archivo text-5xl'>Landlord</h1>
            <article className='font-Poppins'>
            Welcome to <span className='text-accent'>Ghar</span> We are excited to help you 
            manage your rental properties efficiently and effectively. By registering 
            as a landlord, you will gain access to a suite of tools designed to make property management a breeze.
            </article>
            <article className='font-Archivo text-3xl'>
            Why Register?
            </article>
            <ul className='list-disc px-8'>
                <li>Easy Property Management: Keep track of all your properties in one place.</li>
                <li>Tenant Communication: Directly communicate with your tenants through our platform.</li>
                <li>Maintenance Requests: Receive and manage maintenance requests seamlessly.</li>
            </ul>
        </section>
    </div>
  )
}
