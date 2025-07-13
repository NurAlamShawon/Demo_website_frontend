import React from "react";

const Renovatonsection = () => {
  return (
    <div
      className="bg-cover bg-center text-white xl:py-20 px-4 xl:h-200"
      style={{
        backgroundImage: "url('https://i.postimg.cc/yd8QJzd8/image.png')",
      }}
    >
  
        <div className="max-w-4xl ml-auto  bg-transparent bg-opacity-90 xl:p-10 p-2 rounded-lg  xl:mr-72 xl:mt-46">
          <h2 className="text-3xl font-bold mb-4 text-center xl:text-start">
            Construction and renovation projects
          </h2>
          <p className="text-white mb-6 leading-relaxed text-center xl:text-start ">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices. Morbi tincidunt ornare
            massa eget egestas purus viverra accumsan in. Ipsum nunc aliquet
            bibendum enim facilisis gravida neque convallis a. Amet purus
            gravida quis blandit turpis cursus in hac habitasse platea dictumst.
          </p>
          <p className="text-sm mb-4 text-center xl:text-start">
            Image from{" "}
            <a href="#" className="underline">
              Freepik
            </a>
          </p>
          <button className="bg-white mx-27 xl:mx-0 text-yellow-600 font-semibold px-6 py-2 rounded hover:bg-yellow-100 transition">
            CONTACT US
          </button>
       
      </div>
    </div>
  );
};

export default Renovatonsection;
