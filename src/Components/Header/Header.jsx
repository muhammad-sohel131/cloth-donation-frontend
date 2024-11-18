import { FcDonate } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open)
    }
    const menu = <>
        <li>
            <NavLink to='/' className='pb-2'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/campaigns' className='pb-2'>Donation Campaigns</NavLink>
        </li>
        <li>
            <NavLink to='/help' className='pb-2'>How To Help</NavLink>
        </li>
        <li>
            <NavLink to='dashbord' className='pb-2'>Dashbord</NavLink>
        </li>
    </>
    return (
        <header className="border-b border-gray-100">
            <div className="flex justify-between items-center py-5 mx-container">
                <div className="text-3xl flex gap-5 items-center">
                    <FcDonate />
                    <h2>Donate</h2>
                </div>
                {/* for desktop */}
                <ul className="hidden lg:flex gap-6 text-lg">
                    {menu}
                </ul>
                <div className="hidden lg:block">
                    <button className="bg-[#f86011] text-white py-2 px-10 rounded-lg text-lg">Login</button>
                </div>

                {/* for mobile */}
                <div className="lg:hidden">
                    {
                        !open ? <CiMenuFries onClick={handleMenu} className="text-2xl" /> : <>
                            <IoClose onClick={handleMenu} className="text-2xl" />
                            <ul className="flex flex-col gap-6 text-lg absolute right-0 border border-gray-50 w-[95vw] top-[75px] p-10 shadow-xl">
                                {menu}
                                <div className="">
                                    <button className="bg-[#f86011] text-white py-2 px-10 rounded-lg text-lg">Login</button>
                                </div>
                            </ul>
                        </>

                    }

                </div>

            </div>
        </header>
    )
}
