import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import profile from "../assets/guy1.jpg";
import User from "./User";

const Trending = () => {
  const profiles = [
    { title: "Reza", photo: profile },
    { title: "Erfan", photo: profile },
    { title: "Amin", photo: profile },
    { title: "Ali", photo: profile },
  ];
  return (
    <div className="border rounded-[0.7rem] md:w-[30rem]   ">
      {/* Header  */}
      <div
        className="flex items-center
        px-3 py-2 bg-gray-100 rounded-t-[0.7rem]"
      >
        <AiOutlineFire />
        <p className="ml-1 font-semibold">Trending developers</p>
      </div>
      {/* Profiles */}
      <div className="p-4 space-y-4">
        {profiles.map((profile) => (
          <User title={profile.title} photo={profile.photo} />
        ))}
      </div>
      {/* See More */}
      <div className="  px-3 py-2 border-t font-semibold ">
        <p>View More...</p>
      </div>
    </div>
  );
};

export default Trending;
