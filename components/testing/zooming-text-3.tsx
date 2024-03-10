import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const SectionThree = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const totalWords = 3; // Assuming "website or app" counts as three words
  const visibilityIncrement = 0.5 / totalWords;

  const scaleWebsite = useTransform(scrollYProgress, [0, visibilityIncrement, 0.5, 1], [0, 2, 4, 6]);
  const scaleOr = useTransform(scrollYProgress, [0, visibilityIncrement * 2, 0.5, 1], [0, 0, 3, 7]);
  const scaleApp = useTransform(scrollYProgress, [0, visibilityIncrement * 2.2, 0.5, 1], [0, 0, 3, 7]);

  return (
    <motion.section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-20">
          <motion.div className="text-xl uppercase" style={{ scale: scaleWebsite }}>
            website
          </motion.div>
          <motion.div className="text-xl uppercase" style={{ scale: scaleOr }}>
            or
          </motion.div>
          <motion.div className="text-xl uppercase" style={{ scale: scaleApp }}>
            app
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
