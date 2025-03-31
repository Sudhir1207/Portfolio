import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center p-5 font-quicksand mt-1 bg-[#F2F2F2]"
    >
      <div className="flex items-center w-[72%] gap-2">
        <hr className="flex-1" />
        <h1 className="font-bold text-3xl">Projects</h1>
        <hr className="flex-1" />
      </div>
      <div className=" flex flex-col md:flex-row gap-4 p-6 w-[75%]">
        <img
          src="/jd.jpg"
          alt=""
          className="max-w-full md:max-w-[35%] h-auto object-contain rounded-3xl"
        />
        <div>
          <h1 className="ml-3 font-extrabold text-xl">Project 1</h1>
          <p className="text-balance p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            nemo distinctio error nulla qui blanditiis nihil repellat voluptas
            alias impedit modi facere recusandae nobis magnam nostrum iusto
            explicabo mollitia expedita iure asperiores cumque, deserunt iste.
          </p>
          <hr className="mt-3 ml-4 w-[86%] md:w-[73%]" />
          <div>
            <ul className="flex mt-3 gap-x-3 ml-4">
              <li>React</li>
              <li>Tailwind</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
          </div>
          <div className="flex mt-3 gap-x-2 ml-4">
            <img src="/github.svg" alt="" className="w-[20px]" />
            <img
              src="/link1.svg"
              alt=""
              className="w-[15px] hover:scale-110 ml-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-6 w-[75%] text-end">
        <div>
          <h1 className="mr-3 font-extrabold text-xl">Project 2</h1>
          <p className="text-balance p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            nemo distinctio error nulla qui blanditiis nihil repellat voluptas
            alias impedit modi facere recusandae nobis magnam nostrum iusto
            explicabo mollitia expedita iure asperiores cumque, deserunt iste.
          </p>
          <div className="flex flex-col items-end mr-4">
            <hr className="mt-3 w-[86%] md:w-[73%]" />

            <ul className="flex mt-3 gap-x-3 text-end">
              <li>React</li>
              <li>Tailwind</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>

            <div className="flex mt-3 gap-x-2">
              <img src="/github.svg" alt="" className="w-[20px]" />
              <img
                src="/link1.svg"
                alt=""
                className="w-[15px] hover:scale-110 "
              />
            </div>
          </div>
        </div>
        <img
          src="/jd.jpg"
          alt=""
          className="max-w-full md:max-w-[35%] h-auto object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Projects;
