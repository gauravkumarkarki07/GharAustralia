import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="font-Poppins px-28 bottom-0 mt-6 w-full">
      <section className="flex flex-col my-8">
        <section className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-Archivo font-semibold">Information</h1>
            <Link className="hover:text-secondary hover:underline">
              Home
            </Link>
            <Link className="hover:text-secondary hover:underline">
              Help
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-Archivo font-semibold">Join Ghar</h1>
            <Link to={'/login-tenant'} className="hover:text-secondary hover:underline">
              Login Tenant
            </Link>
            <Link to={'/login-landlord'} className="hover:text-secondary hover:underline">
              Login Landlord
            </Link>
            <Link to={'/register-tenant'} className="hover:text-secondary hover:underline">
              Register Tenant
            </Link>
            <Link to={'/register-landlord'} className="hover:text-secondary hover:underline">
              Register Landlord
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-Archivo font-semibold">Resources</h1>
            <Link to={'/tenant/findrent'} className="hover:text-secondary hover:underline">
              Find Rent
            </Link>
            <Link to={'/landlord/listproperty'} className="hover:text-secondary hover:underline">
              List Your Property
            </Link>
            <Link to={'/register-tenant'} className="hover:text-secondary hover:underline">
              Message
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-Archivo font-semibold">Company</h1>
            <Link to={'/login-tenant'} className="hover:text-secondary hover:underline">
              About Us
            </Link>
            <Link to={'/login-landlord'} className="hover:text-secondary hover:underline">
              Careers
            </Link>
            <Link to={'/register-tenant'} className="hover:text-secondary hover:underline">
              Why Ghar?
            </Link>
          </div>
        </section>

      </section>
      <hr/>
      <section className="flex flex-col gap-10 my-8">
        <div className="flex flex-col gap-3 items-center justify-end">
          <div className='text-primary text-4xl font-semibold flex gap-2 items-center hover:scale-105'>
              <img src={logo} className='w-6 h-6 object-contain'/>
              <Link to={'/home'}>
                  Ghar
              </Link>
          </div>
          <article>
            Making it easier for tenants and landlords
          </article>
          <div className="flex gap-4 items-center text-3xl text-black">
            <FaFacebookF/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaXTwitter/>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <span>
            Privacy
          </span>
          <span>
            Terms of Use
          </span>
          <span>
            Acceptable Use Policy
          </span>
          <span>
            Software Lifecycle Policy
          </span>
        </div>
      </section>
    </div>
  )
}
