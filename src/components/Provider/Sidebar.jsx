import { useState } from "react";
import { FaHome } from 'react-icons/fa'
import { GrPowerShutdown } from 'react-icons/gr'
import {AiOutlineUser} from 'react-icons/ai'
import useWidthSize from "../../utils/useWidthSize";
import NavItem from '../NavItem'
const Sidebar = () => {
   
    const [isOpen, setIsOpen] = useState(false);
    const widthSize = useWidthSize();
    const toggleSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

   
    return (

        <div className="flex">
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black  border-r  border-black-100 shadow transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                <div className=" ">

                    {widthSize < 768 && (
                        <button
                            onClick={closeSidebar}
                            className="text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    )}
                </div>
                <div >

                    <div className="mt-5 ml-5">
                        <h1 className="font-sans font-black text-slate-900 text-3xl ">ELITE</h1>
                        <p className="text-sm font-semibold pb-6">Lets make..</p>

                    </div>
                    <NavItem icon={<FaHome/>} name={"HOME"} path={'/provider'} />
                    {/* <NavItem icon={faComment} name={'CHAT'} path={'/provider/chat'} /> */}
                    {/* <NavItem icon={faServer} name={"SERVICES"} path={'/provider/services'} /> */}
                    {/* <NavItem icon={faImage} name={'ADD POSTS'} path={'/provider/addpost'} /> */}
                    {/* <NavItem icon={faBagShopping} name={"ORDERS"} path={'/provider/orders'} /> */}
                    {/* <NavItem icon={faMoneyCheck} name={"UPGRADE"} path={'/provider/upgrade'} /> */}
                    <NavItem icon={<AiOutlineUser/>} name={"PROFILE"} path={'/provider/profile'} />
                    <NavItem icon={<GrPowerShutdown/>} name={"LOGOUT"} path={'/provider/login'} />



                </div>
            </div>


            <div className="flex flex-col flex-grow">
                <div className="border-r  border-black-100 shadow transition-transform duration-300 ease-in-out transform">
                    <div className="flex items-center justify-between px-4 py-3 bg-white">
                        <div >
                            <button
                                onClick={toggleSidebar}
                                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:hidden"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                       
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 cursor-pointer"
                    onClick={closeSidebar}
                />
            )}
        </div>
    );

};

export default Sidebar;