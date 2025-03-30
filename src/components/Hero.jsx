import { ChevronsDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const abtSection = document.querySelector(".scr");
    if (abtSection) {
      abtSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="container  gap-1 flex flex-col justify-center items-center h-screen mx-auto p-3 sm:text-nowrap bg-white font-quicksand  ">
      <h1 className="font-bold py-4 text-center text-6xl">I'm Sudhir</h1>

      <p className="font-light text-center text-2xl">
        An aspiring web developer dedicated to building sleek, dynamic websites.
      </p>
      <div>
        <button
          onClick={scrollToAbout}
          className="text-gray-600 transition-transform duration-700 hover:scale-125 mt-36 hover:text-black flex items-center animate-bounce  hover:animate-none "
        >
          <ChevronsDown size={40} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
