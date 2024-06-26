import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import TenantHeader from "./TenantHeader";
import LandlordHeader from './LandlordHeader';
import Footer from "./Footer";

export default function Layout() {
  const sessionTenant = useSelector(state => state.tenant.session);
  const sessionLandlord = useSelector(state => state.landlord.session);

  return (
    <>
    <div className="flex flex-col justify-between">
      {sessionTenant ? (
        <TenantHeader />
      ) : sessionLandlord ? (
        <LandlordHeader />
      ) : (
        <Header />
      )}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <hr/>
      <Footer/>
    </div>

    </>
  );
}
