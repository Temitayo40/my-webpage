"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {Links?.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-yellow-400 border-b-2 border-yellow-400"
            } capitalize hover:text-yellow-400 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
