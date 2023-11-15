import Swal from "sweetalert2";
import useAuth from "../../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxios from "../../../Hooks/UseAxios";
import UseCart from "../../../Hooks/UseCart";

/* eslint-disable react/prop-types */
const Card = ({item}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const axios = UseAxios()
  const [, refetch] = UseCart()
  const   {image ,  name ,  recipe , _id , price } = item;
  const {User} = useAuth()
  const handleAddToCart  = () => {
    if(User && User.email){
      //send data to the db
      
      const cartItem = {
        foodID : _id,
        image,
        name,
        userEmail : User.email,
        price
      }
      axios.post('/cart' , cartItem)
      .then(res => {
        console.log(res.data)
        if(res?.data?.acknowledged){
          Swal.fire({
            title: "Good job!",
            text: "Add Cart to Successful",
            icon: "success"
          });
          refetch()
        }

      })
      .catch(error => {
        console.log(error)
      })


      
    }
    else{
      //alert 
      Swal.fire({
        title: "you're not logged in ",
        text: "Please , login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to the login
          navigate('/login') , {state : {from : location}}
        }
      });
    }
  }
    return (
        
            <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                <figure>
                  <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{name}</h2>
                  <p>{recipe}</p>
                  <div className="card-actions">
                    <button onClick={handleAddToCart} className="uppercase  text-[#BB8506] border-0 border-b-2
                     border-[#BB8506] px-6 py-3 rounded-lg bg-[#E8E8E8] hover:bg-[#1F2937] active:bg-[#1F2937] focus:outline-none focus:ring focus:bg-[#1F2937]">add to cart</button>
                  </div>
                </div>
              </div>
        
    );
};

export default Card;