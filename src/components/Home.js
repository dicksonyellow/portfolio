import React from "react"
import {SocialIcon} from "react-social-icons";

export default function Home() {
    return (
        <main className="bg-img">
            <sectiom 
                className="container mx-auto flex items-center justify-around min-h-screen w-full"
                >

                <div className="">
                    <h1 
                        className="pt-40 pb-5 text-4xl text-white text-center font-bold font-sans leading-none lg:leading-snug mx-3 text-white flex justify-center">
                        Hi, I am Dickson Esieba</h1>
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
                            className="inline-flex items-center pb-10 my-2">
                            <h2
                                className="txt-col-bluish inline-flex items-center px-3 rounded hover:text-white font-bold font-sans lg:text-xl"
                                >&lt; Back My Main Page</h2>
                            </a>
                        </div>

                    <div>
                        <div className="flex flex-col lg:flex-row items-center justify-between pb-32">
                            <p className="text-gray-300 font-sans py-3 lg:mr-5 lg:text-xl">I am a creative person who loves technology. I have an interest in Agile Project Management, Digital Marketing, Front-End Web Development, and User Experience (UX) Design. I expect and desire to work in an environment that facilitates career and personal development and be part of a team with members of diverse backgrounds. My core values are <span className="text-yellow-300">Creativity, Dedication, Responsibility, and Integrity.</span></p>
                            <p className="text-gray-300 font-sans py-3 lg:ml-5 lg:text-xl">My major career goal is to become a <span className="text-yellow-300">Project Management expert within the IT-sphere.</span> To achieve this, I plan to adopt a combination of technology, creativity, and my knowledge of business and management to implement meaningful projects that solve customer problems. I understand that it is important for me to focus on enhancing productivity, efficiency, and personal development to be successful. </p>
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