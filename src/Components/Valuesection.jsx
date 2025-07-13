import React from "react";

const Valuesection = () => {
  return (
    <div className="relative xl:p-20 xl:h-300 h-220">
    
      <img
        src="https://i.postimg.cc/QC68rDzG/carl-heyerdahl-KE0n-C8-58-MQ-unsplash.jpg"
        alt=""
        className="xl:w-170 w-45 absolute xl:left-135 top-27 left-12 z-0"
      />
      <img
        src="https://i.postimg.cc/tCTRN11X/ian-schneider-Tam-Mbr4okv4-unsplash.jpg"
        alt=""
        className="xl:w-210 w-55 absolute xl:left-95 left-2 xl:top-140 top-60 z-0"
      />
        <img
        src="https://i.postimg.cc/kMwXSNg1/andrew-neel-ute2-XAFQU2-I-unsplash.jpg"
        alt=""
        className="xl:w-140 w-40 absolute xl:left-310 left-60 xl:top-40 top-30 z-0"
      />

      <div className="absolute xl:left-195 left-15 xl:top-110 xl:w-180 w-80 z-10 xl:mt-0 mt-100  bg-black p-10">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Brand Values
        </h2>
        <p className="text-white mb-6 leading-relaxed text-center ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          accusantium perspiciatis cum odit sunt libero consectetur beatae 
          eligendi odio temporibus, delectus corporis inventore officiis rem
          excepturi vel, voluptatem sint fugiat.
        </p>
        <p className="text-sm mb-4 text-center text-white">
          Image from{" "}
          <a href="#" className="underline">
            Freepik
          </a>
        </p>
        <button className="bg-white xl:ml-60 text-yellow-600 font-semibold px-6 py-2 rounded hover:bg-yellow-100 transition">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Valuesection;
