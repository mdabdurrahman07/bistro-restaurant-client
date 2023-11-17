import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from '../Hooks/UseAuth'

const UseAxios = () => {
  const navigate = useNavigate()
  const {logout} = UseAuth()
    const instance = axios.create({
        baseURL: 'http://localhost:8000/',
        
        
      });
      instance.interceptors.request.use(function (config) {
        // Do something before request is sent
       const token = localStorage.getItem('AccessToken')
       config.headers.authorized = `Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
      // intercepts 401 & 403
      instance.interceptors.response.use(function (response) {
        return response;
      }, async (error) => {
        const status = error.response.status; 
        if(status === 401 || status === 401 ){
          await logout()
          navigate('/login')
        }
        return Promise.reject(error);
      });
    return instance
       
};

export default UseAxios;