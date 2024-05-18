"use client";
import React, { useEffect } from "react";
import Logo from "./illustrations/logo";
import Close from "./illustrations/close";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "translate-y-[-100%]"
      }  transition-transform duration-300 ease-in-out delay-100 fixed bg-tertiary top-0 bottom-0 left-0 right-0 z-20 lg:px-6 xs:px-3 flex flex-col gap-14`}
    >
      <div className="flex justify-between">
        <Logo />
        <Close isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div>
        <ul className="flex gap-10 flex-col px-6 xs:px-3">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`font-Marcellus text-primary text-5xl w-fit sm:text-4xl  ${
                  pathname === link.path ? "active-link-mobile" : null
                }`}
              >
                <Link href={link.path}>{link.link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
