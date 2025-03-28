import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto w-[95%] sticky top-0 z-50">
      <div className="m-5 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="w-20 cursor-pointer">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/10/Fight-Club-Logo.jpg"
              alt="Logo"
            />
          </div>
          <button onClick={() => setIsOpen(!IsOpen)} className="md:hidden ml-4">
            {IsOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className={`mr-3  ${IsOpen ? "block " : "hidden"} md:block`}>
          <ul
            className={`w-full gap-4 py-6 text-center md:flex md:w-auto md:items-center`}
          >
            <li className="mx-2 my-6 rounded p-3 transition duration-300 hover:shadow-md shadow-slate-500/50 hover:ring md:hover:scale-105  flex-shrink-0">
              About
            </li>
            <li className="mx-2 my-6 rounded p-3 transition duration-300 hover:shadow-md  shadow-slate-500/50 hover:ring  md:hover:scale-105 flex-shrink-0 ">
              Experience
            </li>
            <li className="mx-2 my-6 rounded p-3 transition duration-300 hover:shadow-md  shadow-slate-500/50 hover:ring md:hover:scale-105 flex-shrink-0 ">
              Project
            </li>
            <li className="mx-2 my-6 rounded p-3 transition duration-300 hover:shadow-md  shadow-slate-500/50 hover:ring  md:hover:scale-105 flex-shrink-0 ">
              Contact
            </li>
            <li className="md:ml-6"></li>
          </ul>
        </div>
        <div
          className={`flex flex-shrink-0 gap-4 items-center justify-center ${
            IsOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <button className="rounded border border-[#C4C4C4] p-2 transition duration-300 hover:border-slate-950">
            Resume
          </button>
          <button className="rounded border border-[#C4C4C4] p-2 transition duration-300 hover:border-slate-950">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
