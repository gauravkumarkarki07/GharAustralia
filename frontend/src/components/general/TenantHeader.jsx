import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import useDropdownToggle from '../../hooks/useDropdownToggle.js';
import {useSelector} from 'react-redux';
import ApiRequest from '../../services/api/ApiRequest.js';
import { useDispatch } from 'react-redux';
import {logoutTenant} from '../../services/redux/tenant/TenantSlice.js';
import { useNavigate } from 'react-router-dom';

export default function TenantHeader() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const{dropdownRef,toggleDropdown,dropdownVisible}=useDropdownToggle();
    const session=useSelector(state=>state.tenant.session.sessionDetails);

    const{PostRequest}=ApiRequest();

    const Logout=async(e)=>{
        e.preventDefault();
        const response=await PostRequest('/ghar/auth/logout');
        if(response){
            dispatch(logoutTenant());
            navigate('/home');
            return
        }
    }
    
  return (
    <header className="flex justify-between px-8 py-4 font-PlayfairDisplay text-lg font-medium border text-gray-500">
        <div className='text-primary text-2xl font-semibold flex gap-2 items-center hover:scale-105'>
            <img src={logo} className='w-4 h-4 object-contain'/>
            <Link to={'/tenant'}>
                Ghar<span className='text-secondary text-base'>.Tenant</span>
            </Link>
        </div>
        <nav className='flex gap-8 decoration-primary items-center'>
            <NavLink to={'/tenant/findrent'} className={({isActive})=> isActive ? 'underline':'hover:underline'}>
                Find Rent
            </NavLink>
            <NavLink to={'/tenant/message'} className={({isActive})=> isActive ? 'underline':'hover:underline'}>
                Message
            </NavLink>
            <div ref={dropdownRef} className='relative'>
                <div onClick={toggleDropdown} className='border rounded-lg bg-primary px-3 py-2 text-white hover:brightness-75 cursor-pointer'>
                    <div className='flex items-center gap-2'>
                        <img src={session.profilePicture} className='rounded-full w-8 h-8'/>
                        Profile
                    </div>
                </div>
                {dropdownVisible &&
                <div className='absolute mt-2 right-0 w-40 h-auto bg-white border rounded-lg z-50'>
                    <span className='text-secondary text-sm px-2 py-1 w-full'>{session.username}</span>
                    <hr/>
                    <Link to={'/tenant/account'} className='hover:bg-gray-100 block cursor-pointer px-2 py-1'>
                        Account
                    </Link>
                    <span onClick={Logout} className='hover:bg-gray-100 block cursor-pointer px-2 py-1'>
                        Logout
                    </span>
                </div>
                }
            </div>
        </nav>
    </header>
  )
}
