import React, { useEffect, useState } from 'react';

const Portfoliosection = () => {
   const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load local JSON (adjust path if needed)
    fetch("/Portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="bg-[#1e1e1e] text-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          Quam quisque id diam vel quam elementum. Vestibulum lectus mauris
          ultrices eros in cursus turpis massa tincidunt. Pellentesque habitant
          morbi tristique senectus et netus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-2xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black rounded overflow-hidden shadow-md hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center font-semibold">
              {project.title}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        Images from <a href="https://www.freepik.com" className="underline">Freepik</a>
      </p>
    </div>
  );
};

export default Portfoliosection;