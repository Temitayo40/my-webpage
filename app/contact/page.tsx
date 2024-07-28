"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { link } from "fs";

type Props = {};

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234)90 3876 7574",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "damilolaadebowale88@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Address",
    description: "Available",
  },
];

const Contact = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54px] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-yellow-400">
                Let&rsquo;s work togther
              </h3>
              <p className="text-white/60">
                How about this: Let&apos;s work together to bring your vision to
                life. Contact us to start your project today!
              </p>
              {/* imputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    {/* <SelectItem value="cdt">Ui/UX Desgin</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*  */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* btn */}
              <Button size="sm" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-yellow-400 rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
