// Importing necessary modules from Next.js
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { TextGenerateEffect } from '../text-generate-effect-overriden-with-delay';

// Defining the type for the props the Card component will receive
type CardProps = {
    title: string;
    description: string;
    src: string;
    link: string;
    color: string;
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
};

const Card: React.FC<CardProps> = ({ title, description, src, link, color, i, progress, range, targetScale }) => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start end', 'start start']

    })
    const scale = useTransform(progress, range, [1, targetScale]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    // Determine if the index is odd or even to decide the order
    const isOdd = i % 2 !== 0;

    return (
        <div className="container sticky top-0 flex items-center justify-center h-screen">
            <motion.div
                className="flex relative h-[70vh] w-[95vw]  md:w-[80vw] md:h-[70vh] rounded-[25px] p-8 md:p-16 transform-origin-top bg-transparent"
                style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
            >
                {/* <h2 className="m-0 text-4xl text-center">{title}</h2> */}
                <div className={`flex ${isOdd ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} justify-center items-center h-full  md:mt-8  gap-2 md:gap-10`}>
                    <div className="md:w-2/5 w-full h-[1/5]  md:h-auto relative md:top-[10%]">
                        <p className=' font-extrabold text-rose-500 text-md md:text-2xl'>{title}</p>
                        {/* <p className="md:first-letter:text-4xl first-letter:font-title md:text-lg text-gray-100 font-medium text-xs">{description}</p> */}

                        <TextGenerateEffect className="md:first-letter:text-4xl first-letter:font-title md:text-lg text-gray-100 font-medium text-xs" words={description} delay={0.2} />

                        <Button variant="outline" className='bg-red-600 cursor-pointer'>
                            <a href={`${link}`} className='flex text-xs md:text-md'>
                                View
                                <ArrowUpRightIcon className=" text-green-500  ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                    <div className="relative md:w-3/5 w-full h-[4/5] rounded-[25px] overflow-hidden">
                        <motion.div
                            className="w-full h-full"
                            style={{ scale: imageScale }}>
                            <Image
                                width={500}
                                height={500}
                                src={`/${src}`}
                                alt="image"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
