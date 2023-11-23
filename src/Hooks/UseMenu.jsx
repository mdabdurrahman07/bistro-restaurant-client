import { useQuery } from "@tanstack/react-query"

import UseAxiosPublic from "./UseAxiosPublic"


const UseMenu = () => {
    const AxiosPublic = UseAxiosPublic()
    // const [loading , Setloading] = useState(true)
    // const [Menu  ,setMenu] = useState([])
    // useEffect( () =>{
    //  fetch('https://bistro-resturant-server-chi.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data)
    //         Setloading(false)
    //     })
    // },[Setloading])
    // return [Menu , loading ]
    const {data : menu = [] , isPending : loading , refetch } = useQuery({
      
        queryKey : ['menu'] ,
        queryFn : async () => {

            const MenuRes = await  AxiosPublic.get('menu')
            return MenuRes?.data

        },
        
    })
    return [menu , loading , refetch]
}

export default UseMenu