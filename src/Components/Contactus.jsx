import React from "react";

const Contactus = () => {
  return (
    <div>
      <div className="xl:flex flex-row items-center justify-center p-10">
        <div className="max-w-xl w-full bg-white text-center h-68 p-10">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2 text-gray-700">
            We are here to meet any business need, and to promote your company
            online!
          </p>
          <hr></hr>
          <div className="space-y-1 text-sm">
            <p>
              <strong>Phone:</strong> (212) 252 55 22
            </p>
            <p>
              <strong>Location:</strong> 75 Street Sample, WI 63025
            </p>
            <p>
              <strong>Email:</strong> template@sample.com
            </p>
          </div>
          <p className="text-xs mt-4 text-gray-500">Image from Unsplash</p>
        </div>
        <div className="max-w-sm w-full">
          <img
            src="https://i.postimg.cc/4xyGVjSn/carriza-maiquez-RTdvy9iz-Xvw-unsplash.jpg"
            alt="Creative Workspace"
            className="rounded-lg shadow-lg h-68"
          />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
