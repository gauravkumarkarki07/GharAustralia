import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LandlordAuthenticated() {
  const session=useSelector(state=>state.landlord.session);
  const validtedLandlord=session && session.sessionDetails;
  return validtedLandlord ? <Outlet/> : <Navigate  to={'/login-landlord'}/>
}
