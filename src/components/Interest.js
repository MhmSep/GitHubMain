import React from "react";
import { BsGithub } from "react-icons/bs";

const Interest = ({ title, image, link, description }) => {
  return (
    <div className="w-full rounded-[.8rem] ">
      {image && (
        <div className="flex h-60 xl:h-80 w-full ">
          <img
            src={image}
            alt=""
            className="object-cover w-full  rounded-t-[.8rem]"
          />
        </div>
      )}
      <div
        className={`px-3 border ${
          image ? " rounded-b-[0.8rem]" : "rounded-[0.8rem]"
        }  `}
      >
        <div className="flex text-[14px] items-center h-full py-2 gap-2">
          <div className="w-5 h-5 flex  shrink-0 ">
            <BsGithub className=" w-5 h-5" />
          </div>

          <p className="">Show the page</p>
        </div>

        {/* Title*/}
        <div className="">
          <a
            href={link}
            target="_blank"
            className="font-semibold text-[19px] xl:text-[24px] text-[#a3247b]"
          >
            {title}
          </a>
          {/* Description*/}
          <p className="text-gray-500 pt-2 pb-2 xl:text-[20px]">
            {description}
          </p>
        </div>

        {/* Updated */}
        <div className="flex text-gray-500 pb-5">
          <p className="pr-4 text-[14px] xl:text-[17px]">
            Verified on Nov 24 2022
          </p>
          <div className="flex items-center text-[13px] xl:text-[15px]">
            <div className="h-3 w-3 bg-yellow-300 rounded-full mr-1"></div>
            <p className="">JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
