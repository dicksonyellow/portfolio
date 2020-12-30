// import React, {useState, useEffect} from "react";
// import {Link} from "react-router-dom"
// import sanityClient from "../client.js";

// // set state and query for information with react hooks and use with use state and set new data. note is use to fetch data.

// export default function Post() {
//     const [postData, setPost] =useState(null);

//     useEffect(() => {
//         // sanity crup mode and query setup
//         sanityClient.fetch(`*[_type== "post"]{
//             title,
//             slug,
//             mainImage{
//                 asset->{
//                     _id,
//                     url
//                 },
//                 alt
//             }
//         }`)
//         .then((data) => setPost(data))
//         .catch(console.error);
//     }, []);
    
//     return (
//         <main className="bg-gray-900 min-h-screen p-12">
//             <section className="container mx-auto">
//                 <h1 className="text-4xl text-yellow-300 flex justify-center font-sans">
//                     Blog</h1>
//                 <h2 className="text-lg text-gray-400 flex justify-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {postData && postData.map((post, index) => (
//                     <article>
//                         <Link to={"/post/" + post.slug.current} key={post.slug.current}>
//                         <span className="block h-64 relative rounded shadow leading snug bg-white border-l-8 border-yellow-300" key={index}>
//                             <img 
//                                 src={post.mainImage.asset.url} 
//                                 alt={post.mainImage.alt}
//                                 className="w-full h-full rounded-r object-cover absolute"
//                                 />
//                             <span className="block relative h-g=full flex justify-end items-end pr-4 pb-4">
//                                 <h3 className="text-yellow-400 text-lg text-bold px-3 py-4 bg-gray-600 text-red-300 bg-opacity-75 rounded">{post.title}</h3>
//                             </span>
//                         </span>
//                         </Link>
//                     </article>
//                     ))}
//                 </div>
//             </section>
//         </main>
//     )
// }