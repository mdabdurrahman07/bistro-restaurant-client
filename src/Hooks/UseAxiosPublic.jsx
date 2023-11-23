import axios from "axios";


const UseAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://bistro-resturant-server-chi.vercel.app/',
        
        
      });
    return instance
};

export default UseAxiosPublic;