import React from "react";
import { FaBullseye, FaPencilRuler, FaLaptop } from "react-icons/fa";
import { TbCode } from "react-icons/tb";

const Epicsection = () => {
  return (
    <div className="xl:mt-20 mt-10 py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Epic design and engineering
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-10">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
        {/* stategy*/}
        <div className="bg-transparent p-12 rounded-lg  hover:scale-105 transition">
          <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 border-2 border-gray-300">
            <FaBullseye className="text-2xl text-black" />
          </div>
          <h3 className="text-xl font-semibold mb-2">STRATEGY</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.
          </p>
        </div>

        {/* branding*/}
        <div className="bg-white p-6 rounded-lg  hover:scale-105 transition">
          <div className="bg-[#f0a901] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 border-2 border-gray-300">
            <FaPencilRuler className="text-2xl text-black" />
          </div>
          <h3 className="text-xl font-semibold mb-2">BRANDING</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.
          </p>
        </div>

        {/* DEVELOPMENT Card */}
        <div className="bg-transparent p-6 rounded-lg hover:scale-105 transition">
          <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 border-2 border-gray-300">
            <TbCode className="text-2xl text-black" />
          </div>
          <h3 className="text-xl font-semibold mb-2">DEVELOPMENT</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.
          </p>
        </div>

        {/* WEB DESIGN Card */}
        <div className="bg-[#f0a901] p-6 rounded-lg hover:scale-105 transition text-white">
          <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
            <FaLaptop className="text-2xl text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">WEB DESIGN</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Epicsection;
