import UtilCard from "../../components/UI/UtilCard";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="w-full font-Poppins px-28 py-6 flex flex-col gap-4">
        <section className="flex flex-col gap-2 bg-primary rounded-lg px-8 py-6 text-white">
            <h1 className="font-Archivo text-4xl font-semibold text-black">Account</h1>
            <article>
                Manager your account settings
            </article>
        </section>
        <section className="flex items-center gap-8">
            <Link className="w-full" to={'personal-details'}>
                <UtilCard icon={<CiUser/>} heading={'Personal Details'} desc={'Change your personal details'}/>
            </Link>
            <Link className="w-full" to={'password-settings'}>
                <UtilCard icon={<CiLock/>} heading={'Password Settings'} desc={'Manage your password'}/>
            </Link>
            <UtilCard icon={<CiHeart/>} heading={'Listed Properties'} desc={'Your listed properties'}/>
        </section>
    </div>
  )
}
