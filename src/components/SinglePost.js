import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import {SocialIcon} from "react-social-icons";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;

    return (
        <main className="bg-img">
            <div className="container mx-auto items-center justify-around min-h-screen">
                <article className="container shadow-lg mx-auto bg-gray-700 bg-opacity-50 rounded-lg">
                    <header className="relative">
                        <div className="absolute h-full w-full flex items-center justify-center p-8">
                            <div className="bg-black bg-opacity-75 rounded p-12">
                                <h1 className="text-white font-sans text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                                <div className="flex justify-center text-gray-800">
                                    <img src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                    className="w-12 h-12 rounded-full border-solid border border-gray-500"
                                    />
                                    <p className="font-sans text-yellow-300 flex items-center pl-2 text-lg font-bold">{singlePost.name}</p>
                                </div>
                            </div>
                        </div>
                        <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t" style={{height: "400px"}}/>
                    </header>
                    <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-gray-200 font-normal">
                        <BlockContent 
                        blocks={singlePost.body} 
                        projectId="5kizvdzn" 
                        dataset="production"/>
                    </div>
                </article>
            </div>

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

    );
}