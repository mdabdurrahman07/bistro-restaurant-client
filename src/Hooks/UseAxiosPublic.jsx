import axios from "axios";


const UseAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:8000/',
        
        
      });
    return instance
};

export default UseAxiosPublic;