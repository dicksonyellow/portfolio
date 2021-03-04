import React from "react";
import {NavLink} from "react-router-dom";
import siteIcon from "../site-icon.svg"

export default function NavBar() {
    return (
        <header className="bg-black border-solid border-b-2 border-gray-800 fixed w-full z-10">
        <div className="container mx-auto flex justify-between">
            <NavLink 
                to="/" 
                exact
                className="text-white inline-flex items-center px-3 py-3 my-2 rounded hover:text-yellow-300 font-sans"
                activeClassName="text-yellow-300 font-bold font-sans"
                >
                <img 
                src={siteIcon} 
                alt="logo" 
                className="pr-3 object-cover w-auto h-7" />
            </NavLink>
            <nav className="flex">
                <NavLink 
                    to="/post" 
                    className="text-white inline-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-300 font-sans"
                    activeClassName="text-yellow-300 font-bold font-sans"
                    >
                    Case Studies
                </NavLink>
                <NavLink 
                    to="/project"
                    className="text-white inline-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-300 font-sans"
                    activeClassName="text-yellow-300 font-bold font-sans"
                    >
                    Websites
                </NavLink>
            </nav>
        </div>
    </header>
    )
}