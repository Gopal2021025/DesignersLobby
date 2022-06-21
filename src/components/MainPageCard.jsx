import { Link } from "react-router-dom";
import React from "react";
import {
  FiBookmark,
  FiExternalLink,
  FiMessageCircle,
  FiTriangle,
} from "react-icons/fi";

import { BsFillBookmarkFIll } from "react-icons/bs";

const MainPageCard = ({ image, name, description, link }) => {
  return (
    <Link to={link}>
      <div
        onClick=""
        className="cursor-pointer shadow-md p-[3px] rounded-[12px] duration-500 white-light-shadow bg-white dark:border-[#555] dark:bg-[#1f1f1f] dark:text-white border border-[#ddd] hover:border-[#3d5eff98]"
      >
        <div className="p-[16px] bg-white rounded-md dark:bg-[#1F1F1F] overflow-hidden">
          <img
            className="rounded-md w-full mb-2 hover:scale-105 transition duration-300 overflow-hidden"
            src={image}
            alt=""
          />
          <a href={link} target="_blank">
            <h1 className="text-[24px] font-Inter font-semibold duration-500 hover:text-[#3d5eff]">
              {name}
            </h1>
            <p className="text-xs lg:text-[16px] xl:text-[16px] font-Inter leading-tight font-medium text-[#666] dark:text-[#aaa] mt-1">
              {description}
            </p>
          </a>
          <div className="bg-red-500 inline-block font-Inter text-[14px] px-[12px] py-[6px] mt-[10px] rounded-[20px]">
            <p>Illustration</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainPageCard;