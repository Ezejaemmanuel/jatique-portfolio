"use client";
import React, { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

// Props interface for the SmoothScrollWrapper component
interface SmoothScrollWrapperProps {
    children: ReactNode;
}

// The SmoothScrollWrapper component
const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
    useEffect(() => {

        const lenis = new Lenis({
        })



        function raf(time: number) {

            lenis.raf(time)

            requestAnimationFrame(raf)

        }



        requestAnimationFrame(raf)

    })


    return <>{children}</>;
};

export default SmoothScrollWrapper;
