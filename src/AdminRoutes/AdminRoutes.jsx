/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import useAuth from "../Hooks/UseAuth";

const AdminRoutes = ({children}) => {
    const [isAdmin , isAdminLoading] = UseAdmin()
    const {User , loading} = useAuth()
    const location = useLocation()
   if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>
   }
      if(User?.email && isAdmin){
        return children
      }
   return <Navigate to="/login" state={{form : location}}></Navigate>
};

export default AdminRoutes;