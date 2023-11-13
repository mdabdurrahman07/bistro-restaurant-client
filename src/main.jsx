import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router-dom";
import router from './Routes/Routes';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders';
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <HelmetProvider>
   <RouterProvider router={router}></RouterProvider>
   </HelmetProvider>
   <Toaster/>
   </AuthProviders>
  </React.StrictMode>,
)
