"use client";
import React, { useEffect, useState } from "react";
import {MdKeyboardArrowLeft, MdOutlineNotificationsNone,} from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

export default function Mainbar() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/movies/drama")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col w-full pt-4">
      {/* Navbar */}
      <div className="flex flex-row justify-between items-center m-2">
        <div className="border border-gray-700 rounded-md p-2">
          <MdKeyboardArrowLeft size={20} aria-label="Go Back" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <CiSearch />
            </span>
            <input
              className="border border-gray-700 rounded-md px-10 py-2 w-full"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="relative">
            <MdOutlineNotificationsNone size={25} />
            <GoDotFill
              size={10}
              className="absolute top-0 right-0 text-red-500"
            />
          </div>

          <div className="border border-gray-700 rounded-md">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-10 h-10 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div
        className="flex w-full h-60 my-10   bg-cover bg-center rounded-md border border-gray-600"
        style={{ backgroundImage: "url('/peleposter.jpg')" }}
      >
        <button className="text-white text-xl px-10 mx-10 my-40 h-14 bg-red-900 rounded-2xl">
          Watch
        </button>
      </div>
      <div className="flex justify-between m-6 items-center">
        <span className="font-bold">Continue Watching</span>
        <input
          type="range"
          className="bg-red-800 h-0.5 rounded-lg appearance-none cursor-pointer"
          />
        <select className="text-white bg-black rounded-md border border-gray-500 px-4 py-2">
          <option value="Popular">Popular</option>
          <option value="Action">Action</option>
          <option className="flex gap-20 " value="Comedy">
            Comedy
          </option>
        </select>
      </div>
      <div>
        {/* <ul className="flex justify-evenly p-4 gap-4">
          <li className="bg-black rounded-t-3xl">
            <img src="/Avatar.jpeg" alt="" className="rounded-t-3xl" />
           <div className="flex flex-col items-center">
           <h3>Avatar</h3>
           <span>The way of water</span>
           </div>
          </li>
          <li className="bg-black rounded-t-3xl">
            <img src="/gaurdians.jpeg" alt="" className="rounded-t-3xl" />
            <div className="flex flex-col items-center">
           <h3>Gaurdian</h3>
           <span>The volume 3</span>
           </div>
          </li>
          <li className="bg-black rounded-t-3xl">
            <img src="/lordpower.jpeg" alt="" className="rounded-t-3xl"/>
            <div className="flex flex-col items-center">
           <h3>Lord of the Rings</h3>
           <span>The rings of power</span>
           </div>
          </li>
          <li className="bg-black rounded-t-3xl"> 
            <img src="/blackpanther.jpeg" alt="" className="rounded-t-3xl rounded-b-3xl" />
            <div className="flex flex-col items-center">
           <h3>Black Panther</h3>
           <span>Wakanda forever</span>
           </div>
          </li>
        </ul> */}
        <ul className="flex flex-row justify-evenly gap-10">
          {records.map((list, index) => (
            <li
              className="border border-white"
              key={index}
              style={{
                backgroundImage: `url(${list.posterURL})`,
                backgroundSize: 'cover', backgroundRepeat: "no-repeat",
                maxWidth: '200px'
              }}
            >
              {/* <img src={list.posterURL} alt="can't load"/> */}
              {list.id} <span>Title:</span> {list.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}