import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashBoard from "../layout/DashBoard/DashBoard";
import Cart from "../pages/DashBoardPages/Cart/Cart";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import AllUsers from "../pages/DashBoardPages/AllUsers/AllUsers";

  
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
    },
    {
      path : '/dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children : [
        {
          path : "/dashboard/MyCart",
          element : <Cart></Cart>
        },
        // admin 
        {
          path : "/dashboard/adminAllUsers",
          element : <AllUsers></AllUsers>
        }
      ]
    }
  ]);

  export default router