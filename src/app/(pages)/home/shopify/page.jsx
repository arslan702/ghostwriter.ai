import React from "react";
import { FaPlay } from "react-icons/fa";
import img from "../../../../../Images/landingpage/28.png";
import Image from "next/image";
import How from "@/app/components/Landingpage/How";

export default function shopify() {
  return (
    <div>
      <div className="md:px-24 px-4 md:py-8 py-4 ">
        <div className="grid md:grid-cols-2 ">
          {/* first section */}
          <div>
            <p className=" text-[40px] font-[700] leading-tight max-w-lg mx-auto md:mt-10 ">
              Grow your {" "}
              <span className="text-[#7A73FF] ">Shopify Store  </span>
              on  <span className="text-[#7A73FF] ">Auto-Pilot</span>{" "}
            </p>
            <p className="text-[16px] max-w-lg mx-auto mt-3 ">
              Generate & publish hundreds of highly optimized blog articles that
              bring you sales.
            </p>
            <br />
            <div className="flex justify-between items-center px-4 py-2 border-[1px] rounded-3xl md:max-w-lg  mx-auto ">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
                className=" outline-none "
              />
              <p></p>
              <div className="flex justify-center  ">
                <button className="bg-[#7a73ff] text-white h-[35px] md:w-[190px] w-[150px]  rounded-2xl md:text-[14px] text-[12px] flex justify-center gap-3 items-center ">
                  Get 3 Free Article{" "}
                  <span>
                    <FaPlay />
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* second section */}
          <div className="flex justify-center items-center ">
            <Image src={img} alt="img"/>
          </div>
        </div>
      </div>
      <How/>
    </div>
  );
}
