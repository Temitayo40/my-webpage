import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import React from "react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadButton from "@/components/DownloadButton";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-4 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-yellow-400">Adebowale Damilola</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Enthusiastic frontend developer with a keen eye for design and 4+
              years of experience in creating responsive, user-friendly web
              applications. Proficient in HTML, CSS, JavaScript, and modern
              frameworks like React.js and Next.js. Adept at collaborating with
              teams to deliver high-quality, scalable solutions.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton
                fileUrl={
                  "https://drive.google.com/file/d/1b5fzglRTSuhr9du2XfMmec2Jyw6GVU2a/view?usp=sharing"
                }
                fileName={"Dammy's-cv"}
              >
                <span className="flex gap-3">
                  Download CV
                  <FiDownload className="text-xl" />
                </span>
              </DownloadButton>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-yellow-400 rounded-full flex justify-center items-center text-yellow-400 text-base hover:bg-yellow-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-2 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
