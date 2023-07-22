import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link>Colleges</Link></li>
        <li><Link>Admission</Link></li>
        <li><Link>My Colleges</Link></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-400 text-lg font-semibold rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">College Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg font-semibold menu-horizontal px-1">
                  {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn bg-rose-700 text-white hover:text-black">Log out</Link>
            </div>
        </div>
    );
};

export default Navbar;