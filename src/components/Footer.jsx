import React from 'react'
import { NavLink } from "react-router-dom"


function Footer() {
    return (
        <div className=' z-50 bg-background/80 backdrop-blur-md border-t border-white/10 p-5 flex justify-center item-center  inset-x-0 bottom-0 left-0 w-full'>

            <ul>
                <NavLink to='/' className={({ isActive }) => isActive ? "bg-black text-white rounded-sm m-4 px-2 py-1 " : "bg-white text-black rounded-sm m-4 px-2 py-1"} >Home</NavLink>
                <NavLink to='/aboutus' className={({ isActive }) => isActive ? "bg-black text-white rounded-sm m-4 px-2 py-1" : "bg-white text-black rounded-sm m-4 px-2 py-1"} >About Us</NavLink>
                <NavLink to='/contactus' className={({ isActive }) => isActive ? "bg-black text-white rounded-sm m-4 px-2 py-1" : "bg-white text-black rounded-sm m-4 px-2 py-1"}>Contact</NavLink>
            </ul>
        </div>
    )
}

export default Footer