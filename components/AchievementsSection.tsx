"use client";
import React from "react";
import dynamic from "next/dynamic";
import { calculateDateDifferences } from "@/lib/date-difference";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);



const AchievementsSection = () => {
  const { days, totalMonths, weeks, years, yearsWithMonthsDecimal } = calculateDateDifferences("2022-11-22");
  console.log("years wihh deciaml", yearsWithMonthsDecimal);
  const achievementsList = [
    {
      metric: "Projects",
      value: "10",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Users",
      value: "100,000",
    },
    {
      metric: "Awards",
      value: "7",
    },
    {
      metric: "Months",
      value: `${totalMonths}`
    },
    {
      metric: "Years",
      value: `${yearsWithMonthsDecimal}`,
    },
  ];
  return (
    <div className="xl:gap-16 sm:py-16 xl:px-16 px-4 py-8">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="sm:my-0 flex flex-col items-center justify-center mx-4 my-4"
            >
              <h2 className="flex flex-row text-4xl font-bold text-white">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-4xl font-bold text-white"
                  //@ts-ignore
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
