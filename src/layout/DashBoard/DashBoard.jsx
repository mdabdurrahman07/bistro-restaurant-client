import { NavLink, Outlet } from "react-router-dom";
import { IoBagCheckSharp, IoCalendarSharp, IoCartSharp, IoHomeSharp, IoMailSharp, IoMenuSharp, IoStarHalfSharp, IoWalletSharp } from "react-icons/io5";
import UseCart from "../../Hooks/UseCart";
import { ImSpoonKnife } from "react-icons/im";
import { MdManageSearch , MdOutlineGroups2 } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import UseAdmin from "../../Hooks/UseAdmin";


const DashBoard = () => {
    const [cart] = UseCart()
    const [isAdmin] = UseAdmin()
    return (
        <div className="flex ">
            {/* sidebar */}
            <div className='w-72 bg-[#D1A054] min-h-screen mx-auto'>
                <div className=" text-center mt-5 mb-20">
                    <p className="font-bold text-2xl text-center ">Bistro Boss</p>
                    <p className="font-medium text-xl text-center tracking-[3px]">Restaurant</p>
                </div>
                <ul className="p-4 space-y-6">
                               {
                                isAdmin ?
                                // for admin
                                <>

                        <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoHomeSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <ImSpoonKnife className="font-semibold text-xl" />
                        <NavLink to="/dashboard/adminAddItems">Add Items</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <MdManageSearch className="font-semibold text-xl" />
                        <NavLink to="/dashboard/adminManageItems">Manage Items</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <FaBook className="font-semibold text-xl" />
                        <NavLink to="/dashboard/adminManageBooking">Manage Bookings</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <MdOutlineGroups2 className="font-semibold text-xl" />
                        <NavLink to="/dashboard/adminAllUsers">All Users</NavLink>
                         </span>
                         </li>
                                </>
                                :
                                // normal user
                                <>
                                 <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoHomeSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/UserHome">User Home</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoWalletSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/PaymentHistory">Payment History</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoCartSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/MyCart">My Cart ({cart.length})</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoStarHalfSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/AddReview">Add Review</NavLink>
                         </span>
                         </li>
                    <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoCalendarSharp className="font-semibold text-xl" />
                        <NavLink to="/dashboard/MyBookings">My Bookings</NavLink>
                         </span>
                         </li>
                                </>
                               }
                         <div className="divider"></div>

                         <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoHomeSharp className="font-semibold text-xl" />
                        <NavLink to="/">Home</NavLink>
                         </span>
                         </li>
                         <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoMenuSharp className="font-semibold text-xl" />
                        <NavLink to="/">Menu</NavLink>
                         </span>
                         </li>
                         <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoBagCheckSharp className="font-semibold text-xl" />
                        <NavLink to="/">Shop</NavLink>
                         </span>
                         </li>
                         <li className=" font-semibold text-lg uppercase ">
                         <span className="flex pl-5 gap-2 items-center">
                         <IoMailSharp className="font-semibold text-xl" />
                        <NavLink to="/">Contact</NavLink>
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