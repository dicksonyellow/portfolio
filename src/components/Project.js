import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";


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
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);  
    }, []);

    return (
        <main className="bg-gray-900 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl text-yellow-300 flex justify-center font-sans">My Projects</h1>
                <h2 className="text-lg text-gray-400 flex justify-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
                <section className="grid grid-cols-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-black p-16">
                        <h3 className="text-yellow-300 text-3xl font-bold mb-2 hover:text-white">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished On</strong>: {" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold"><br></br>Location</strong>: {" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold"><br></br>Type</strong>: {" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-yellow-300 font-bold hover:underline hover:text-white">
                                View The Project {""}
                            <span role="img" aria-label="right pointer">👉</span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}