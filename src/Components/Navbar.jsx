import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm xl:px-92">
      <div className="navbar-start">
        <p className="text-xl text-gray-500">Logo</p>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
