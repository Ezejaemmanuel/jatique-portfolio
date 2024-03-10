// Assuming similar imports and useRef setup as SectionOne

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const SectionTwo = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const totalWords = 5;
    const visibilityIncrement = 0.5 / totalWords;

    const scaleHe = useTransform(scrollYProgress, [0, visibilityIncrement, visibilityIncrement * 2, 0.5, 1], [0.5, 3, 4, 5, 7]);
    const scaleCan = useTransform(scrollYProgress, [0, visibilityIncrement * 2, visibilityIncrement * 3, 0.5, 1], [0, 1, 3, 5, 7]);
    const scaleBuild = useTransform(scrollYProgress, [0, visibilityIncrement * 3, visibilityIncrement * 4, 0.5, 1], [0, 0, 2, 5, 7]);
    const scaleYou = useTransform(scrollYProgress, [0, visibilityIncrement * 4, visibilityIncrement * 5, 0.5, 1], [0, 0, 3, 5, 7]);
    const scaleAny = useTransform(scrollYProgress, [0, visibilityIncrement * 5, visibilityIncrement * 6, 0.5, 1], [0, 0, 0, 5, 7]);

    return (
        <motion.section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-10">
                    <motion.div className="text-xl uppercase" style={{ scale: scaleHe }}>
                        He
                    </motion.div>
                    <motion.div className="text-xl uppercase" style={{ scale: scaleCan }}>
                        can
                    </motion.div>
                    <motion.div className="text-xl uppercase" style={{ scale: scaleBuild }}>
                        build
                    </motion.div>
                    <motion.div className="text-xl uppercase" style={{ scale: scaleYou }}>
                        you
                    </motion.div>
                    <motion.div className="text-xl uppercase" style={{ scale: scaleAny }}>
                        any
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};
