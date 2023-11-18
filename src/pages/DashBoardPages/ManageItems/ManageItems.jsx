import { RiDeleteBinFill } from "react-icons/ri";
import UseMenu from "../../../Hooks/UseMenu";
import { MdEditDocument } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxios from "../../../Hooks/UseAxios";

const ManageItems = () => {
    const [menu , refetch] = UseMenu()
    const AxiosSecure = UseAxios()
    const handleDelete = items => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const responseDEL = await AxiosSecure.delete(`menu/${items._id}`)
                if(responseDEL.data.deletedCount >  0){
                    refetch()
                 Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success"
              });
                }
            
            }
          });
        console.log(items)
    }
    return (
        <div>
            <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---Hurry Up!---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">MANAGE ALL ITEMS</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div> 

        <div className="max-w-6xl mx-auto bg-white">
                    <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="font-bold bg-[#D1A054] text-lg text-white">
                <tr>
                    <th>
                        # 
                    </th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    menu.map((items , idx) => <tr key={items._id}>
                        <td>
                        {idx +1 }
                        </td>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={items?.image} />
                            </div>
                            </div>
                           
                        </div>
                        </td>
                        <td>
                       {items?.name}
                        
                        </td>
                        <td>${items?.price}</td>
                        <td>
                        <button  className="btn btn-ghost btn-xs"><MdEditDocument className="text-xl text-orange-500"></MdEditDocument></button>
                        </td>
                        <td>
                        <button onClick={() =>  handleDelete(items)} className="btn btn-ghost btn-xs"><RiDeleteBinFill className="text-xl text-red-500"></RiDeleteBinFill></button>
                        </td>
                    </tr>)
                }
            
                </tbody>
            
                
            </table>
            </div>
        </div>
        </div>
    );
};

export default ManageItems;