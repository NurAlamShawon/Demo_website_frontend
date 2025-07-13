import React from "react";

const Digitalsection = () => {
  return (
    <div
      className="bg-cover bg-center  px-4 py-12 h-200"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/KjK0NrtX/corinne-kutz-t-MI2-r5-Nfo-unsplash.jpg')",
      }}
    >
      <div className="bg-white/90 shadow-lg max-w-md p-8 rounded-lg xl:mt-50 mt-40 xl:ml-20 space-y-5">
        <h2 className="text-2xl font-bold mb-2">
          Crafting digital experiences
        </h2>
        <p className="mb-4 text-gray-700">
          Join the elite ranks of sustained value creators
        </p>
        <button className="btn btn-neutral">Contact Us</button>
        <p className="text-sm mb-4 text-center xl:text-start">
          Image from{" "}
          <a href="#" className="underline">
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
};

export default Digitalsection;
