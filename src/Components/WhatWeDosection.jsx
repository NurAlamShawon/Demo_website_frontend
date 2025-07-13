import React from "react";

const WhatWeDosection = () => {
  return (
    <div className="bg-black  text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center  text-3xl font-bold mb-12">What We Do</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Strategy */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Strategy.</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Analytics and Research</li>
              <li>Interactive Workshops</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>Digital Strategy</li>
              <li className="text-blue-400 underline cursor-pointer">
                Conversion Rate Optimization
              </li>
            </ul>
          </div>

          {/* Design */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Design.</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Creative Direction</li>
              <li>Brand Guides</li>
              <li>Prototypes</li>
              <li className="text-blue-400 underline cursor-pointer">
                UI/UX & Web Design
              </li>
              <li>Visual Asset Creation</li>
              <li>Motion Design</li>
            </ul>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Development.</h3>
            <ul className="space-y-2 text-gray-300">
              <li>System Architecture Design</li>
              <li>Full-Stack Development</li>
              <li className="text-blue-400 underline cursor-pointer">
                3rd Party Integrations
              </li>
              <li>Performance Optimization</li>
              <li>WordPress Development</li>
              <li>Shopify Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDosection;
