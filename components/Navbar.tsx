"use client";

import { navLinks } from "@/Data/data";
import { NavLink } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoGooglePlaystore, IoMailOpen } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const pathName = usePathname();

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 40,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    },
  };

  const isActive = (path: string) =>
    pathName === path ? "text-deep_blue" : "text-black";

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-20 w-full ${navBg && "bg-white"}`}
    >
      <motion.nav
        variants={navLinkVariants}
        initial="hidden"
        animate="visible"
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${showMenu && "hidden"}`}
      >
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-3xl text-black">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-auto w-auto object-cover"
            />
          </Link>
          <div className="hidden items-center justify-center space-x-6 md:flex">
            {navLinks.map((navLink: NavLink) => (
              <Link
                key={navLink.label}
                href={navLink.path}
                className={`text-sm font-medium uppercase ${isActive(navLink.path)}`}
              >
                {navLink.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <HiOutlineMenuAlt4
              className="size-6 cursor-pointer text-black"
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>
      </motion.nav>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={showMenu ? "visible" : "hidden"}
        className="fixed right-0 top-0 size-16 rounded-full bg-blue-200"
      />

      <AnimatePresence>
        {showMenu && (
          <div className="fixed inset-0 z-30 bg-blue-200">
            <motion.nav
              variants={navLinkVariants}
              initial="hidden"
              animate="visible"
              className="flex h-full flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className={`text-2xl font-medium uppercase ${isActive(link.path)}`}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-6 flex flex-row items-center justify-center gap-4">
                <Link href="https://www.googleplay" target="_blank">
                  <IoLogoGooglePlaystore className="cursor-pointer rounded-full bg-black p-2 text-4xl text-white" />
                </Link>
                <Link href="https://www.googleplay" target="_blank">
                  <IoMailOpen className="cursor-pointer rounded-full bg-black p-2 text-4xl text-white" />
                </Link>
              </div>

              <HiX
                className="absolute right-5 top-5 size-8 cursor-pointer text-black"
                onClick={() => setShowMenu(false)}
              />
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
