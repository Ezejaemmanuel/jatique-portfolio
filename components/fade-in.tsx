
"use client";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, FC, ReactNode } from "react";

// Define a type for the transition types
export type TransitionType = "spring" | "linear" | "anticipate" | "inertia" | "stiffSpring" | "easeOutExpo" | "tween";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    directionx?: "right" | "left";
    directiony?: "up" | "down";
    viewOnce?: boolean;
    duration?: number;
    distance?: number;
    className?: string;
    key_?: string;
    transitionType?: TransitionType; // Use the TransitionType here
}

const transitionVariants = {
    tween: {
        duration: 0.5,
        type: "tween",
        ease: [0.25, 0.25, 0.25, 0.75],
    },
    spring: {
        type: "spring",
        stiffness: 100,
        damping: 10,
    },
    linear: {
        type: "tween",
        ease: "linear",
    },
    anticipate: {
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
    },
    inertia: {
        type: "inertia",
        velocity: 50,
        power: 0.2,
        timeConstant: 700,
    },
    stiffSpring: {
        type: "spring",
        stiffness: 300,
        damping: 20,
    },
    easeOutExpo: {
        type: "tween",
        ease: [0.19, 1, 0.22, 1],
    },
};

const FadeIn: FC<FadeInProps> = ({
    children,
    delay = 0,
    directionx,
    directiony,
    viewOnce = false,
    duration = 0.5,
    distance = 30,
    className,
    key_,
    transitionType = "tween", // Default transition type
}) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: viewOnce });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Determine the transition based on the transitionType prop
    const transition = { ...transitionVariants[transitionType], duration, delay };

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        x: directionx === "right" ? -distance : directionx === "left" ? distance : 0,
                        y: directiony === "up" ? distance : directiony === "down" ? -distance : 0,
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate={controls}
                transition={transition}
            >
                <AnimatePresence mode="wait">
                    <motion.div key={key_} className={className}>
                        {children}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default FadeIn;
