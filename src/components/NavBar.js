import React from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
import image from "../site-logo.svg"

export default function NavBar() {
    return (
        <header className="bg-black">
        <div className="container mx-auto flex justify-between">
                <Link 
                    to="/" 
                    exact 
                    className="inflex-flex items-center py-4 px-3  tracking-widest"
                    >
                    <img 
                    src={image} 
                    alt="logo" 
                    className=" object-cover w-50 h-7" 
                    />
                </Link>
            <nav className="flex">
                <NavLink 
                    to="/about" 
                    className="text-white inflex-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-500 font-sans"
                    activeClassName="text-yellow-400 font-bold font-sans"
                    >
                    About Me
                </NavLink>
                <NavLink 
                    to="/post" 
                    className="text-white inflex-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-500 font-sans"
                    activeClassName="text-yellow-400 font-bold font-sans"
                    >
                    Blog Post
                </NavLink>
                <NavLink 
                    to="/project"
                    className="text-white inflex-flex items-center py-3 px-3 my-2 rounded hover:text-yellow-500 font-sans"
                    activeClassName="text-yellow-400 font-bold font-sans"
                    >
                    Projects
                </NavLink>
            </nav>
            <div className="inline-flex px-3 py-3">
                <SocialIcon 
                    url="https://github.com/dicksonyellow"  
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                />
                <SocialIcon 
                    url="https://www.linkedin.com/in/dickson-esieba/"  
                    className="mr-4 " 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                />
                <SocialIcon 
                    url="https://www.behance.net/dicksonesieba"  
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                />

            </div>
        </div>
    </header>
    )
}