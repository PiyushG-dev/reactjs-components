"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Button } from "./ui/button";
import Logo from "./illustrations/logo";
import BurgerMenu from "./illustrations/burgerMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div>
      <div className="flex items-center justify-between bg-primary px-32 screen-inner-width xl:px-12 lg:px-6 xs:px-3">
        <div>
          <Logo />
        </div>
        <ul className="flex gap-10 lg:hidden">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`font-Marcellus text-secondary  ${
                  pathname === link.path ? "active-link" : null
                }`}
              >
                <Link href={link.path}>{link.link}</Link>
              </li>
            );
          })}
        </ul>
        <div className="lg:flex lg:items-center lg:gap-5">
          <Button asChild>
            <Link href="/contact">Plan a wedding</Link>
          </Button>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
