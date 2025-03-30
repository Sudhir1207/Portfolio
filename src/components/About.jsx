import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center font-quicksand space-y-8 bg-[#F2F2F2] md:translate-y-2 scr"
    >
      <div className="flex items-center w-[65%] gap-2">
        <hr className="flex-1" />
        <h1 className="text-3xl font-bold px-2">About Me</h1>
        <hr className="flex-1" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <p className="abtPar mb-3 text-center max-w-xl p-[22px]">
          Hi! I’m Sudhir, an aspiring web developer with a passion for creating
          interactive and user-friendly web applications. I’m constantly
          exploring new technologies and honing my skills to build efficient,
          scalable, and visually appealing solutions. I enjoy working with
          modern frameworks and libraries, especially when it comes to building
          responsive and dynamic interfaces. My goal is to continuously grow as
          a developer and contribute to innovative web experiences. When I’m not
          coding, you can find me exploring new movies, keeping up with the
          latest in tech, or brainstorming creative ideas.
        </p>
        <img
          src="\img2.jpg"
          alt=""
          className="w-[150px] h-[150px] sm:mt-2 md:mt-0 rounded-full abtImg object-cover"
        />
      </div>
    </div>
  );
};

export default About;
