import React from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-quicksand bg-[#F2F2F2] gap-6">
      <div className="flex w-[75%] items-center gap-6">
        <hr className="flex-1" />
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <hr className="flex-1" />
      </div>

      <div className="text-center mt-[10px]">
        <p>Looking forward to connecting !</p>
      </div>
      <div className="mt-[60px]">
        <a href="">
          <button
            onClick={() => (window.location = "mailto:rajsudhir946@gmail.com")}
            className=" flex gap-2 rounded border border-[#C4C4C4] p-2 transition duration-300  font-quicksand hover:border-slate-950"
          >
            Write Message <Mail color="#838181" className="hover:scale-3d" />
          </button>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 relative top-[150px]">
        <div className="flex justify-center items-center gap-3 ml-2">
          <a href="https://github.com/Sudhir1207?tab=repositories">
            <img
              src="/github_logo.png"
              alt=""
              className="w-[25px] hover:scale-110"
            />
          </a>
          <a href="https://www.linkedin.com/in/sudhir-r-94a5ab25b/">
            <img
              src="linked_in.png"
              alt=""
              className="w-[43px] hover:scale-110"
            />
          </a>
        </div>

        <p className="text-center text-sm">Sudhir - {year}</p>
      </div>
    </div>
  );
};

export default Contact;
