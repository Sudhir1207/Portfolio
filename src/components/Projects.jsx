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
            Cartify -{" "}
            <span className="font-light text-nowrap"> E-Commerce App</span>
          </h1>
          <p className="text-balance p-4">
            This project features a dynamic eCommerce platform where users can
            explore, filter, and sort products, select variants (like size), and
            add items to their cart. Customers can easily complete their
            purchase by providing a delivery address and choosing from two
            payment methods: Cash on Delivery or online payments via Stripe and
            Razorpay gateways.
          </p>
          <div className="flex flex-col items-end mr-4">
            <hr className="mt-3 w-[86%] md:w-[73%]" />

            <ul className="flex mt-3 gap-x-3 text-end">
              <li>React</li>
              <li>Tailwind</li>
              <li>Express</li>
              <li>Mongo DB</li>
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
