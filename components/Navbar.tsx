"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const [left, setLeft] = useState("left-[-100%]");
  const handleClick = () => {
    if (left === "left-[-100%]") {
      setLeft("left-0");
    } else {
      setLeft("left-[-100%]");
    }
  };
  const closeMenu = () => {
    setLeft("left-[-100%]");
  };
  const { data: session } = useSession(); //get session data
  return (
    <>
      {session ? (
        <header className="bg-slate-800 py-3">
          <nav className="flex justify-between items-center sm:px-10 px-5">
            <div className="logo flex  items-center gap-3">
              <Image
                src="/images/logo3.png"
                alt="logo"
                width={500}
                height={500}
                className="sm:w-[3rem] xs:w-[2.5rem] w-[1.5rem] sm:h-[3rem] xs:h-[2.5rem] h-[1.5rem]"
              />
              <h1 className="font-bold lg:text-[1.5rem] xs:text-[1.3rem] text-[1rem] text-[#1a8aca] cursor-pointer">
                Code & Connect{" "}
              </h1>
            </div>
            <div
              className="md:hidden block cursor-pointer"
              onClick={handleClick}
            >
              <Image
                src="/images/menubar.webp"
                alt="menubar"
                width={500}
                height={500}
                className="xs:w-[2rem] w-[1.5rem] xs:h-[2rem] h-[1.5rem]"
              />
            </div>
            <ul className="md:flex items-center lg:space-x-10 space-x-5 text-[#1f8ed7] hidden">
              <li className="hover:text-white lg:text-[1rem] text-[0.9rem] duration-700">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-white lg:text-[1rem] text-[0.9rem] duration-700">
                <Link href="/">About</Link>
              </li>
              <li className="hover:text-white lg:text-[01rem text-[0.9rem] duration-700">
                <Link href="/">Services</Link>
              </li>
              <li className="hover:text-white lg:text-[1rem] text-[0.9rem] duration-700">
                <Link href="/">Classes</Link>
              </li>
            </ul>
            {/* mob nav  */}

            <ul
              className={`md:hidden  items-center space-y-8 h-screen w-full text-[#1f8ed7] block absolute xs:top-[4rem] top-[3rem] ${left}   text-center bg-slate-800 p-5 duration-500`}
            >
              <li className="hover:text-white lg:text-[1rem] text-[0.9rem] duration-700">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-white lg:text-[1rem] text-[0.9rem] duration-700">
                <Link href="/">About</Link>
              </li>
              <li className="hover:text-white lg:text-[01rem text-[0.9rem] duration-700">
                <Link href="/">Services</Link>
              </li>
              <li className="hover:text-white lg:text-[1rem] text-[0.9rem] duration-700">
                <Link href="/">Classes</Link>
              </li>
              <div className="md:hidden block">
                <button
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                  className="lg:py-2 py-1  lg:px-5 px-3 border border-[#1f8ed7] hover:border-white hover:text-white duration-500 text-[#1f8ed7] text-[0.8rem] lg:text-[0.9rem] font-semibold lg:rounded-lg rounded-md cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            </ul>
            <div className="md:block hidden">
              <button
                onClick={() => signOut()}
                className="lg:py-2 py-1  lg:px-5 px-3 border border-[#1f8ed7] hover:border-white hover:text-white duration-500 text-[#1f8ed7] text-[0.8rem] lg:text-[0.9rem] font-semibold lg:rounded-lg rounded-md cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </nav>
        </header>
      ) : (
        <header className="bg-slate-800 py-3">
          <nav className="flex justify-between items-center sm:px-10 px-5">
            <div className="logo flex  items-center gap-3">
              <Image
                src="/images/logo3.png"
                alt="logo"
                width={500}
                height={500}
                className="xs:w-[2rem] w-[1.5rem] xs:h-[2rem] h-[1.5rem]"
              />
              <h1 className="font-bold lg:text-[1.5rem] xs:text-[1.3rem] text-[1rem] text-[#1a8aca] cursor-pointer">
                Code & Connect{" "}
              </h1>
            </div>

            <div>
              <button
                onClick={() => signIn("github")}
                className="lg:py-2 py-1  lg:px-5 px-3 border border-[#1f8ed7] hover:border-white hover:text-white duration-500 text-[#1f8ed7] text-[0.8rem] lg:text-[0.9rem] font-semibold lg:rounded-lg rounded-md cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;
