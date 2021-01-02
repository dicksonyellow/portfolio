import React from "react"
import {SocialIcon} from "react-social-icons";

export default function Home() {
    return (
        <main className="bg-img">
            <sectiom 
                className="container mx-auto flex items-center justify-around min-h-screen w-full"
                >

                <div className="container">
                    <h1 
                        className="pt-40 pb-5 text-4xl text-white text-center font-bold font-sans leading-none lg:leading-snug mx-3 text-white flex justify-center">
                        Welcome To My World</h1>
                        <h2 
                        className="pb-2 text-xl text-yellow-300 text-center font-light tracking-wide font-sans mx-3 flex justify-center">
                        Contact me if you like what you see.</h2>
                    <p 
                        className="text-md text-gray-300 text-center font-medium font-sans mx-3 flex justify-center tracking-wider">esiebadickson89@gmail.com</p>
                    <p 
                        className="text-md text-gray-300 text-center font-medium font-sans mx-3 flex tracking-wider justify-center">+48 729 469 568</p>
                    
                    <div className="justify-center flex pt-5 mx-auto py-5">
                        <SocialIcon 
                            url="https://github.com/dicksonyellow"  
                            className="mx-2" 
                            target="_blank" 
                            fgColor="#000" 
                            bgColor="#d7d7d7"                    
                            style={{height: 35, width: 35}} 
                        />
                        <SocialIcon 
                            url="https://www.behance.net/dicksonesieba"  
                            className="mx-2" 
                            target="_blank" 
                            fgColor="#000" 
                            bgColor="#d7d7d7"
                            style={{height: 35, width: 35}} 
                        />
                        <SocialIcon 
                            url="https://www.linkedin.com/in/dickson-esieba/"  
                            className="mx-2" 
                            target="_blank" 
                            fgColor="#000" 
                            bgColor="#d7d7d7"                    
                            style={{height: 35, width: 35}} 
                        />
                    </div>
                    
                    <div className="flex justify-center">
                            <a href="https://dicksonyellow.github.io/my-portfolio/"                                 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center pb-20 my-2">
                            <h2
                                className="text-yellow-300 inline-flex items-center px-3 rounded hover:text-white font-bold font-sans"
                                >&lt; Back My Main Page</h2>
                            </a>
                        </div>

                    <div>
                        <div className="flex flex-col lg:flex-row items-center justify-between py-5">
                            <p className="text-lg lg:mr-5 text-gray-300 font-sans py-3 w-full" > <span className="text-4xl font-bold text-yellow-300 mr-2">Hi!</span> I am Dickson Esieba, a Web Designer and Developer striving to create meaningful web experiences. Although I recently started doing this professionally, designing and coding have been my passion since the days I started working with computers.</p>
                            <p className="text-lg mx-3 text-gray-300 font-sans py-3 w-full lg:mx-5">My focus is to work with <span className="text-yellow-300">small businesses</span> in helping them achieve their digital goals. I understand their pain points because I have experience and a strong background in Business and Economics.</p>
                            <p className="text-lg mx-3 text-gray-300 font-sans py-3 w-full lg:ml-5">This knowledge coupled with my love for creating beautifully designed, intuitive and functional websites are the values I bring to the table. </p>
                        </div>
                        
                    </div>

                </div>

            </sectiom>
            
            <section className="bg-black py-5 border-solid border-t-2 border-gray-800">
                <div className="container mx-auto flex items-center justify-between">
                <p className="text-base text-white font-medium font-sans">Dickson Esieba</p>

                <div className="inline-flex py-2">
                    <SocialIcon 
                        url="https://github.com/dicksonyellow"  
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#000" 
                        bgColor="#F0C907"                    
                        style={{height: 30, width: 30}} 
                    />
                    <SocialIcon 
                        url="https://www.behance.net/dicksonesieba"  
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#000" 
                        bgColor="#F0C907"
                        style={{height: 30, width: 30}} 
                    />
                    <SocialIcon 
                        url="https://www.linkedin.com/in/dickson-esieba/"  
                        className="mr-4 " 
                        target="_blank" 
                        fgColor="#000" 
                        bgColor="#F0C907"                    
                        style={{height: 30, width: 30}} 
                    />
                </div>
                </div>
            </section>
        </main>
    )
}