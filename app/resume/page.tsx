"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About Me",
  description:
    "Let me tell you a little about myself. I'm a passionate frontend developer with expertise in HTML, CSS, JavaScript, React.js, and Next.js. Despite not having a formal background in tech during my BSc, my enthusiasm for technology drove me to dive into this field. I'm constantly eager to stay updated with the latest tech innovations and trends. I have hands-on experience working with RESTful APIs, Node.js, and MongoDB, and I'm skilled in state management. Whether working independently or as part of a team, I strive for excellence in performance optimization and code efficiency. Outside of work, I enjoy swimming, which helps me stay balanced and refreshed.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Adebowale Damilola",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 903 786 7574",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "damilolaadebowale88@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Proven track record in building scalable, responsive web applications, enhancing UI/UX, and implementing state management using react-query, redux, and Context API. Skilled in integrating RESTful APIs, working with Node.js and MongoDB, optimizing code for performance, and collaborating effectively with cross-functional teams, including designers and product managers.",

  items: [
    {
      company: "Rubies Technology",
      position: "Frontend Developer",
      duration: "2023",
    },
    {
      company: "Ingressive X Zuri Internship",
      position: "Frontend Developer",
      duration: "2023",
    },
    {
      company: "Teekay Tech",
      position: "Frontend Developer",
      duration: "2022 - 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Gained strong skills in HTML, CSS, JavaScript, React.js, and Next.js through coursework and projects. Experienced in working with RESTful APIs, Node.js, and MongoDB. Developed problem-solving and collaboration skills through group projects and internships.",

  items: [
    {
      Institution: "Online Course  Platform",
      degree: "Full stack web deveopment Bootcamp",
      duration: "2024",
    },
    {
      Institution: "Codeacademy",
      degree: "Frontend Track",
      duration: "2022",
    },
    {
      Institution: "Udemy course",
      degree: "Progrmming Course",
      duration: "2022 - present",
    },
    {
      Institution: "Tech Institute",
      degree: "certified web developer ",
      duration: "2022 - sumer",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Skilled frontend developer with expertise in HTML, CSS, JavaScript, React.js, and Next.js. Experienced in integrating backend services using RESTful APIs and Node.js, and proficient with MongoDB. Adept at state management with Redux and Context API, and focused on performance optimization and code efficiency. Strong collaborator with experience in cross-functional teamwork, mentoring junior developers, and effective communication.",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

type Props = {};

const Resume = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto cl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70px] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-yellow-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-yellow-400"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-yellow-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-yellow-400"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>{" "}
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {" "}
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-yellow-400 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
