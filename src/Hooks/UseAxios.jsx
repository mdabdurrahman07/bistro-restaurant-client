import axios from "axios";

const UseAxios = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:8000/',
        
      });
    return instance
       
};

export default UseAxios;