// "use client";
// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
// import { IconType } from 'react-icons';
// import { FaUserTie, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaCloud, FaPython, FaMobileAlt, FaBrain, FaPaintBrush, FaRocket, FaLaughWink, FaAws, FaAppStoreIos, FaGooglePlay, FaCloudUploadAlt } from 'react-icons/fa';

// const cardsData = [
//     {
//         title: 'About Jatique',
//         description: 'Emmanuel "Jatique" Ezeja, a dedicated Full Stack Web Developer, combines modern technologies and innovative strategies to craft high-performance web solutions. With a passion for both front-end and back-end development, Jatique delivers comprehensive and scalable applications tailored to meet business needs.',
//         icon: FaUserTie
//     },
//     {
//         title: 'Full Stack Expertise',
//         description: 'Possessing deep expertise in leveraging HTML, CSS, JavaScript, along with advanced frameworks like Next.js and React, I develop dynamic, responsive, and user-centric websites. My approach integrates modern development practices with a focus on performance, accessibility, and SEO to ensure the best possible web presence.',
//         icon: FaReact
//     },
//     {
//         title: 'Comprehensive Styling Proficiency',
//         description: 'My styling proficiency spans a vast array of technologies including SASS for powerful and efficient CSS extension, Bootstrap for rapid responsive design, traditional CSS3 for foundational web aesthetics, and styled-components for component-specific styling in React applications. This diverse skill set allows me to craft visually appealing and highly functional user interfaces.',
//         icon: FaCss3Alt
//     },
//     {
//         title: 'Backend Development Mastery',
//         description: 'I am proficient in utilizing a suite of backend technologies such as Redis for advanced caching mechanisms, PostgreSQL and MongoDB for robust data storage solutions, Node.js for scalable server-side scripting, and Express.js for efficient API development. This comprehensive backend skill set enables me to build secure, scalable, and high-performing server-side applications.',
//         icon: FaNodeJs
//     },
//     {
//         title: 'Serverless Architecture Expert',
//         description: 'With extensive experience in deploying serverless architectures, I enhance the scalability and efficiency of backend services. Leveraging platforms like AWS Lambda, I design systems that are not only cost-effective but also capable of handling varying loads with ease, ensuring seamless performance and reliability.',
//         icon: FaCloud
//     },
//     {
//         title: 'Advanced Web Concepts Implementation',
//         description: 'I am knowledgeable in implementing advanced web development concepts like Server-Side Rendering (SSR) and Incremental Static Generation (ISG) to optimize website performance and user experience. My expertise also extends to implementing effective caching strategies, further enhancing site speed and efficiency.',
//         icon: FaHtml5
//     },
//     {
//         title: 'AI & Machine Learning Integration',
//         description: 'Innovative in integrating custom AI solutions using LangChain and vector databases, I enhance user engagement and streamline business logic. My work in AI extends to developing intelligent systems capable of understanding and interacting with users in meaningful ways, opening new avenues for user experience enhancement.',
//         icon: FaBrain
//     },
//     {
//         title: 'Python & FastAPI Development',
//         description: 'I am competent in Python development, utilizing FastAPI for creating high-performance, scalable APIs. My expertise in Python also encompasses data analysis, machine learning model development, and automation scripts, making me versatile in handling various backend tasks and challenges.',
//         icon: FaPython
//     },
//     {
//         title: 'Rapid Learning & Diverse Project Experience',
//         description: 'A fast learner with a proven track record of mastering new technologies and methodologies, I have completed diverse projects ranging from e-commerce platforms to banking applications within a remarkably short timeframe. This adaptability and eagerness to learn have been crucial in my development as a full-stack developer.',
//         icon: FaRocket
//     },
//     {
//         title: 'Cross-Platform Mobile Development Proficiency',
//         description: 'Adept at developing multi-platform mobile applications using React Native and Expo, I ensure a seamless user experience across all devices. My mobile development skills extend to implementing native functionalities, optimizing performance, and ensuring that applications are intuitive, engaging, and accessible.',
//         icon: FaMobileAlt
//     },
//     {
//         title: 'Modern Development Tools & Practices',
//         description: 'I utilize the latest development tools and practices to build unique, efficient, and maintainable web applications. My toolkit includes version control with Git, continuous integration and deployment pipelines, and containerization with Docker, ensuring that my development process is streamlined and effective.',
//         icon: FaPaintBrush
//     },
//     {
//         title: 'Creative Problem Solving & Innovation',
//         description: 'I employ a creative approach to problem-solving, ensuring innovative solutions that meet both technical and business requirements. My ability to think outside the box has led to the development of unique features and functionalities that enhance user engagement and drive business success.',
//         icon: FaLaughWink
//     },
//     {
//         title: 'Continuous Innovation & Learning',
//         description: 'Committed to continuous learning and innovation, I am always exploring new technologies and methodologies to stay at the forefront of web development. This dedication to growth ensures that I am well-equipped to tackle emerging challenges and leverage the latest advancements to benefit projects.',
//         icon: FaBrain
//     },
//     {
//         title: 'Deployment Mastery Across Platforms',
//         description: 'Skilled in deploying web applications and mobile apps across platforms like Vercel, Render, and AWS for scalable cloud solutions, and efficiently managing releases on the Apple App Store and Google Play Store. My comprehensive understanding of deployment strategies ensures that applications are accessible, performant, and ready for user engagement.',
//         icon: FaCloudUploadAlt
//     }
// ];

// export const HorizontalScrollCarousel = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//     });

//     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

//     return (
//         <section ref={targetRef} className="relative h-[600vh] bg-neutral-900">
//             <div className="sticky top-0 flex items-center h-screen overflow-hidden">
//                 <motion.div style={{ x }} className="flex gap-4">
//                     {cardsData.map(({ title, description, icon: Icon }, index) => (
//                         <Card key={index} className="bg-neutral-800 text-slate-300 w-[350px] rounded-lg p-6">
//                             <CardHeader className="flex flex-col items-center justify-center">
//                                 <Icon className="text-[#db6060] h-12 w-12" />
//                                 <CardTitle className="mt-4 mb-2 text-xl font-semibold">{title}</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-sm text-center">{description}</p>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FaUserTie, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaCloud, FaPython, FaMobileAlt, FaBrain, FaPaintBrush, FaRocket, FaLaughWink, FaAws, FaAppStoreIos, FaGooglePlay, FaCloudUploadAlt, } from 'react-icons/fa';
import { useWindowSize } from '@uidotdev/usehooks';
import Lenis from '@studio-freight/lenis'

const cardsData = [
    {
        title: 'About Jatique',
        description: 'Emmanuel "Jatique" Ezeja, a dedicated Full Stack Web Developer, combines modern technologies and innovative strategies to craft high-performance web solutions. With a passion for both front-end and back-end development, Jatique delivers comprehensive and scalable applications tailored to meet business needs.',
        icon: FaUserTie
    },
    {
        title: 'Full Stack Expertise',
        description: 'Possessing deep expertise in leveraging HTML, CSS, JavaScript, Typescript , along with advanced frameworks like Next.js and React, I develop dynamic, responsive, and user-centric websites. My approach integrates modern development practices with a focus on performance, accessibility, and SEO to ensure the best possible web presence.',
        icon: FaReact,
        icons: [FaReact, FaNodeJs]
    },
    {
        title: 'Comprehensive Styling Proficiency',
        description: 'My styling proficiency spans a vast array of technologies including SASS for powerful and efficient CSS extension, Bootstrap for rapid responsive design, traditional CSS3 for foundational web aesthetics, and styled-components for component-specific styling in React applications. This diverse skill set allows me to craft visually appealing and highly functional user interfaces.',
        icon: FaCss3Alt,
        icons: [FaCss3Alt, FaReact]
    },
    {
        title: 'Backend Development Mastery',
        description: 'I am proficient in utilizing a suite of backend technologies such as Redis for advanced caching mechanisms, PostgreSQL and MongoDB for robust data storage solutions, Node.js for scalable server-side scripting, and Express.js for efficient API development. This comprehensive backend skill set enables me to build secure, scalable, and high-performing server-side applications.',
        icon: FaNodeJs,
        icons: [FaNodeJs, FaDatabase]
    },
    {
        title: 'Serverless Architecture Expert',
        description: 'With extensive experience in deploying serverless architectures, I enhance the scalability and efficiency of backend services. Leveraging platforms like AWS Lambda, I design systems that are not only cost-effective but also capable of handling varying loads with ease, ensuring seamless performance and reliability.',
        icon: FaCloud,
        icons: [FaCloud, FaAws]
    },
    {
        title: 'Advanced Web Concepts Implementation',
        description: 'I am knowledgeable in implementing advanced web development concepts like Server-Side Rendering (SSR) and Incremental Static Generation (ISG) to optimize website performance and user experience. My expertise also extends to implementing effective caching strategies, further enhancing site speed and efficiency.',
        icon: FaHtml5,
        icons: [FaHtml5, FaCloudUploadAlt]
    },
    {
        title: 'AI & Machine Learning Integration',
        description: 'Innovative in integrating custom AI solutions using LangChain and vector databases, I enhance user engagement and streamline business logic. My work in AI extends to developing intelligent systems capable of understanding and interacting with users in meaningful ways, opening new avenues for user experience enhancement.',
        icon: FaBrain,
        icons: [FaBrain, FaRocket]
    },
    {
        title: 'Python & FastAPI Development',
        description: 'I am competent in Python development, utilizing FastAPI for creating high-performance, scalable APIs. My expertise in Python also encompasses data analysis, machine learning model development, and automation scripts, making me versatile in handling various backend tasks and challenges.',
        icon: FaPython,
        icons: [FaPython, FaMobileAlt]
    },
    {
        title: 'Rapid Learning & Diverse Project Experience',
        description: 'A fast learner with a proven track record of mastering new technologies and methodologies, I have completed diverse projects ranging from e-commerce platforms to banking applications within a remarkably short timeframe. This adaptability and eagerness to learn have been crucial in my development as a full-stack developer.',
        icon: FaRocket,
        icons: [FaRocket, FaLaughWink]
    },
    {
        title: 'Cross-Platform Mobile Development Proficiency',
        description: 'Adept at developing multi-platform mobile applications using React Native and Expo, I ensure a seamless user experience across all devices. My mobile development skills extend to implementing native functionalities, optimizing performance, and ensuring that applications are intuitive, engaging, and accessible.',
        icon: FaMobileAlt,
        icons: [FaMobileAlt, FaPaintBrush]
    },
    {
        title: 'Modern Development Tools & Practices',
        description: 'I utilize the latest development tools and practices to build unique, efficient, and maintainable web applications. My toolkit includes version control with Git, continuous integration and deployment pipelines, and containerization with Docker, ensuring that my development process is streamlined and effective.',
        icon: FaPaintBrush,
        icons: [FaPaintBrush, FaCloudUploadAlt]
    },
    {
        title: 'Creative Problem Solving & Innovation',
        description: 'I employ a creative approach to problem-solving, ensuring innovative solutions that meet both technical and business requirements. My ability to think outside the box has led to the development of unique features and functionalities that enhance user engagement and drive business success.',
        icon: FaLaughWink,
        icons: [FaLaughWink, FaBrain]
    },
    {
        title: 'Continuous Innovation & Learning',
        description: 'Committed to continuous learning and innovation, I am always exploring new technologies and methodologies to stay at the forefront of web development. This dedication to growth ensures that I am well-equipped to tackle emerging challenges and leverage the latest advancements to benefit projects.',
        icon: FaBrain,
        icons: [FaBrain, FaRocket]
    },
    {
        title: 'Deployment Mastery Across Platforms',
        description: 'Skilled in deploying web applications and mobile apps across platforms like Vercel, Render, and AWS for scalable cloud solutions, and efficiently managing releases on the Apple App Store and Google Play Store. My comprehensive understanding of deployment strategies ensures that applications are accessible, performant, and ready for user engagement.',
        icon: FaCloudUploadAlt,
        icons: [FaCloudUploadAlt, FaAppStoreIos, FaGooglePlay]
    },

];
interface Breakpoints {
    xlarge: number;
    large: number;
    medium: number;
    small: number;
}

export const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { width } = useWindowSize();
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const breakpoints: Breakpoints = {
        xlarge: 1440,
        large: 1024,
        medium: 768,
        small: 480,
    };

    // Function to determine the transform end value based on window width
    // Handling the case where width can be null by assuming a default value
    const getTransformEndValue = (width: number | null): string => {
        // Assuming a default width (e.g., medium screen) if width is null
        const effectiveWidth = width ?? breakpoints.medium;

        if (effectiveWidth >= breakpoints.xlarge) {
            return "-75%";
        } else if (effectiveWidth >= breakpoints.large) {
            return "-80%";
        } else if (effectiveWidth >= breakpoints.medium) {
            return "-90%";
        } else {
            return "-95%";
        }
    };

    // Handling the case where width can be null by providing a fallback value for useTransform
    const x = useTransform(scrollYProgress, [0, 1], ["1%", getTransformEndValue(width)]);
    useEffect(() => {

        const lenis = new Lenis()



        function raf(time: number) {

            lenis.raf(time)

            requestAnimationFrame(raf)

        }



        requestAnimationFrame(raf)

    })
    return (
        <section id="about" ref={targetRef} className="relative h-[600vh] bg-neutral-950">
            <div className="sticky top-0 flex items-center h-screen overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cardsData.map(({ title, description, icon: Icon, icons }, index) => (
                        <div key={index} className="w-full max-w-[350px]  transition-all duration-1000 hover:scale-105">
                            <div className="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                                <span>
                                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                                </span>
                                <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200" />
                                <Card className=" z-10 text-slate-300 w-[350px] h-[350px]  rounded-lg">
                                    <CardHeader className="flex flex-col items-center justify-center">
                                        <Icon className="text-[#db6060] md:h-16 md:w-16 h-12 w-12" />
                                        <CardTitle className="text-md md:text-xl mt-4 mb-2 font-semibold">{title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className=" md:text-sm text-xs text-center">{description}</p>

                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
