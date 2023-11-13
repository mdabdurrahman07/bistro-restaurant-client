import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/UseAuth";

const Navbar = () => {
     const navOptions = <>
    <Link to="/"><li><a>Home</a></li></Link>
     <Link to="/menu"> <li><a>Menu</a></li></Link>
     <Link to="/order/salad"> <li><a>Order</a></li></Link>
      </>
      const {User , logout} = useAuth()
      const handleLogout = () => {
          logout()
          .then()
          .catch(error => {
            console.log(error.message)
          })
      }
    return (
        <div>
                        <div className="navbar fixed z-10 max-w-screen-2xl bg-black text-white bg-opacity-25">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
   {
    User ? <>
     <button onClick={handleLogout}>Logout</button>
    </>
    :
    <Link to="/login"><button>Login</button></Link>
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;