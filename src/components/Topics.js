import React from "react";

const Topics = () => {
  const buttons = [
    "Explore",
    "Topics",
    "Trending",
    "Collections",
    "Events",
    "GitHub Sponsors",
  ];
  return (
    <div className="w-full border-b bg-gray-100 mt-14  ">
      <div className="flex justify-center    sm:justify-between text-[14px] sm:max-w-[70vw] lg:max-w-[50vw]  mx-auto  ">
        {/* Left */}
        <div className="flex items-center   gap-4 text-[14px]  ">
          {buttons.map((button) => (
            <div className="hover:text-gray-600/90 cursor-pointer" key={button}>
              {button}
            </div>
          ))}
        </div>
        {/* Right */}
        <div className="hidden md:flex hover:text-gray-600/90 cursor-pointer bg-white p-1 rounded-[0.4rem] px-3 font-semibold">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Topics;
