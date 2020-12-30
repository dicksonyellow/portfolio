import React from "react"
import {SocialIcon} from "react-social-icons";

export default function Home() {
    return (
        <main className="bg-img">
            <sectiom 
                className="container mx-auto relative flex flex-col items-center justify-around min-h-screen"
                >
                <div>
                    <h2 className="text-lg text-yellow-300 font-medium font-sans mx-3">Dickson Esieba</h2>
                    <h1 
                    className="text-4xl text-white font-bold font-sans leading-none lg:leading-snug mx-3"
                    >
                    Welcome to my world.
                    </h1>
                    <div className="flex flex-col lg:flex-row items-center justify-between py-10">
                        <p className="text-lg mx-3 text-gray-300 font-sans">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing.</p>
                        <p className="text-lg mx-3 text-gray-300 font-sans">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing.</p>
                    </div>
                </div>

            </sectiom>
            
            <section className="bg-black py-5 border-solid border-t-2 border-gray-800">
                <div className="container mx-auto flex items-center justify-between">
                <p className="text-base text-yellow-300 font-medium font-sans">Dickson Esieba</p>

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