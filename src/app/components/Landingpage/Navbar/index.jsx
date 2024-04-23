"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../../../../Images/landingpage/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="  p-4 ">
      <div className="max-w-[1240px]  mx-auto text-black flex justify-between  ">
        <div className="cursor-pointer rounded-[8px] bg-white">
          <Image
            src={img}
            alt="logo"
            className="flex justify-center items-center h-[80px]"
          />
        </div>

        {toggle ? (
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl cursor-pointer md:hidden block "
          />
        ) : (
          <CiMenuFries
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl cursor-pointer md:hidden block "
          />
        )}

        <div className="md:flex hidden gap-12 ">
          <ul className="flex  gap-8 items-center cursor-pointer text-[black] text-[18px] font-[600] ">
            <li className="">Autoblog</li>
            <li className="">Pricing</li>
            <li className="">Shopify</li>
            <li className="">Learn</li>
            <li className="">Case Studies</li>
          </ul>
          {/* <button
            className="flex justify-between items-center mt-4 px-4 h-[48px] w-[180px] rounded-[60px] hover:text-black transition-all duration-300 shadow-xl"
            style={{
              boxShadow: "0px 4px 250px 0px #00B4FF00",
              background:
                "linear-gradient(89.92deg, rgba(122, 115, 255, 0.55) 74.49%, rgba(45, 55, 72, 0.55) 120.43%)",
            }}
          >
            Dashboard{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button> */}
          <Link
            href={"/auth/login"}
            className="flex justify-between items-center mt-4 px-4 h-[48px] w-[80px] rounded-[60px] hover:text-black transition-all duration-300 shadow-xl"
            style={{
              boxShadow: "0px 4px 250px 0px #00B4FF00",
              background:
                "linear-gradient(89.92deg, rgba(122, 115, 255, 0.55) 74.49%, rgba(45, 55, 72, 0.55) 120.43%)",
            }}
          >
            Login
          </Link>
        </div>
        {/* responsive  */}
        <ul
          className={`cursor-pointer text-center py-4  fixed bg-[#0d1117] left-[0px] text-[#ccdae7] top-[110px] md:hidden w-full h-auto  transition-all duration-100
              ${toggle ? "top-[10]" : "top-[-100%]"}`}
        >
          <li className="p-3">Autoblog</li>
          <li className="p-3">Pricing</li>
          <li className="p-3">Shopify</li>
          <li className="p-3">Learn</li>
          <li className="p-3">Case Studies</li>
          <center>
            <button
              className="flex justify-between items-center  h-[40px] w-[180px] px-4 rounded-[60px] hover:text-black transition-all duration-300 shadow-xl"
              style={{
                boxShadow: "0px 4px 250px 0px #00B4FF00",
                background:
                  "linear-gradient(89.92deg, rgba(122, 115, 255, 0.55) 74.49%, rgba(45, 55, 72, 0.55) 120.43%)",
              }}
            >
              Dashboard{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </center>
        </ul>
      </div>
    </div>
  );
}
