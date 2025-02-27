import React from 'react'
import { NavLink } from "react-router-dom"
import Search from './Search'

function Navbar() {
    return (
        <nav className=' z-50 bg-background/80 backdrop-blur-md border-b border-white/10 p-5  flex justify-between item-center fixed  left-0 w-full'>

            <div className='w-12 h-12 flex items-center'>
                <img src='/src/public/logo.webp' />
            </div>
            <ul className="flex items-center space-x-4">
                <li><Search /></li>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? "bg-black text-white rounded-sm  px-2 py-1 " : "bg-white text-black rounded-sm  px-2 py-1"} >Home</NavLink></li>
                <li><NavLink to='/aboutus' className={({ isActive }) => isActive ? "bg-black text-white rounded-sm  px-2 py-1" : "bg-white text-black rounded-sm  px-2 py-1"} >About Us</NavLink></li>
                <li> <NavLink to='/contactus' className={({ isActive }) => isActive ? "bg-black text-white rounded-sm  px-2 py-1" : "bg-white text-black rounded-sm  px-2 py-1"}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar