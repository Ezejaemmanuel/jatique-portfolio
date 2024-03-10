// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//     words,
//     className,
// }: {
//     words: string;
//     className?: string;
// }) => {
//     const [scope, animate] = useAnimate();
//     let wordsArray = words.split(" ");
//     useEffect(() => {
//         animate(
//             "span",
//             {
//                 opacity: 1,
//             },
//             {
//                 duration: 2,
//                 delay: stagger(0.2),
//             }
//         );
//     }, [scope.current]);

//     const renderWords = () => {
//         return (
//             <motion.div ref={scope}>
//                 {wordsArray.map((word, idx) => {
//                     return (
//                         <motion.span
//                             key={word + idx}
//                             className={cn("opacity-0", className)}
//                         >
//                             {word}{" "}
//                         </motion.span>
//                     );
//                 })}
//             </motion.div>
//         );
//     };

//     return <div>{renderWords()}</div>;
// };



// Ensure you have installed react-intersection-observer
// npm install react-intersection-observer
// Ensure you have installed react-intersection-observer
// npm install react-intersection-observer

// "use client";
// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//     words,
//     className,
// }: {
//     words: string;
//     className?: string;
// }) => {
//     const controls = useAnimation();
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.5,
//     });

//     useEffect(() => {
//         if (inView) {
//             controls.start(i => ({
//                 opacity: 1,
//                 transition: { delay: i * 0.2, duration: 2 }, // Reintroducing stagger effect with duration
//             }));
//         }
//     }, [controls, inView]);

//     let wordsArray = words.split(" ");

//     const renderWords = () => {
//         return (
//             <motion.div ref={ref}>
//                 {wordsArray.map((word, idx) => {
//                     return (
//                         <motion.span
//                             key={word + idx}
//                             custom={idx} // Using index as custom value for stagger delay
//                             initial={{ opacity: 0 }}
//                             animate={controls}
//                             className={cn("opacity-0", className)}
//                         >
//                             {word}{" "}
//                         </motion.span>
//                     );
//                 })}
//             </motion.div>
//         );
//     };

//     return <div>{renderWords()}</div>;
// };


"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    delay, // Adding the optional delayed prop
}: {
    words: string;
    className?: string;
    delay?: number; // This should be in milliseconds
}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            const startAnimation = () => {
                controls.start(i => ({
                    opacity: 1,
                    transition: { delay: i * 0.2, duration: 2 },
                }));
            };

            // If delayed prop is provided, delay the animation start
            if (delay) {
                setTimeout(startAnimation, delay);
            } else {
                startAnimation();
            }
        }
    }, [controls, inView, delay]); // Include delayed in the dependency array

    let wordsArray = words.split(" ");

    const renderWords = () => {
        return (
            <motion.div ref={ref}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            custom={idx} // Using index as custom value for stagger delay
                            initial={{ opacity: 0 }}
                            animate={controls}
                            className={cn("opacity-0", className)}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return <div>{renderWords()}</div>;
};
