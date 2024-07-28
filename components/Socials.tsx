import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaMailBulk, FaTwitter } from "react-icons/fa";

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Temitayo40/" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/adebowale-damilola/",
  },
  { icon: <FaMailBulk />, path: "https://damilolaadebowale88@gmail.com" },
  { icon: <FaTwitter />, path: "https://x.com/Dharmmycrown" },
];
const Socials = (props: Props) => {
  const { iconStyles, containerStyles } = props;
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
