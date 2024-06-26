import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TenantAuthenticated() {
  const session=useSelector(state=>state.tenant.session);
  const validtedTenant=session && session.sessionDetails;
  return validtedTenant ? <Outlet/> : <Navigate  to={'/login-tenant'}/>
}
