'use client';
import { useScroll } from 'framer-motion';
import Card from './my-project-card';
import { projects } from './my-project-data';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
export default function MyProjects() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start start', 'end end']

    })
    useEffect(() => {

        const lenis = new Lenis()



        function raf(time: number) {

            lenis.raf(time)

            requestAnimationFrame(raf)

        }



        requestAnimationFrame(raf)

    })
    return (
        <main className="md:mt-[50vh] md:mb-[50vh]  mb-[10vh]" ref={container} >
            <h2 className="md:mb-12 mt-4 mb-8 text-4xl font-bold text-center text-white">
                My Projects
            </h2>
            {
                projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);

                    return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                })
            }
        </main>
    )
}