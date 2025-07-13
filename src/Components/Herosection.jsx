import React from "react";

const Herosection = () => {
  return (
    <div className="xl:px-20 px-2">
      <div className="max-w-6xl  bg-white p-10 xl:mt-80 mt-10 xl:ml-80">
        <div className="xl:w-1/2  space-y-5">
          <h1 className="font-bold text-black text-2xl">We Create Websites</h1>
          <p className="text-xl font-regular">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur magnam omnis laboriosam modi, nam praesentium assumenda
            blanditiis, eos sed iure aliquam tenetur laudantium dicta odit,
            repellat sequi quam obcaecati recusandae quasi excepturi? Minima
            tempore, adipisci modi dignissimos id consectetur vero quaerat
            nesciunt eligendi quibusdam, corporis fuga commodi nulla eos aut?
          </p>
          <p className="text-xl font-regular">
            Image from <a href="https://www.freepik.com" className="underline">Freepik</a>
          </p>
          <button className="btn px-10 py-6 text-gray-300 bg-black rounded-xl">
            VIEW PORTFOLIO
          </button>
        </div>
        <div className="xl:w-1/2 xl:mt-0 mt-80  relative">
          <div className="xl:w-125 w-full xl:h-155 h-70 bg-yellow-400 absolute xl:bottom-20 bottom-2 xl:left-242 left-8 z-0"></div>
          <img
            src="https://i.postimg.cc/pdqkM1Zb/rain-png-34459.png"
            alt=""
            className="absolute xl:bottom-40 bottom-6 xl:left-190 left-0 z-0 "
          />
          <img
            src="https://i.postimg.cc/Y90Rrfn4/lee-campbell-Dt-Dl-Vpy-vv-Q-unsplash.jpg"
            alt=""
            className="absolute xl:bottom-60 bottom-12 xl:left-210 left-4 z-50 "
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
