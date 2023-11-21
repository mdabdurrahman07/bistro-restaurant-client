import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import UseAxios from "../../../Hooks/UseAxios";

const PaymentHistory = () => {
    const {User} =  useAuth()
    const AxiosSecure = UseAxios()
    const {data : payments = []} = useQuery({
        queryKey : ['payment'],
        queryFn : async () =>{

            const res = await AxiosSecure.get(`payments/${User?.email}`)

            console.log(res.data)

            return res.data

        }
    })
    return (
        <div>
            <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---At a Glance!---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">PAYMENT HISTORY</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div>
        {/* table */}
        <div className="bg-white max-w-6xl mx-auto">

          <h1 className="text-left font-semibold text-2xl p-4">Total Payments: {payments.length}</h1>
        
        <div className="overflow-x-auto p-10">
  <table className="table">
    {/* head */}
    <thead  className="bg-[#D1A054] text-white font-semibold text-xl">
      <tr>
       
        <th className="uppercase">Email</th>
        <th className="uppercase">Category</th>
        <th className="uppercase">Total Price</th>
        <th className="uppercase">PAYMENT DATE</th>
        <th className="uppercase">Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

        {
             payments.map((items ) =>  <tr key={items._id}>
            
             <td>
               <div className="flex items-center gap-3">
                 <div>
                  <p className="font-semibold text-xl">{items.email}</p>
                 </div>
                 
               </div>
             </td>
             <td>
               
              
               <span className="font-semibold text-xl">Food Order</span>
             </td>
             <td><p className="font-semibold text-xl"><span className="text-lime-800 ml-2">$</span>{items.price}</p></td>
             <td><p className="font-semibold text-xl">{items.date}</p></td>
             <td><p className="font-semibold text-xl">{items.status}</p></td>
           
           </tr>)
        }
   
    </tbody>
    
   
    
  </table>
</div>
        </div>
        </div>
    );
};

export default PaymentHistory;