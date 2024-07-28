"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

type Props = {};

const projects = [
  {
    num: "01",
    category: "frontend Project",
    title: "wild Oasis",
    description:
      "The app features a table view for cabins, bookings, and guest data. Users can manage cabins, bookings, and breakfast options. The dashboard shows data from the past 7–30 days, including check-ins and check-outs. Configurable settings and a dark mode option are available.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "React js" },
      { name: "Tailwind css" },
      { name: "Supabase" },
    ],
    image: "/assets/work/wildnew.PNG",
    live: "https://free-realm-wildoasis.netlify.app/login",
    github: "https://github.com/Temitayo40/Wild-Oasis",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    description:
      "Our user-friendly web app simplifies pizza ordering with easy input of names, phone numbers, and addresses, ensuring efficient delivery and hassle-free payment.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "React js" },
      { name: "Tailwind css" },
    ],
    image: "/assets/work/buynew.PNG",
    live: "https://fast-pizza-free-realm.netlify.app/",
    github: "•https://github.com/Temitayo40/Fast-Pizza/",
  },
  {
    num: "03",
    category: "frontend",
    title: "Evo Gym",
    description:
      "EVOgym is a responsive single-page website built with Vite, TypeScript, and Tailwind CSS. It showcases a gym's services with modern design elements, including an overview, fitness classes, and a contact form. The site is optimized for a seamless experience across devices.",
    stack: [
      { name: "React js" },
      { name: "Tailwind css" },
      { name: "Next js" },
      { name: "Typescript js" },
    ],
    image: "/assets/work/enonew.PNG",
    live: "https://free-realm-evogym.netlify.app/",
    github: "https://github.com/Temitayo40/Evogym",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    description:
      "Our user-friendly web app simplifies pizza ordering, letting users easily input their names, phone numbers, and addresses for efficient delivery and hassle-free payment.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/freenew.PNG",
    live: "https://ominifood-free-realm.netlify.app/",
    github: "https://github.com/Temitayo40/OminiFood-",
  },
];

const Work = (props: Props) => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* ouline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-400 transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-yellow-400" key={index}>
                      {item.name}
                      {/* remove rhe last comma*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/*  btns */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-yellow-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-yellow-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="projects images"
                          sizes="object-fit"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slide botton */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-yellow-400 hover:bg-yellow-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
