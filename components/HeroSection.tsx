"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="sm:grid-cols-12 grid grid-cols-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center sm:text-left justify-self-start col-span-8 text-center"
        >
          <h1 className="sm:text-5xl lg:text-8xl lg:leading-normal mb-4 text-4xl font-extrabold text-white">
            <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jatique",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Link
              href="/#contact"
              className="sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 inline-block w-full px-6 py-3 mr-4 text-white rounded-full"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 inline-block w-full px-1 py-1 mt-3 text-white rounded-full"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center lg:mt-0 col-span-4 mt-4"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
