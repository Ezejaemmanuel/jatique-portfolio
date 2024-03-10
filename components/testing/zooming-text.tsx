"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import emoji from 'react-easy-emoji'

export const SectionOne = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const totalWords = 3;
    const visibilityIncrement = 0.5 / totalWords;

    const scaleJatique = useTransform(scrollYProgress, [0, visibilityIncrement, 0.5, 1], [0.5, 3, 4, 10]);
    const scaleLoves = useTransform(scrollYProgress, [0, visibilityIncrement * 2, 0.5, 1], [0, 2, 4, 10]);
    const scaleCoding = useTransform(scrollYProgress, [0, visibilityIncrement * 3, 0.5, 1], [0, 0, 4, 10]);

    return (
        <motion.section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-20">
                    <motion.div className="text-rose-400 text-xl uppercase" style={{ scale: scaleJatique }}>
                        Jatique
                    </motion.div>
                    <motion.div className="text-rose-600 text-xl uppercase" style={{ scale: scaleLoves }}>
                        {emoji('❤')}

                    </motion.div>
                    <motion.div className="text-rose-800 text-xl uppercase" style={{ scale: scaleCoding }}>
                        coding
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};
