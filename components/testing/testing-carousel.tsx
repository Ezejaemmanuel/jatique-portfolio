"use client";
import React, { useState, useEffect } from 'react';
//@ts-ignore
import { useSpringCarousel } from 'react-spring-carousel';

interface ListItem {
    id: number;
    title: string;
    image: string;
    desc: string;
}

const List = [
    {
        id: 1,
        title: 'Dracaena Trifasciata',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/4.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 2,
        title: 'Crassula Ovata',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/3.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 3,
        title: 'Browningia Hertlingiana',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/1.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 4,
        title: 'Haworthiopsis Attenuata ',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/5.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 5,
        title: 'Chlorophytum Comosum',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/2.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 6,
        title: 'Dracaena Trifasciata',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/4.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 7,
        title: 'Crassula Ovata',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/3.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 8,
        title: 'Browningia Hertlingiana',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/1.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
    {
        id: 9,
        title: 'Haworthiopsis Attenuata ',
        image:
            'https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/5.png',
        desc: 'One of the most effective houseplants in air purification.',
    },
];

export const Carousel: React.FC = () => {
    const [active, setActive] = useState<number>(1);
    const [noOfItem, setNoOfItem] = useState<number>(6);

    const handleSize = (innerWidth: number) => {
        if (innerWidth < 599) {
            return setNoOfItem(3);
        }
        if (innerWidth < 899) {
            return setNoOfItem(3);
        }
        if (innerWidth < 1199) {
            return setNoOfItem(4);
        }
        return setNoOfItem(6);
    };

    useEffect(() => {
        const resizeListener = (e: UIEvent) => handleSize((e.target as Window).innerWidth);
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    const {
        slideToNextItem,
        slideToPrevItem,
        carouselFragment,
        useListenToCustomEvent,
    } = useSpringCarousel({
        itemsPerSlide: noOfItem,
        gutter: 20,
        withLoop: true,
        startEndGutter: 100,
        items: List.map((item) => ({
            id: item.id.toString(),
            renderItem: (
                <div className={`relative flex items-center justify-center transition-all duration-300 ease-in-out transform ${item.id === active ? 'scale-125' : 'scale-90'}`}>
                    <div className="absolute bottom-0 right-0 bg-[#e8f0ef] h-4/5 w-full rounded-lg shadow-lg"></div>
                    <img src={item.image} alt="" className={`absolute bottom-[-10px] left-0 select-none transition-all duration-300 ease-in-out transform ${item.id === active ? 'scale-125 -translate-y-10' : 'scale-100 translate-y-0'}`} draggable={false} />
                    <div className={`absolute right-5 bottom-1/5 flex flex-col w-4/5 select-none ${item.id === active ? 'block' : 'hidden'}`}>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="text-sm">{item.desc}</div>
                    </div>
                </div>
            ),
        })),
    });

    useListenToCustomEvent((event: { eventName: string; nextItem: { index: number; }; }) => {
        if (event.eventName === 'onSlideStartChange') {
            setActive(event.nextItem.index + 1);
        }
    });

    const onSliderHandle = (e: React.WheelEvent<HTMLDivElement>) => {
        if (e.deltaY > 0) {
            slideToNextItem();
        } else {
            slideToPrevItem();
        }
    };

    return (
        <div className="h-screen w-screen m-auto box-border flex flex-col justify-start items-center bg-[#d9e5e4] overflow-hidden">
            <div className="h-15 flex justify-end w-full">
                <div className="flex items-center w-3/4 h-full">
                    {/* Replace these divs with your navigation component */}
                    <div className="m-4 p-4 text-[#1a2e35] whitespace-nowrap hover:cursor-pointer hover:text-[#5e9270]">Home</div>
                    {/* Add more navigation options here */}
                </div>
            </div>
            <div className="flex justify-end w-full pt-24">
                <div className="w-3/4 h-full">
                    <div className="text-[#5e9270] text-2xl">Go Green</div>
                    <div className="mb-7 flex items-center w-full p-8">
                        <div className="text-[#1a2e35] font-semibold text-6xl w-1/3 mr-10 leading-tight">The world of plants</div>
                        <div className="w-1/3 p-2.5 text-base">Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</div>
                    </div>
                    <div>Our Favourite this week</div>
                </div>
            </div>
            <div className="h-88 flex items-center justify-center w-full">
                <div className="w-full h-full" onWheel={onSliderHandle}>
                    {carouselFragment}
                </div>
            </div>
        </div>
    );
};

