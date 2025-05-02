import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center p-5 font-quicksand mt-1 bg-[#F2F2F2]"
    >
      <div className="flex items-center w-[72%] gap-2 mt-5">
        <hr className="flex-1" />
        <h1 className="font-bold text-3xl">Projects</h1>
        <hr className="flex-1" />
      </div>
      <div className=" flex flex-col md:flex-row gap-4 p-6 w-[75%]">
        <img
          src="/Echo.png"
          alt=""
          className=" object-contain rounded-2xl lg:max-w-xl"
        />
        <div>
          <h1 className="ml-3 font-extrabold text-xl">
            Echo - <span className="font-light">Chat App</span>
          </h1>
          <p className="text-balance p-4">
            A dynamic chat platform designed for seamless real-time
            communication. It features secure JWT authentication, live messaging
            with Socket.io, and online status updates. Built with the MERN
            stack, the app is fully responsive and offers efficient state
            management with Zustand.
          </p>
          <hr className="mt-3 ml-4 w-[120%] md:w-[73%]" />
          <div>
            <ul className="flex mt-3 gap-x-3 ml-4 text-center">
              <li>React</li>
              <li>Tailwind</li>
              <li>Express</li>
              <li>Mongo DB</li>
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
          <h1 className="mr-3 font-extrabold text-xl">
            Spend Smart -{" "}
            <span className="font-light text-nowrap">Expense Tracker App</span>
          </h1>
          <p className="text-justify p-4">
            Spend Smart is a responsive and minimalistic expense tracking web
            app that helps users manage their personal finances by keeping track
            of their income and expenses in real time. Built using React with
            the Context API and useReducer for global state management, the app
            offers a smooth, state-driven UI without the need for external state
            libraries.
          </p>
          <div className="flex flex-col items-end mr-4">
            <hr className="mt-3 w-[86%] md:w-[73%]" />

            <ul className="flex mt-3 gap-x-3 text-end">
              <li>React</li>
              <li>CSS</li>
              <li>Context API</li>
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
          src="/spend-smart.png"
          alt=""
          className="object-contain rounded-2xl lg:max-w-xl ring-2"
        />
      </div>

      <div className="flex items-center w-[72%] gap-2 mt-5 mb-4">
        <hr className="flex-1" />
        <h1 className="font-bold text-2xl">Other Projects</h1>
        <hr className="flex-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 ">
        <div className="flex flex-col items-center lg:flex-row gap-4">
          <div className="rounded-2xl w-[60%] sm:w-auto max-w-lg ring-2 object-cover overflow-hidden">
            <img src="/foodapp.png" alt="" />
          </div>
          <div>
            <h1 className="font-bold">
              Dish Delight <span className="font-light"> - Recipe App</span>
            </h1>
            <p>
              A modern web application developed using React, Vanilla CSS, and
              the Spoonacular API. Dish Delight enables users to discover and
              explore a wide range of recipes based on ingredients and meal
              types. The application features a clean, responsive interface and
              provides detailed cooking instructions, ingredients to enhance the
              user’s cooking experience.
            </p>
            <hr className="border-t mt-2 w-full" />
            <ul className="flex gap-2">
              <li>React</li>
              <li>CSS</li>
            </ul>
            <div className="flex gap-2 mt-2">
              <img src="/github.svg" alt="" className="w-5" />
              <img src="link1.svg" alt="" className="w-3 hover:scale-120" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:flex-row gap-4">
          <div className=" rounded-2xl  w-[60%] sm:w-auto lg:max-w-lg ring-2 object-cover overflow-hidden">
            <img src="taskhive.png" alt="" />
          </div>
          <div>
            <h1 className="font-bold">
              Task Hive <span className="font-light">- Todo App </span>
            </h1>
            <p>
              A responsive task management web application built using the MERN
              stack (MongoDB, Express.js, React, Node.js). TaskHive allows users
              to create, update, and delete tasks with a clean and intuitive
              interface. Designed without authentication for simplicity, the app
              focuses on core CRUD functionality and real-time UI updates,
              making it ideal for personal productivity and task tracking.
            </p>
            <hr className="border-t mt-2 w-full" />
            <ul className="flex gap-2">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node JS</li>
              <li>Mongo Db</li>
            </ul>
            <div className="flex gap-2 mt-2">
              <img src="/github.svg" alt="" className="w-5" />
              <img src="link1.svg" alt="" className="w-3 hover:scale-120" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-4 mt-4">
          <div className=" rounded-2xl  w-[60%] sm:w-auto lg:max-w-lg ring-2 object-cover overflow-hidden">
            <img src="/apod.png" alt="" />
          </div>
          <div>
            <h1 className="font-bold">
              APOD{" "}
              <span className="font-light">- Astronomy Pic of the Day</span>
            </h1>
            <p>
              A visually engaging web app that showcases NASA’s Astronomy
              Picture of the Day. Users can view daily space images along with
              detailed descriptions, dates, and titles. The app offers a simple
              and responsive interface, allowing users to explore stunning
              astronomical content and learn more about space, one day at a
              time.
            </p>
            <hr className="border-t mt-2 w-full" />
            <ul className="flex gap-2">
              <li>React</li>
              <li>CSS</li>
              <li>Nasa's Open API</li>
            </ul>
            <div className="flex gap-2 mt-2">
              <img src="/github.svg" alt="" className="w-5" />
              <img src="link1.svg" alt="" className="w-3 hover:scale-120" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:flex-row gap-4 mt-4 ">
          <div className=" rounded-2xl  w-[60%] sm:w-auto lg:max-w-lg ring-2 object-cover overflow-hidden">
            <img src="/car_rental.png" alt="" />
          </div>
          <div>
            <h1 className="font-bold">
              Car Rental <span className="font-thin">- Landing page</span>
            </h1>
            <p>
              A sleek and responsive landing page designed for a car rental
              service. It features smooth scroll-based animations to enhance
              user engagement and a modern, clean layout optimized for all
              devices. The page highlights key services, vehicle categories, and
              call-to-action sections, offering an intuitive and visually
              appealing user experience.
            </p>
            <hr className="border-t mt-2 w-full" />
            <ul className="flex gap-2">
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
            <div className="flex gap-2 mt-2">
              <img src="/github.svg" alt="" className="w-5" />
              <img src="link1.svg" alt="" className="w-3 hover:scale-120" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
