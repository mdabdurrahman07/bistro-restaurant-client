import { NavLink, Outlet } from "react-router-dom";
import { IoCalendarSharp, IoCartSharp, IoHomeSharp, IoStarHalfSharp, IoWalletSharp } from "react-icons/io5";

const DashBoard = () => {
    return (
        <div className="flex ">
            {/* sidebar */}
            <div className='w-72 bg-[#D1A054] min-h-screen mx-auto'>
                <div className=" text-center mt-5 mb-20">
                    <p className="font-bold text-2xl text-center ">Bistro Boss</p>
                    <p className="font-medium text-xl text-center tracking-[3px]">Restaurant</p>
                </div>
                <ul className="p-4 space-y-6">
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoHomeSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/MyCart">User Home</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoWalletSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/MyCart">Payment History</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoCartSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/MyCart">My Cart</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoStarHalfSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/MyCart">Add Review</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoCalendarSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/MyCart">My Bookings</NavLink>
                         </span>
                         </li>
                         <div className="divider"></div>

                         <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoHomeSharp className="font-semibold text-xl" />
                        <NavLink to="/">Home</NavLink>
                         </span>
                         </li>
                </ul>
            </div>
            {/* content  */}
            <div className="flex-1 bg-[#F6F6F6] min-h-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;