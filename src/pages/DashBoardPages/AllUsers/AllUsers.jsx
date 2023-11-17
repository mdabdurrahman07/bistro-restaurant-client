import { useQuery } from "@tanstack/react-query";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import UseAxios from "../../../Hooks/UseAxios";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = UseAxios()
    const {data : users = [] , refetch } = useQuery({
        queryKey : ['users'],
        queryFn : async  () => {
    const res = await axiosSecure.get('users')
    return res.data
        }
    })
    const handleUserDelete = id =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
           
            axiosSecure.delete(`users/${id}`)
            .then(res => {
              console.log(res.data)
              if(res.data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
                  icon: "success"
                });
                refetch()
              }
            })
            .catch(error => console.log(error))
  
          }
        });
      }
      const handleSetAdmin = user => {
        axiosSecure.patch(`users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            refetch()
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    icon: "success",
                    title: `${user.name} is Admin Now`,
                    showConfirmButton: false,
                    timer: 1200
                  });
                 
            }
        })
        .catch(error => {
            console.log(error)
        })
      }
    return (
        <div className="bg-[#F6F6F6] space-y-3">

             <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---How many??---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">MANAGE ALL USERS</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto bg-white p-5">
            <p className="text-3xl font-extrabold my-4">Total Users {users?.length}</p>
            {/* table */}
            <div className="overflow-x-auto w-3/4 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] ">
                        <tr>
                            <th></th>
                            <th className="text-xl font-bold text-white">Name</th>
                            <th className="text-xl font-bold text-white">Email</th>
                            <th className="text-xl font-bold text-white">Role</th>
                            <th className="text-xl font-bold text-white">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                       {
                        users.map(( user, idx) =>  <tr key={user._id}>
                            <th>{idx +1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'Admin' ? <><p className="font-bold text-green-600 tracking-[2px]">Admin</p></> : <button onClick={() =>  handleSetAdmin(user)} className="btn btn-ghost btn-xs"><FaUsersCog className="text-xl text-orange-500"></FaUsersCog></button>}</td>

                            <td> <button  onClick={() =>  handleUserDelete(user._id)} className="btn btn-ghost btn-xs"><RiDeleteBinFill className="text-xl text-red-500"></RiDeleteBinFill></button></td>
                        </tr>)
                       }
                        </tbody>
                    </table>
                    </div>

        </div>
        </div>
    );
};

export default AllUsers;