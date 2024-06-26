import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="flex justify-between px-8 py-4 font-Archivo text-lg font-medium border items-center text-gray-500">
        <div className='text-primary text-4xl font-semibold flex gap-2 items-center hover:scale-105'>
            <img src={logo} className='w-6 h-6 object-contain'/>
            <Link to={'/home'}>
                Ghar
            </Link>
        </div>
        <nav className='flex gap-8 decoration-secondary items-center'>
            <NavLink to={'/home'} className={({isActive})=> isActive ? 'text-secondary':'hover:underline'}>
                Home
            </NavLink>
            <NavLink to={'/help'} className={({isActive})=> isActive ? 'text-secondary':'hover:underline'}>
                Help
            </NavLink>
            <div className='flex gap-2'>
                <Link to={'/login-tenant'} className='border rounded-lg bg-primary px-3 py-2 text-white hover:brightness-75'>
                    Login Tenant
                </Link>
                <Link to={'/login-landlord'} className='border rounded-lg bg-green-800 px-3 py-2 text-white hover:brightness-75'>
                    Login Landlord
                </Link>
            </div>
        </nav>
    </header>
  )
}
