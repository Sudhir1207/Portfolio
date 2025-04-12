import React from "react";

const MySkills = () => {
  return (
    <div
      id="Skills"
      className="min-h-screen flex flex-col justify-center items-center font-quicksand mt-5"
    >
      <div className="w-[70%] flex items-center gap-4">
        <hr className="flex-1" />
        <h1 className="text-3xl font-extrabold">My Skills</h1>
        <hr className="flex-1" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1">
        <div className="flex flex-col md:flex-row gap-8 mt-3 p-4">
          <img src="/html_logo.png" alt="" className="w-[70px] h-[70px]" />
          <img src="/css_logo.png" alt="" className="w-[55px] h-[70px]" />
          <img
            src="/JavaScript-logo.png"
            alt=""
            className="w-[60px] h-[60px] mt-2"
          />
          <img
            src="/tailwind-css2-removebg-preview.png"
            alt=""
            className="w-[70px] h-[70px]"
          />
          <img
            src="/Bootstrap_logo.svg.png"
            alt=""
            className="w-[80px] h-[70px]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-3 p-4">
          <img src="/React_icon.png" alt="" className="w-[64px] h-[60px]" />
          <img
            src="/node.js_full.png"
            alt=""
            className="w-[70px] h-[70px] object-contain"
          />
          <img src="/express-js.png" alt="" className="w-[70px] h-[70px]" />
          <img src="/django_rest.png" alt="" className="w-[70px] h-[70px]" />
          <img src="/mysql.png" alt="" className="w-[70px] h-[70px]" />
        </div>
        <div className="flex flex-col md:flex-row gap-9 mt-3 p-4 justify-center items-center">
          <img src="/github_logo.png" alt="" className="w-[65px] h-[65px]" />
          <img src="/java.png" alt="" className="w-[42px] h-[70px]" />
          <img src="/cpp.png" alt="" className="w-[55px] h-[65px]" />
          <img src="/python.svg" alt="" className="w-[55px] h-[65px]" />
          <img src="/mongodb.svg" alt="" className="w-[55px] h-[65px]" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
