import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center font-quicksand mt-[40px] "
    >
      <div className="flex justify-center items-center w-[75%] gap-4">
        <hr className="flex-1" />
        <h1 className="text-3xl font-extrabold">Experience</h1>
        <hr className="flex-1" />
      </div>

      <div className="flex flex-col  md:flex-row p-4 w-[75%] mt-2">
        <div className="p-5">
          <h1 className="text-nowrap text-2xl font-medium">
            Frontend Developer
          </h1>
          <p className="p-2">Iva Technos</p>
          <hr />
          <p className="p-2 text-nowrap">June 2023 - July 2023</p>
        </div>
        <div className="border-l-[1px] border-black mr-2 sm:hidden md:block"></div>
        <p className="lg:mt-4 lg:ml-4">
          Completed a front-end development internship where I gained hands-on
          experience in styling web pages using CSS and became comfortable with
          creating responsive layouts using Bootstrap. The internship also
          helped me improve my collaboration and communication skills by working
          closely with team members on real-world projects in a professional
          environment.
        </p>
      </div>
      <div className="flex flex-col md:flex-row p-4 w-[75%] mt-2">
        <div className="p-5 sndExp2">
          <span className="text-2xl font-medium text-nowrap">
            Software Developer
          </span>
          <p className="p-2">Workcohol</p>
          <hr />
          <p className="p-2 text-nowrap">January 2025 - March 2025</p>
        </div>
        <p className="lg:mt-4 mr-4">
          Worked on building a social community platform as part of a full-stack
          web development internship with Workcohol, Chennai. Developed
          responsive user interfaces using React, Next.js, and Tailwind CSS, and
          implemented backend functionality with Python, Django, SQL, and JWT.
          Also handled state management with Zustand and used GitHub for version
          control. This experience strengthened my technical skills, teamwork,
          and understanding of modern web development workflows.
        </p>
        <div className="border-l-[1px] border-black mr-2 sm:hidden md:block"></div>
        <div className="p-5 md:block sndExp">
          <h1 className="text-nowrap ml-2 text-2xl font-medium">
            Backend Developer
          </h1>
          <p className="p-2">Workcohol</p>
          <hr />
          <p className="p-2 text-nowrap">January 2025 - March 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
