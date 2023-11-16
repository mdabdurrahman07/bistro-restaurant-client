import Swal from "sweetalert2";
import UseCart from "../../../Hooks/UseCart";
import { RiDeleteBinFill } from "react-icons/ri";
import UseAxios from "../../../Hooks/UseAxios";

const Cart = () => {
    const [cart, refetch] = UseCart()
    const axios = UseAxios()
    const totalPrice = cart.reduce((total , current) => total + current.price ,0)
    const handleDelete = id =>{
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
         
          axios.delete(`cart/${id}`)
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
    return (
        <div className="bg-[#F6F6F6] space-y-3">
            <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---My Cart---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">Wanna Add More</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div>

          <div className="bg-white mx-5 ">
          <div className="flex justify-around gap-10 p-5 mb-9">
            <h2 className="text-4xl font-bold text-center  text-[#151515] uppercase">Total orders: {cart.length}</h2>
            <h2 className="text-4xl font-bold text-center  text-[#151515] uppercase">total price: {totalPrice}</h2>
            <button className="bg-[#D1A054] text-white px-5 py-3 font-semibold rounded-lg uppercase">Pay</button>
            </div>
           {/* table */}

           <div className="overflow-x-auto p-10">
  <table className="table">
    {/* head */}
    <thead  className="bg-[#D1A054] text-white font-semibold text-xl">
      <tr>
        <th>
        #
        </th>
        <th className="uppercase">Image</th>
        <th className="uppercase">Item Name</th>
        <th className="uppercase">Price</th>
        <th className="uppercase">Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        cart.map((items , idx) =>  <tr key={items._id}>
            <th>
              {idx +1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={items.image} />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              
              <br/>
              <span className="badge badge-ghost badge-sm">{items.name}</span>
            </td>
            <td>{items.price}</td>
            <th>
              <button onClick={() =>  handleDelete(items._id)} className="btn btn-ghost btn-xs"><RiDeleteBinFill className="text-xl text-red-500"></RiDeleteBinFill></button>
            </th>
          </tr>)
     }
   
    </tbody>
    
   
    
  </table>
</div>
           
          </div>
        </div>
    );
};

export default Cart;
