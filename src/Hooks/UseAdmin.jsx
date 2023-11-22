import {  useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import UseAxios from "./UseAxios";

const UseAdmin = () => {
    const AxiosSecure = UseAxios()
    const {User , loading} = useAuth()
    const {data : isAdmin , isPending  : isAdminLoading } = useQuery({
       
        queryKey : [User?.email , "isAdmin"],
        enabled : !loading ,
        queryFn : async () => {

       
            
            const res = await AxiosSecure(`users/admin/${User.email}`)
           
            console.log('admin check' , res)
            return res.data?.admin
        
          
            

        }
    })
    return [isAdmin , isAdminLoading]
};

export default UseAdmin;