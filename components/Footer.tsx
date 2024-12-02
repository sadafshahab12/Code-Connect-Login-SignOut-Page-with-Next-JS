"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
    const route = useRouter();
  return (
    <>
      <footer className="sm:p-5 p-3 sm:bg-gradient-to-t bg-gradient-to-br from-slate-950 to-[#1a8aca] ">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:justify-items-center  justify-start items-center ">
          <div className="left sm:space-y-4 space-y-2 text-white">
            <h1 className="sm:text-[1.25rem] text-[1rem] font-bold">Code and Connect</h1>
            <div>
              <h3 className="sm:text-lg text-[0.9rem] ">Developed By!</h3>
              <h1 className="sm:text-[2rem] text-[1.5rem] font-bold">Sadaf Shahab</h1>
            </div>
          </div>
    
          <div className="space-y-4 text-white ">
            <h1 className="sm:text-xl text-[0.9rem] font-semibold">Contact Me</h1>
            <div>
              <button className="bg-slate-800 text-white sm:py-2 py-1 sm:px-5 px-3 rounded-md cursor-pointer sm:text-lg text-[0.9rem] " onClick={()=> route.push("https://github.com/sadafshahab12")}>
                Visit My GitHub
              </button>
            </div>
            <div>
              <button className="bg-slate-800 text-white sm:py-2 py-1 sm:px-5 px-3 rounded-md cursor-pointer sm:text-lg text-[0.9rem]" onClick={()=> route.push("https://www.linkedin.com/in/sadaf-shahab-ssr123")}>
                Visit My Linkedin Profile
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
