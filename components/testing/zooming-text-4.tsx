import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const SectionFour = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const totalWords = 3; // Assuming the full sentence is split into seven words/phrases
    const visibilityIncrement = 0.5 / totalWords;

    const scaleJust = useTransform(scrollYProgress, [0, visibilityIncrement, 0.5, 1], [0.5, 1, 3, 6]);
    const scaleAnd = useTransform(scrollYProgress, [0, visibilityIncrement * 2, 0.5, 1], [0, 0.5, 3, 6]);
    const scaleEmail = useTransform(scrollYProgress, [0, visibilityIncrement * 3, 0.5, 1], [0, 0, 3, 6]);

    return (
        <motion.section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex items-center justify-center h-[70vh] overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-32">
                    <motion.div className="md:text-xl text-xs uppercase" style={{ scale: scaleJust }}>
                        bring deals or
                    </motion.div>
                    <motion.div className="md:text-xl text-xs uppercase" style={{ scale: scaleAnd }}>
                        contact me
                    </motion.div>
                    <motion.div className="md:text-xl text-xs uppercase" style={{ scale: scaleEmail }}>
                        on my email below
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};
