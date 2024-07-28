"use client";

import React from "react";
import CountUp from "react-countup";

type Props = {};

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 30,
    text: "Projects completed",
  },
  {
    num: 3,
    text: "Technologies mastered",
  },
  {
    num: 54,
    text: "Code commits",
  },
];

const Stats = (props: Props) => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0  ">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex items-center justify-center xl:justify-start gap-2"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-5xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
