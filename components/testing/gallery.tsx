// // import React from 'react';

// // interface Item {
// //     title: string;
// //     description: string;
// //     imageUrl: string;
// // }

// // const items = [
// //     {
// //         title: "Beauty",
// //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
// //         imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// //     },
// //     {
// //         title: "Beyond Builder",
// //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
// //         imageUrl: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
// //     },
// //     {
// //         title: "Shooting Star",
// //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
// //         imageUrl: "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
// //     },

// // ];


// // const Gallery: React.FC = () => {
// //     return (
// //         <div className="bg-neutral-800  flex items-center justify-center min-h-screen max-h-[50vh]">
// //             <div className="flex gap-4">
// //                 {items.map((item, index) => (
// //                     <div key={index} className="group hover:shadow-xl hover:shadow-black/30 relative items-center justify-center overflow-hidden transition-shadow cursor-pointer">

// //                         <div className="w-[12rem] h-[10rem]">
// //                             <img className="group-hover:rotate-3 group-hover:scale-125 object-cover w-full h-full transition-transform duration-500" src={item.imageUrl} alt="" />
// //                         </div>
// //                         <div className="bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 absolute inset-0"></div>
// //                         <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
// //                             <h1 className="font-dmserif text-md font-bold text-white">{item.title}</h1>
// //                             <p className="group-hover:opacity-100 mb-3 text-xs italic text-white transition-opacity duration-300 opacity-0">{item.description}</p>
// //                             <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-xs capitalize text-white shadow shadow-black/60">See More</button>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>

// //         </div>
// //     );
// // };

// // export default Gallery;
// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useInView, useScroll, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { useWindowSize } from '@uidotdev/usehooks';
// import { Card } from '../ui/card';
// import Image from 'next/image';

// interface Item {
//     title: string;
//     description: string;
//     imageUrl: string;
//     proficiency: number;
//     url: string;
// }
// //typescript

// // Updated items array with all the skills you mentioned. Replace imageUrl with actual URLs.
// const items = [
//     {
//         title: "Python", description: "A high-level programming language known for its readability and versatility.",
//         imageUrl: "https://img.icons8.com/color/100/python--v1.png",
//         proficiency: 90,
//         url: "https://www.python.org/",
//     },
//     {
//         title: "HTML",
//         description: "The standard markup language for creating Web pages.",
//         imageUrl: "https://img.icons8.com/color/100/html-5--v1.png",
//         proficiency: 95,
//         url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//     },
//     {
//         title: "CSS",
//         description: "The language we use to style an HTML document.",
//         imageUrl: "https://img.icons8.com/color/100/css3.png",
//         proficiency: 90,
//         url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//     },
//     {
//         title: "JavaScript",
//         description: "The programming language of the Web.",
//         imageUrl: "https://img.icons8.com/fluency/100/javascript.png",
//         proficiency: 95,
//         url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//     },
//     {
//         title: "React",
//         description: "A JavaScript library for building user interfaces.",
//         imageUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
//         proficiency: 85,
//         url: "https://reactjs.org/",
//     },
//     {
//         title: "Next.js",
//         description: "A React framework for production.",
//         imageUrl: "https://img.icons8.com/color/100/nextjs.png",
//         proficiency: 80,
//         url: "https://nextjs.org/",
//     },
//     {
//         title: "Node.js",
//         description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
//         imageUrl: "https://img.icons8.com/color/100/nodejs.png",
//         proficiency: 80,
//         url: "https://nodejs.org/",
//     },
//     {
//         title: "Express.js",
//         description: "A fast, unopinionated, minimalist web framework for Node.js.",
//         imageUrl: "https://img.icons8.com/ios/100/express-js.png",
//         proficiency: 75,
//         url: "https://expressjs.com/",
//     },
//     // {
//     //     title: "Hono",
//     //     description: "A fast, simple, and modern framework for building web applications.",
//     //     imageUrl: "https://example.com/honojs-image.jpg",
//     //     proficiency: 70,
//     //     url: "https://honojs.dev/",
//     // },
//     // {
//     //     title: "FastAPI",
//     //     description: "A modern, fast web framework for building APIs with Python 3.6+.",
//     //     imageUrl: "https://example.com/fastapi-image.jpg",
//     //     proficiency: 70,
//     //     url: "https://fastapi.tiangolo.com/",
//     // },
//     // {
//     //     title: "Langchain",
//     //     description: "A tool for building applications with language models.",
//     //     imageUrl: "https://example.com/langchain-image.jpg",
//     //     proficiency: 65,
//     //     url: "https://langchain.com/",
//     // },
//     {
//         title: "Flask",
//         description: "A lightweight WSGI web application framework.",
//         imageUrl: "https://img.icons8.com/ios-filled/50/flask.png",
//         proficiency: 70,
//         url: "https://flask.palletsprojects.com/",
//     },
//     {
//         title: "Redis",
//         description: "An open source, in-memory data structure store, used as a database, cache, and message broker.",
//         imageUrl: "https://img.icons8.com/color/100/redis--v1.png",
//         proficiency: 75,
//         url: "https://redis.io/",
//     },
//     {
//         title: "PostgreSQL",
//         description: "A powerful, open source object-relational database system.",
//         imageUrl: "https://img.icons8.com/color/100/postgreesql.png",
//         proficiency: 80,
//         url: "https://www.postgresql.org/",
//     },
//     {
//         title: "MySQL",
//         description: "An open-source relational database management system.",
//         imageUrl: "https://img.icons8.com/ios-filled/100/mysql-logo.png",
//         proficiency: 75,
//         url: "https://www.mysql.com/",
//     },
//     {
//         title: "Prisma",
//         description: "Next-generation ORM for Node.js and TypeScript.",
//         imageUrl: "https://img.icons8.com/ios/100/prisma-orm.png",
//         proficiency: 70,
//         url: "https://www.prisma.io/",
//     },
//     // {
//     //     title: "Drizzle",
//     //     description: "A collection of front-end libraries that make writing dApp frontends easier and more predictable.",
//     //     imageUrl: "https://example.com/drizzle-image.jpg",
//     //     proficiency: 65,
//     //     url: "https://www.trufflesuite.com/drizzle",
//     // }, //not yet
//     // {
//     //     title: "tRPC",
//     //     description: "End-to-end typesafe APIs made easy.",
//     //     imageUrl: "https://example.com/trpc-image.jpg",
//     //     proficiency: 70,
//     //     url: "https://trpc.io/",
//     // }, //not yet
//     {
//         title: "React Three Fiber",
//         description: "A React renderer for three.js.",
//         imageUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
//         proficiency: 65,
//         url: "https://github.com/pmndrs/react-three-fiber",
//     },
//     {
//         title: "Framer Motion",
//         description: "A production-ready motion library for React.",
//         imageUrl: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-bold-tal-revivo.png",
//         proficiency: 75,
//         url: "https://www.framer.com/motion/",
//     },
//     {
//         title: "MongoDB",
//         description: "A document database with the scalability and flexibility that you want with the querying and indexing that you need.",
//         imageUrl: "https://img.icons8.com/color/100/mongodb.png",
//         proficiency: 80,
//         url: "https://www.mongodb.com/",
//     },
//     {
//         title: "TypeScript",
//         description: "An open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
//         imageUrl: "https://img.icons8.com/color/100/typescript.png",
//         proficiency: 85,
//         url: "https://www.typescriptlang.org/",
//     },
//     {
//         title: "TailwindCSS",
//         description: "A utility-first CSS framework for rapidly building custom designs.",
//         imageUrl: "https://img.icons8.com/color/100/tailwindcss.png", // Note: This is a placeholder image URL as a direct TailwindCSS icon might not be available on Icons8.
//         proficiency: 85,
//         url: "https://tailwindcss.com/",
//     },
//     {
//         title: "Sass",
//         description: "A preprocessor scripting language that is interpreted or compiled into CSS.",
//         imageUrl: "https://img.icons8.com/color/100/sass.png",
//         proficiency: 80,
//         url: "https://sass-lang.com/",
//     },
//     {
//         title: "Styled Components",
//         description: "A library for React and React Native that allows you to use component-level styles in your application.",
//         imageUrl: "https://styled-components.com/logo.png", // Note: This URL points directly to the Styled Components website logo. It's best to check for any usage restrictions.
//         proficiency: 75,
//         url: "https://styled-components.com/",
//     },
//     {
//         title: "React Native",
//         description: "A framework for building native apps using React.",
//         imageUrl: "https://img.icons8.com/color/100/react-native.png",
//         proficiency: 85,
//         url: "https://reactnative.dev/",
//     },
//     {
//         title: "Expo",
//         description: "An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.",
//         imageUrl: "https://img.icons8.com/ios/100/expo.png", // Note: This URL points to an image in the Expo documentation. It's best to check for any usage restrictions.
//         proficiency: 80,
//         url: "https://expo.dev/",
//     }
// ].sort((a, b) => a.proficiency - b.proficiency); // Sort items based on proficiency

// interface Breakpoints {
//     xlarge: number;
//     large: number;
//     medium: number;
//     small: number;
// }
// const Gallery: React.FC = () => {
//     const targetRef = useRef(null);
//     const { width } = useWindowSize();

//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//     });
//     const breakpoints: Breakpoints = {
//         xlarge: 1440,
//         large: 1024,
//         medium: 768,
//         small: 480,
//     };

//     // Function to determine the transform end value based on window width
//     // Handling the case where width can be null by assuming a default value
//     const getTransformEndValue = (width: number | null): string => {
//         // Assuming a default width (e.g., medium screen) if width is null
//         const effectiveWidth = width ?? breakpoints.medium;

//         if (effectiveWidth >= breakpoints.xlarge) {
//             return "-75%";
//         } else if (effectiveWidth >= breakpoints.large) {
//             return "-80%";
//         } else if (effectiveWidth >= breakpoints.medium) {
//             return "-90%";
//         } else {
//             return "-95%";
//         }
//     };

//     // Handling the case where width can be null by providing a fallback value for useTransform
//     const x = useTransform(scrollYProgress, [0, 1], ["1%", getTransformEndValue(width)]);

//     return (
//         <section ref={targetRef} className="relative h-[600vh] bg-neutral-950">

//             <motion.div style={{ x }} className="sticky top-0 flex gap-4 items-center h-screen ">
//                 {items.map((item, index) => {
//                     const ref = useRef(null);
//                     const isInView = useInView(ref, { once: true, amount: 0.5 });
//                     const [animationPlayed, setAnimationPlayed] = useState(false);

//                     useEffect(() => {
//                         if (isInView && !animationPlayed) {
//                             setTimeout(() => {
//                                 setAnimationPlayed(true);
//                             }, 2000); // Wait for 2 seconds after the item is in view
//                         }
//                     }, [isInView, animationPlayed]);

//                     return (
//                         <Card
//                             key={index}
//                             className="group hover:shadow-xl  w-[350px] h-auto hover:shadow-black/30 relative items-center justify-center overflow-hidden transition-shadow cursor-pointer"
//                             ref={ref}
//                         >
//                             <div className="w-[350px]]">
//                                 <Image width={100} height={100} className="group-hover:rotate-3 group-hover:scale-125 object-cover w-full h-full bg-white transition-transform duration-500" src={item.imageUrl} alt={item.title} />
//                             </div>
//                             <div className="bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 absolute inset-0"></div>
//                             <motion.div
//                                 className="px-9 absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500"
//                                 initial={{ translateY: '0%' }}
//                                 animate={{ translateY: animationPlayed ? 0 : '0%' }} // Animate translation to zero when in view
//                             >
//                                 <h1 className="font-dmserif text-md font-bold text-black">{item.title}</h1>
//                                 <p className="mb-3 text-xs italic text-black">{item.description}</p>
//                                 <Link href={item.url} className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-xs capitalize text-white shadow shadow-black/60">{item.proficiency}%
//                                 </Link>
//                             </motion.div>
//                         </Card>
//                     );
//                 })}
//             </motion.div>
//         </section>
//     );
// };

// export default Gallery;
