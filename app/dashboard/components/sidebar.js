import React from "react";
import { PiCompass } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";
import { PiVideoCameraFill } from "react-icons/pi";
import { PiPlaylistFill } from "react-icons/pi";

export default function sidebar() {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex items-center">
        {" "}
        <span>Anjaneya.</span>
        <span className="flex text-red-700 justify-center">Design</span>{" "}
      </div>
      <div className="my-10">
        <div>
          <span className="flex text-gray-500 py-1 pl-2 ">News Feed</span>
        </div>
        <div>
          <ul>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2 my-2 font-bold">
              <span>
                <PiCompass size={22} />
              </span>{" "}
              Browse
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2  my-2 font-bold">
              <span>
                <IoMdTrendingUp size={22} />
              </span>{" "}
              Trending
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2 my-2 font-bold">
              <span>
                <RiGroupLine size={22} />
              </span>{" "}
              Following
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2 my-2  font-bold">
              <span>
                <PiVideoCameraFill size={22} />
              </span>{" "}
              Your Video
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-md w-36 h-9 gap-3 pl-2 my-2  font-bold">
              <span>
                <PiPlaylistFill size={22} />
              </span>{" "}
              Playlist
            </li>
          </ul>
        </div>
        <hr className="border border-red-800 my-4" />
      </div>
      <div className=" -my-8">
        <div>
          <span className="flex text-gray-500 py-1 pl-2 ">Following</span>
        </div>
        <div>
          <ul>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2 my-1 ">
              Browse
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2  my-1">
              Trending
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2 my-1">
              Following
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2 my-1">
              Your Video
            </li>
            <li className="flex hover:bg-red-900 items-center rounded-2xl w-36 h-9 gap-3 pl-2 my-1">
              Playlist
            </li>
          </ul>
        </div>
        <hr className="border border-red-800 my-4" />
      </div>
    </div>
  );
}
