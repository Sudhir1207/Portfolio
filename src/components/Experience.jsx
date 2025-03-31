import React from "react";

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-quicksand mt-[40px]">
      <div className="flex justify-center items-center w-[75%] gap-4">
        <hr className="flex-1" />
        <h1 className="text-3xl font-extrabold">Experience</h1>
        <hr className="flex-1" />
      </div>

      <div className="flex flex-col md:flex-row p-4 w-[75%] mt-2">
        <div className="p-5">
          <h1 className="text-nowrap ml-2 text-2xl font-medium">
            Frontend Developer
          </h1>
          <p className="p-2">Iva Technos</p>
          <hr />
          <p className="p-2 text-nowrap">June 2023 - July 2023</p>
        </div>
        <div className="border-l-[1px] border-black mr-2 sm:hidden md:block"></div>
        <ul className="p-5 pt-0 list-disc text-wrap">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            fugiat quam possimus aspernatur in officiis tempore.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            provident odio eaque at numquam obcaecati?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur accusamus debitis at autem laborum beatae iusto id
            facere blanditiis.
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row p-4 w-[75%] mt-2">
        <div className="p-5 sndExp2">
          <h1 className="text-nowrap ml-2 text-2xl font-medium">
            Software Developer
          </h1>
          <p className="p-2">Workcohol</p>
          <hr />
          <p className="p-2 text-nowrap">January 2025 - March 2025</p>
        </div>
        <ul className="p-5 pt-0 list-disc text-wrap ">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            fugiat quam possimus aspernatur in officiis tempore.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            provident odio eaque at numquam obcaecati?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur accusamus debitis at autem laborum beatae iusto id
            facere blanditiis.
          </li>
        </ul>
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
