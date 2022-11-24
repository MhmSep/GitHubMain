import React from "react";
import { MdOutlineWeb } from "react-icons/md";

const User = ({ title, photo }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className=" w-16 h-16 flex">
        <img src={photo} alt="" className="object-cover rounded-full" />
      </div>
      <div className="  ">
        <p className="font-medium text-[#a3247b]">{title}</p>
        <div className="flex items-center">
          <MdOutlineWeb className="w-5 h-5"/>
          <p className="ml-2 ">Front-end Developer</p>
        </div>
      </div>
    </div>
  );
};

export default User;
