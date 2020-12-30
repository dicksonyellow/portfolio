import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import {SocialIcon} from "react-social-icons";


export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`* [_type== "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            featureImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            tags,
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);  
    }, []);

    return (
        <main className="bg-img">

            <section 
                className="container mx-auto items-center justify-around min-h-screen">
                <h1 
                    className="text-4xl text-white font-bold font-sans leading-none lg:leading-snug mx-3 py-10 text-white flex justify-center">
                    My Projects</h1>
                <p 
                    className="text-lg pb-10 text-gray-300 flex justify-center text-center font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                <section className="border-solid border-l-8 border-gray-700 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto w-4/5 md:w-full mb-20">
                    {projectData && projectData.map((project, index) => (
                    <article className="rounded-r-lg shadow-xl bg-color-a p-10 flex flex-col items-start justify-around ">
                        <img 
                        src={project.featureImage.asset.url} 
                        alt={project.featureImage.alt}
                        className="w-full h-60 object-cover-top pb-5"
                        />
                        <div>
                            <h3 className="text-yellow-300 text-2xl font-bold mb-2 hover:text-white">
                                <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
    
                            <div className="text-gray-300 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Finished On</strong>: {" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold"><br></br>Type</strong>: {" "}
                                    {project.projectType}
                                </span>
                                <span className="text-base text-yellow-300 font-medium">
                                <br />{project.place}
                                </span>
                                <span><p className="my-4 text-lg text-gray-300 leading-relaxed">{project.description}</p>
                                </span>
                                <span>
                                    <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-yellow-300 font-bold hover:underline hover:text-white">
                                        View The Project {""}
                                    <span role="img" aria-label="right pointer">👉</span>
                                    </a>
                                </span>
                            </div>
                        </div>

                    </article>
                    ))}
                </section>
            </section>

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