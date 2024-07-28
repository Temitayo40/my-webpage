"use client";

import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
type Props = {};

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "With over 4 years of experience, I specialize in front-end development, focusing on creating user-friendly web interfaces using HTML, CSS, JavaScript, and popular frameworks like React and NextJS",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "With over 4 years of experience, I specialize in front-end development, focusing on creating user-friendly web interfaces using HTML, CSS, JavaScript, and popular frameworks like React and NextJS",
    href: "",
  },
  {
    num: "03",
    title: "Web Development",
    description:
      "With over 4 years of experience, I specialize in front-end development, focusing on creating user-friendly web interfaces using HTML, CSS, JavaScript, and popular frameworks like React and NextJS",
    href: "",
  },
  {
    num: "04",
    title: "Web Development",
    description:
      "With over 4 years of experience, I specialize in front-end development, focusing on creating user-friendly web interfaces using HTML, CSS, JavaScript, and popular frameworks like React and NextJS",
    href: "",
  },
];

const Services = (props: Props) => {
  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center 
  py-12 xl:py-0
  "
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-centergap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-yellow-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-400 transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-b-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
