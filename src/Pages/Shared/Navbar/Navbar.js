import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-ghost text-orange-300 rounded' : 'btn btn-ghost'} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-ghost text-orange-300 rounded' : 'btn btn-ghost'} to='/blogs'>Blogs</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-blue-600 text-white shadow-lg rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;