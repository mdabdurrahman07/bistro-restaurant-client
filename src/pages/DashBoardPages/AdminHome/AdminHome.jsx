import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import UseAxios from "../../../Hooks/UseAxios";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { SiCodechef } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";

const AdminHome = () => {
    const {User}  = useAuth()
    const AxiosSecure = UseAxios()
    const {data : AdminStats} = useQuery({
        queryKey : ['adminStats'],
        queryFn : async  () =>{
        const res = await AxiosSecure.get('admin-stats')
        console.log(res.data)
        return res.data
        }
    })
    console.log(AdminStats)
    return (
        <div>
          
            <h1 className="text-3xl font-bold  my-2 p-3"><span className="ml-2 ">Hello </span>
           {User?.displayName ? User?.displayName : 'Back'}
            </h1>

            <div className="flex  justify-center">
            <div className="stats shadow p-5">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaMoneyCheckDollar className="text-3xl"></FaMoneyCheckDollar>
    </div>
    <div className="stat-value">${AdminStats?.revenue}</div>
    <div className="stat-title">Revenue</div>
    
   
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <TiGroupOutline className="text-3xl"></TiGroupOutline>
    </div>
    <div className="stat-value">{AdminStats?.Users}</div>
    <div className="stat-title">Customers</div>
    

  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <SiCodechef className="text-3xl"></SiCodechef>
    </div>
    <div className="stat-value">{AdminStats?.MenuItems}</div>
    <div className="stat-title">Menu Items</div>
    
  
  </div>


  <div className="stat">
    <div className="stat-figure text-secondary">
      <CiDeliveryTruck className="text-3xl"></CiDeliveryTruck>
    </div>
    <div className="stat-value">{AdminStats?.Orders}</div>
    <div className="stat-title">Total Orders</div>
    
   
  </div>
  
</div>
            </div>
        </div>
    );
};

export default AdminHome;