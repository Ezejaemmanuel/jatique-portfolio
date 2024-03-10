// import Arrow from "../assets/svg/Arrow";
"use client";
import { GradientLight } from "./design/Benefits";
import ClipPath from "./assets/svg/ClipPath";
import Arrow from "./assets/svg/Arrow";
import Heading from "./components/Heading";
import Section from "./components/Section";
import { MailQuestion, TrendingUp, Globe, Lamp, Repeat, BarChart2 } from 'lucide-react';
import ImageS from "../../public/images/hero-image.png"
export const benefits = [
    {
        id: "0",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "../../public/images/hero-image.png",
        IconComponent: MailQuestion,
        imageUrl: "../../public/images/hero-image.png",
    },
    {
        id: "1",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "../../public/images/hero-image.png",
        IconComponent: TrendingUp,
        imageUrl: "../../public/images/hero-image.png",
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "../assets/benefits/card-3.svg",
        IconComponent: Globe,
        imageUrl: "../../public/images/hero-image.png",
    },
    {
        id: "3",
        title: "Fast responding",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "../../public/images/hero-image.png",
        IconComponent: Lamp,
        imageUrl: "../../public/images/hero-image.png",
        light: true,
    },
    {
        id: "4",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "../../public/images/hero-image.png",
        IconComponent: Repeat,
        imageUrl: "../../public/images/hero-image.png",
    },
    {
        id: "5",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "../../public/images/hero-image.png",
        IconComponent: BarChart2,
        imageUrl: "../../public/images/hero-image.png",
    },
];

export const Benefits = () => {
    return (
        <Section id="features">
            <div className="z-2 container relative">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat Smarter, Not Harder with Brainwave"
                />

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={item.id}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 text-n-3 mb-6">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <item.IconComponent size={48} aria-label={item.title} />

                                    <p className="font-code text-n-1 ml-auto text-xs font-bold tracking-wider uppercase">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <div
                                className="absolute inset-0.5 bg-n-8"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="hover:opacity-10 absolute inset-0 transition-opacity opacity-0">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                </div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};


