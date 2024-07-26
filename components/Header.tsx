import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Damilola<span className="text-yellow-400">.</span>
          </h1>
        </Link>

        {/* Dextop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile view */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;