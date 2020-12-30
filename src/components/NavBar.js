import React from "react";
import {NavLink} from "react-router-dom";
import siteIcon from "../site-icon.svg"

export default function NavBar() {
    return (
        <header className="bg-black border-solid border-b-2 border-gray-800">
        <div className="container mx-auto flex justify-between">
            <div>
                <NavLink 
                    to="/" 
                    exact 
                    className="inline-flex items-center py-4 px-3 my-2">
                        <img 
                        src={siteIcon} 
                        alt="logo" 
                        className="object-cover w-auto h-7" />
                </NavLink>
            </div>
            <nav className="flex">
                {/* <NavLink 
                    to="/about" 
                    className="text-white inline-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-300 font-sans"
                    activeClassName="text-yellow-400 font-bold font-sans"
                    >
                    About Me
                </NavLink> */}
                {/* <NavLink 
                    to="/post" 
                    className="text-white inline-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-300 font-sans"
                    activeClassName="font-bold font-sans"
                    >
                    Blog Post
                </NavLink> */}
                <NavLink 
                    to="/project"
                    className="text-white inline-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-300 font-sans"
                    activeClassName="font-bold font-sans"
                    >
                    Projects
                </NavLink>
            </nav>
        </div>
    </header>
    )
}