import React from "react";

const Mockupsection = () => {
  return (
    <div className="h-380 xl:h-220 bg-[url('https://i.postimg.cc/J48HCwrs/federica-giusti-OPUvjfl-Usyo-unsplash.jpg')] bg-cover bg-center h-96 w-full">
      <div className="relative">
        <img
          src="https://i.postimg.cc/DyXC462L/alessandro-fazari-h-Sw--OS6-Tk6-Gg-unsplash.jpg"
          alt=""
          className="xl:w-120 w-80 absolute xl:left-50 left-5 xl:top-20 top-4"
        />
        <div className="bg-[#e3ebee] xl:w-120 w-60 xl:h-80 h-40 xl:p-40 p-10 absolute xl:left-0 left-1 xl:top-130 top-80">
          <h1 className="text-2xl text-gray-400">Mockup</h1>
          <p className="text-xl text-gray-400">Ready to use</p>
        </div>
      </div>

      <div className="absolute xl:right-90 xl:mt-20 mt-140  grid grid-cols-1 gap-2">
        <div className="bg-white p-5 xl:w-140 w-80 space-y-4 xl:ml-0 ml-10">
          <h1 className="font-bold text-2xl text-black">Branding Strategy</h1>
          <p className="font-regular text-xl text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            repellendus ullam numquam architecto ut non neque earum! Recusandae
            magni earum voluptates architecto esse veniam pariatur!
          </p>
          <p className="text-sm mb-4 text-center xl:text-start">
            Image from{" "}
            <a href="#" className="underline">
              Freepik
            </a>
          </p>
        </div>
        <div className="bg-white p-5 xl:w-140 w-80  space-y-4 xl:ml-0 ml-10">
          <h1 className="font-bold text-2xl text-black">Design Logos</h1>
          <p className="font-regular text-xl text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            repellendus ullam numquam architecto ut non neque earum! Recusandae
            magni earum voluptates architecto esse veniam pariatur!
          </p>
        </div>
        <div className="bg-white p-5 xl:w-140 w-80  space-y-4 xl:ml-0 ml-10">
          <h1 className="font-bold text-2xl text-black">Brand Identity</h1>
          <p className="font-regular text-xl text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            repellendus ullam numquam architecto ut non neque earum! Recusandae
            magni earum voluptates architecto esse veniam pariatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mockupsection;
