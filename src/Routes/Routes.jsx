import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/menu" ,
        element : <Menu></Menu>
      },
      {
        path : "/order/:category" ,
        element : <Order></Order> 
      },
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/registration',
      element: <Registration/>
    }
  ]);

  export default router