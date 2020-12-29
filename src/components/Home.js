import React from "react"
import image from "../projects.svg"

export default function Home() {
    return (
        <main>
            <sectiom 
                className=" relative flex justify-center min-h-screen pt-12 lg:pt-64 px8  bg-gray-900"
                >
                <img 
                src={image} 
                alt="project hero" 
                className="absolute object-cover w-5/12 h-7/12 z-10" 
                />
                <h1 
                className="text-6xl text-white font-bold font-sans leading-none lg:leading-snug home-name"
                >
                Welcome to my world.
                </h1>
            </sectiom>
        </main>
    )
}