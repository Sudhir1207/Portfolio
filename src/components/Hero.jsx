import { ChevronsDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="container flex flex-col justify-center items-center h-[450px] mx-auto p-3 sm:text-nowrap  font-quicksand  ">
      <h1 className="font-bold py-4 text-center text-6xl">I'm Sudhir</h1>
      <p className="font-light text-center text-2xl">
        An aspiring web developer dedicated to building sleek, dynamic websites.
      </p>
      <div className="relative">
        <button className="text-gray-600 absolute top-[140px] transition-transform duration-300 hover:scale-125 hover:text-black">
          <ChevronsDown size={40} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
