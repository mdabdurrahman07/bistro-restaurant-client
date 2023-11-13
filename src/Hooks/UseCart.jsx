import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import useAuth from "./UseAuth";

const UseCart = () => {
    const axios =  UseAxios()
    const {User} = useAuth()
    const {data : Cart = [] , refetch } = useQuery({
        queryKey : ['cart' , User?.email],
        queryFn : async () => 
        {
            const res = await axios.get(`/cart?userEmail=${User.email}`)
            return res.data
        }
    })
    return [Cart , refetch]
};

export default UseCart;