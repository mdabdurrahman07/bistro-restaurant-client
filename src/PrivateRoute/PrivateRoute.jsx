/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {User , loading} = useAuth()
    const location = useLocation()
   if(loading){
    return <progress className="progress w-56"></progress>
   }
      if(User?.email){
        return children
      }
   return <Navigate to="/login" state={{form : location}}></Navigate>
};

export default PrivateRoute;