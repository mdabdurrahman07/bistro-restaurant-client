/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";



export const AuthContext = createContext()
const AuthProviders = ({children}) => {
    
    const [User , setUser] = useState(null)
    const [loading , setloading] = useState(true)
    const publicAxios = UseAxiosPublic()

    const provider = new GoogleAuthProvider();
    const createUser = (email , password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const login = (email , password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logout = () =>{
      return  signOut(auth)
    }
    const googleLogin = ()=>{
        setloading(true)
        return signInWithPopup(auth, provider)

    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            if(currentUser){
                const UserInfo = {
                    email : currentUser?.email
                   
                }
                publicAxios.post('jwt' , UserInfo)
                .then(res => {
                    
                    if(res.data?.token){
                        localStorage.setItem('AccessToken' , res.data?.token)
                    }
                })
                .catch(error => console.log(error))

            }
            else{
                localStorage.removeItem('AccessToken')
            }
            setloading(false)
        })
        return () => 
       {
        return unSubscribe()
       }
    },[loading, publicAxios])
    const values = {
        User,
        loading,
        createUser,
        login,
        logout,
        googleLogin
    }
    return (
     
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProviders;