// Import necessary icons from react-icons and lucide-react
"use client";
import { FiChrome, FiDatabase, FiLayers, FiCode, FiFeather, FiSmartphone } from 'react-icons/fi';
import { SiPython, SiNextdotjs, SiFastapi, SiExpress, SiReact, SiStyledcomponents, SiTypescript, SiTailwindcss, SiSass, SiReactrouter, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiPrisma, SiFramer, SiHtml5, SiCss3, SiJavascript, SiFlask, SiThreedotjs, SiExpo, SiTrpc, SiMui, SiReactquery, SiRedux } from 'react-icons/si';
import { LucideComponent, LucideText, LucideWind } from 'lucide-react';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";
import FadeIn from './fade-in';
import React, { useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
// Define the data structure for your skills
interface Skill {
    label: string;
    percentage: number; // Changed to number for sorting
    Icon: React.ElementType; // This allows us to specify a React component as a type
}

// Define your skills data with more skills and correct icons
const skills: Skill[] = [
    { label: 'HTML', percentage: 97, Icon: SiHtml5 },
    { label: 'CSS', percentage: 70, Icon: SiCss3 },
    { label: 'JavaScript', percentage: 90, Icon: SiJavascript },
    { label: 'React', percentage: 93, Icon: SiReact },
    { label: 'Next.js', percentage: 95, Icon: SiNextdotjs },
    { label: 'Node.js', percentage: 85, Icon: FaNodeJs },
    { label: 'Express.js', percentage: 85, Icon: SiExpress }, // Placeholder icon
    { label: 'Python', percentage: 80, Icon: SiPython },
    { label: 'FastAPI', percentage: 80, Icon: SiFastapi }, // Placeholder icon
    { label: 'Flask', percentage: 60, Icon: SiFlask }, // Placeholder icon
    { label: 'Redis', percentage: 91, Icon: SiRedis },
    { label: 'PostgreSQL', percentage: 89, Icon: SiPostgresql },
    { label: 'MySQL', percentage: 83, Icon: SiMysql },
    { label: 'Prisma', percentage: 92, Icon: SiPrisma },
    { label: 'React Three Fiber', percentage: 60, Icon: SiThreedotjs }, // Placeholder icon
    { label: 'Framer Motion', percentage: 83, Icon: SiFramer },
    { label: 'MongoDB', percentage: 78, Icon: SiMongodb },
    { label: 'TypeScript', percentage: 90, Icon: SiTypescript },
    { label: 'Tailwind CSS', percentage: 91, Icon: SiTailwindcss },
    { label: 'Sass', percentage: 70, Icon: SiSass },
    { label: 'Styled Components', percentage: 65, Icon: SiStyledcomponents },
    { label: 'React Native', percentage: 80, Icon: TbBrandReactNative }, // Placeholder icon
    { label: 'Expo', percentage: 83, Icon: SiExpo }, // Placeholder icon
    { label: 'Trpc', percentage: 86, Icon: SiTrpc }, // Placeholder icon
    { label: 'MUI', percentage: 60, Icon: SiMui }, // Placeholder icon
    { label: 'React Query', percentage: 87, Icon: SiReactquery }, // Placeholder icon
    { label: 'Redux', percentage: 75, Icon: SiRedux }, // Placeholder icon



];

// Sort skills by percentage in descending order
skills.sort((a, b) => b.percentage - a.percentage);

// The modified component
const SkillsComponent: React.FC = () => {
    const [scope, animate] = useAnimate();
    // Use Set<number> to explicitly declare the type of animatedIndices
    const animatedIndices = useRef<Set<number>>(new Set()).current;
    useEffect(() => {
        const animateSkills = async () => {
            for (let i = 0; i < skills.length; i++) {
                // Animate the current skill sequentially to change background and text color
                await animate(`.skill-${i}`, { backgroundColor: '#fff', color: '#000' }, { duration: 0.5 });

                // Revert the skill to its original styling
                await animate(`.skill-${i}`, { backgroundColor: 'initial', color: 'initial' }, { duration: 0.5 });

                // Ensure we pick a random skill index that hasn't been scaled up yet
                let randomSkillIndex: number;
                do {
                    randomSkillIndex = Math.floor(Math.random() * skills.length);
                } while (animatedIndices.has(randomSkillIndex));
                animatedIndices.add(randomSkillIndex);

                // Animate the randomly selected skill to scale up
                await animate(`.skill-${randomSkillIndex}`, { scale: 1.2 }, { duration: 0.5 }).then(() => {
                    // Reset the scale back to 1 for the randomly scaled skill
                    animate(`.skill-${randomSkillIndex}`, { scale: 1 }, { duration: 0.5 });
                });
            }
        };

        animateSkills();
    }, [animate, animatedIndices]);

    return (
        <>
            <h2 id='stacks' className="md:mb-12 mt-4 mb-8 text-4xl font-bold text-center text-white">
                My Stacks
            </h2>
            <div ref={scope} className="rounded-xl dark:border-gray-800 md:gap-4 md:p-4 flex flex-wrap w-full gap-1 p-2 border">
                {skills.map((skill, index) => (
                    <React.Fragment key={index}>
                        <FadeIn className={`skill-${index} rounded-full`} key_={`${index}`} delay={index * 0.2} duration={1} directiony='up' distance={20}>

                            <div key={skill.label} className="bg-gray-950 flex flex-col items-center gap-4 rounded-full">
                                <div className=" md:gap-4 flex items-center gap-2 p-2">
                                    <skill.Icon className="md:w-8 md:h-8 w-4 h-4 fill-current" />
                                    <span className=" text-xxs md:text-xs font-medium text-gray-400">{skill.label}</span>
                                    <span className=" md:text-sm text-xs font-medium text-gray-400 bg-black rounded-full">{skill.percentage}%</span>
                                </div>
                            </div>
                        </FadeIn>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default SkillsComponent;



