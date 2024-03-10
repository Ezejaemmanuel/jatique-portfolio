"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

// Define the TypeScript interface for a review
interface Review {
    id: number;
    text: string;
    author: string;
    role: string;
    imageUrl: string;
    bgColor: string; // Background color for each review section
}

// Array of review objects with unique background colors
const reviews: Review[] = [
    {
        id: 1,
        text: "They developed an exceptional web and mobile application that significantly increased our engagement.",
        author: "ALEX R.",
        role: "Product Manager",
        imageUrl: "/the_image_of_a_young_male_manager_smiling_and_in.jpg",
        bgColor: "#F0E68C",
    },
    {
        id: 2,
        text: "Their innovative approach to design and development has helped us break new ground in our market.",
        author: "JANE D.",
        role: "CEO",
        imageUrl: "/the_image_of_a_young_female_manager_smiling_and_.jpg",
        bgColor: "#E6E6FA",
    },
    {
        id: 3,
        text: "The team's dedication to understanding our needs made the project a tremendous success.",
        author: "MIKE L.",
        role: "CTO",
        imageUrl: "/a_company_ceo_smiling_and_laughing_photo.jpg",
        bgColor: "#AFEEEE",
    }
];

const ONE_SECOND = 500;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

export const SwipeCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === reviews.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < reviews.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <div className="bg-neutral-950 relative py-8 overflow-hidden">
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="cursor-grab active:cursor-grabbing flex items-center"
            >
                <Images imgIndex={imgIndex} />
            </motion.div>

            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            <GradientEdges />
        </div>
    );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
    return (
        <>
            {reviews.map((review, idx) => {
                return (
                    <motion.div
                        key={idx}
                        
                        animate={{
                            scale: imgIndex === idx ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="shrink-0  rounded-xl bg-neutral-900 w-screen"
                    >
                        <div key={review.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} rounded-lg shadow-lg justify-center  items-center overflow-hidden`} >
                            <div className="md:w-1/2 container space-y-4">
                                <p className="inline-block text-6xl">“</p>
                                <p className="text-3xl leading-relaxed">{review.text}</p>
                                <p className="text-6xl">”</p>

                                <p className="text-xl font-bold">{review.author}</p>
                                <p className="text-xl uppercase">{review.role}</p>
                            </div>
                            <div className="md:w-1/2">
                                <Image
                                    alt={review.role}
                                    className="object-cover w-full h-full"
                                    src={review.imageUrl}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div> 
                    </motion.div>
                );
            })}
        </>
    );
};

const Dots = ({
    imgIndex,
    setImgIndex,
}: {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <div className="flex justify-center w-full gap-2 mt-4">
            {reviews.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
                            }`}
                    />
                );
            })}
        </div>
    );
};

const GradientEdges = () => {
    return (
        <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
        </>
    );
};


// Import React and necessary types from 'react'




// export default function Component() {
//     return (
//         <div className="min-h-screen px-4 py-10" style={{ backgroundColor: "#ADD8E6" }}> {/* Hex color for the page background */}
//             <div className="max-w-6xl mx-auto space-y-8">
//                 {reviews.map((review, index) => (
                    
//                 ))}
//             </div>
//         </div>
//     );
// }
