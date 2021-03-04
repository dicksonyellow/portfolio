import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import sanityClient from "../client.js";
import {SocialIcon} from "react-social-icons";

// set state and query for information with react hooks and use with use state and set new data. note is use to fetch data.

export default function Post() {
    const [postData, setPost] =useState(null);

    useEffect(() => {
        // sanity crup mode and query setup
        sanityClient.fetch(`*[_type== "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);
    
    return (
        <main className="bg-img">
            <section className="container mx-auto items-center justify-around min-h-screen">

            <h1 
                className="pt-40 pb-20 text-4xl text-white text-center font-bold font-sans leading-none lg:leading-snug mx-3 text-white flex justify-center">
                Case Studies</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 pb-32 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading snug bg-white border-l-8 border-gray-700" key={index}>
                            <img 
                                src={post.mainImage.asset.url} 
                                alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"
                                />
                            <span className="block relative h-g=full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-white text-lg text-bold px-5 py-4 bg-black bg-opacity-80 rounded">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>

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