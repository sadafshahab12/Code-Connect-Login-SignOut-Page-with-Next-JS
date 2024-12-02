"use client";
import { signIn } from "next-auth/react"; //client side
import Image from "next/image";
export default function SignInPage() {
  return (
    <>
      <section className="bg-[url('/images/bg4.webp')]  bg-no-repeat bg-cover flex sm:flex-row flex-col sm:justify-center py-10 lg:px-10 px-5  gap-5 items-center">
        <div className="left justify-items-center w-full sm:block hidden ">
          <div className=" w-[18rem] h-[20rem] md:w-[20rem] lg:w-[25rem] md:h-[20rem] lg:h-[25rem] ">
            <Image
              src="/images/login bg.avif"
              alt="logo"
              width={500}
              height={500}
              className=" w-full h-full rounded-lg  object-cover"
            />
          </div>

          <div className="mt-5 ">
            <p className="md:text-[0.9rem] text-[0.8rem] text-center text-gray-600 sm:block hidden ">
              This code connects the sign-in and sign-up pages, allowing users
              to easily switch between logging into an existing account and
              creating a new one, ensuring a seamless authentication experience.
            </p>
          </div>
        </div>
        <div className="right w-full">
          <div className=" py-5 lg:px-10 px-5 backdrop-blur-xl shadow-md  md:rounded-[2rem] rounded-[1.5rem]">
            <h1 className="md:text-2xl xs:text-[1.25rem] text-[1.1rem]  font-bold text-center">
              Welcome to{" "}
              <p className="text-[#290ef4] md:text-3xl xs:text-[1.5rem] text-[1.3rem]">
                Code and Connect
              </p>
            </h1>
            <div className="xs:mt-5 mt-2 ">
              <p className="xs:text-[0.9rem] text-[0.8rem] text-center text-gray-600 sm:hidden block">
                This code connects sign-in and sign-up pages, allowing users to
                easily log in or create a new account.
              </p>
            </div>
            <p className="md:text-xl xs:text-[1rem] text-[0.8rem] mb-8 text-center text-[#02a8d4] bg-slate-800 p-2 rounded-full mt-3 ">
              Secure Your Account Today
            </p>
            <div className="text-center space-y-2 ">
              <h1 className="xs:text-sm text-[0.7rem] text-left ml-5">
                Sign in to Your Account
              </h1>
              <form action="/" className="xs:space-y-4 space-y-3">
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    className=" md:py-4 xs:py-3 py-2 px-5 w-full text-[0.75rem] xs:text-sm placeholder:text-slate-500 rounded-full backdrop-blur-xl bg-white/30 outline-none border border-indigo-300 focus:border-[#02a8d4] duration-500   "
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="md:py-4 xs:py-3 py-2 px-5 w-full text-[0.75rem] xs:text-sm placeholder:text-slate-500 rounded-full backdrop-blur-xl bg-white/30 outline-none border border-indigo-300 focus:border-[#02a8d4] duration-500"
                  />
                </div>
                <div className="btn">
                  <button className="bg-gradient-to-r from-purple-400 to-blue-500 md:py-4 xs:py-3 py-2 px-10 rounded-full cursor-pointer w-full mb-4 text-[0.8rem] xs:text-[1rem]">
                    Sign In
                  </button>
                  <div className="font-bold"> OR </div>
                </div>
              </form>
              <button
                className="bg-black text-white md:py-3 py-2 px-8 rounded-lg cursor-pointer xs:text-[1rem] text-[0.8rem]"
                onClick={() => signIn("github")}
              >
                Signin with GitHub
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
