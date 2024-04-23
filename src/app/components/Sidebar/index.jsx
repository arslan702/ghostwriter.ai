"use client ";
import React from "react";
import img from "../../../../Images/1.png";
import img2 from "../../../../Images/2.png";
import img3 from "../../../../Images/3.png";
import img4 from "../../../../Images/4..png";
import img5 from "../../../../Images/5.png";
import img6 from "../../../../Images/6.png";
import img7 from "../../../../Images/7.png";
import img8 from "../../../../Images/8.png";
import img9 from "../../../../Images/9.png";
import img10 from "../../../../Images/10.png";
import img11 from "../../../../Images/36.png";
import img12 from "../../../../Images/35.png";
import img13 from "../../../../Images/33.png";
import img14 from "../../../../Images/37.png";
import img15 from "../../../../Images/38.png";
import img16 from "../../../../Images/39.png";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="text-black" 
      // style={{position: 'fixed'}}
    >
      {/* side bar */}
      <div className="md:w-[300px] w-auto">
        <div className="flex items-center justify-center md:pt-[10px]">
          <div className="">
            {" "}
            <Image src={img} alt="img" className="h-[30px] w-[25px] " />{" "}
          </div>
          <div className="text-[30px] font-[400]  h-[85px] pt-5  ">
            Writer Ai
          </div>
        </div>
        {/* Section 1 */}
        <div className="w-[300px] mx-auto  md:h-[390px] md:overflow-y-auto md:overflow-x-hidden ">
          <p className=" text-[18px] font-[500] leading-[33px] opacity-50 md:px-4 px-4  ">
            ARTICLES
          </p>
          <br />
          <Link href="/dashboard/generate-article">
          <div className="text-[#7A73FF] cursor-pointer flex gap-5  items-center  mx-4 bg-[#7A73FF1A] h-[45px] md:w-[255px] py-[14px] pr-[5px] pl-[10px] rounded-[10px] border-l-[3px] border-[#7A73FF] ">
            <p className="text-[34px] leading-[34px] ">+</p>
            <p className=" text-[18px] font-[500] leading-[33px] pt-1  ">
              Generate Articles
            </p>
          </div>
          </Link>
          <div className="flex items-center  h-[45px] w-[310px] pb-3 gap-4  px-8 pt-2  ">
            <Image src={img2} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/articles/all-articles">
              <p className="text-[18px] font-[400] text-[#919191]  ">
                All Articles
              </p>
            </Link>
          </div>
          {/* 2nd section */}
          <br />
          <p className="text-[18px] font-[500] h-[33px] w-[180px] opacity-[30%]  px-4  ">
            CUSTOMIZATION{" "}
          </p>
          <div className="flex items-center  h-[40px] w-[310px] gap-4  px-8 pt-2 ">
            <Image src={img3} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/presets">
              <p className="text-[18px] font-[400] text-[#919191]  ">Presets</p>{" "}
            </Link>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2  ">
            <Image src={img4} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/brand">
              <p className="text-[18px] font-[400] text-[#919191]  ">
                Knowledge Base
              </p>{" "}
            </Link>
          </div>

          {/* 3rd section */}
          <br />
          <p className="text-[18px] font-[500] h-[33px] w-[232px] opacity-[30%]  px-4   ">
            BLOG AUTOMATION{" "}
          </p>
          <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2 ">
            <Image src={img5} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/autoblog">
              <p className="text-[18px] font-[400] text-[#919191]  ">
                Auto Blogs
              </p>{" "}
            </Link>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2  ">
            <Image src={img6} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/integrations ">
              <p className="text-[18px] font-[400] text-[#919191]  ">
                Integrations
              </p>{" "}
            </Link>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2  ">
            <Image src={img11} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/indexers ">
              <p className="text-[18px] font-[400] text-[#919191]  ">
                Indexers
              </p>{" "}
            </Link>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2  ">
            <Image src={img12} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/publications">
              <p className="text-[18px] font-[400] text-[#919191]  ">
                Publications
              </p>{" "}
            </Link>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2  ">
            <Image src={img13} className="h-[20px] w-[20px] " />
            <Link href="/dashboard/keyword ">
              <p className="text-[18px] font-[400] text-[#919191]  ">
                Keyword Monitors
              </p>{" "}
            </Link>
          </div>

          {/* 4th section */}
          <br />
          <div>
            <p className="text-[18px] font-[500] h-[33px] w-[280px] opacity-[30%]  pl-4   ">
              SOCIAL MEDIA AUTOMATION{" "}
            </p>
            <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2 ">
              <Image src={img14} className="h-[20px] w-[20px] " />
              <Link href="/dashboard/socialmedia ">
                <p className="text-[18px] font-[400] text-[#919191]  ">
                Social Media
                </p>{" "}
              </Link>
            </div>
          </div>

           {/* 5th section */}
           <br />
          <div>
            <p className="text-[18px] font-[500] h-[33px] w-[280px] opacity-[30%]  pl-4   ">
            LINKING AUTOMATION{" "}
            </p>
            <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2 ">
              <Image src={img15} className="h-[20px] w-[20px] " />
              <Link href="/dashboard/buildlinks ">
                <p className="text-[18px] font-[400] text-[#919191]  ">
                Build Links
                </p>{" "}
              </Link>
            </div>
            <div className="flex items-center  h-[45px] w-[310px] gap-4  px-8 pt-2 ">
              <Image src={img16} className="h-[20px] w-[20px] " />
              <Link href="/dashboard/linking">
                <p className="text-[18px] font-[400] text-[#919191]  ">
                Linking Audits
                </p>{" "}
              </Link>
            </div>
          </div>

        </div>

        {/* 6th section */}
        <div
          className="h-[240px] md:w-[300px] w-full mt-2 shadow-2xl  border-[1px] "
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <br />
          <div className="flex items-center  h-[45px] md:w-[255px]  rounded-[10px] mx-3  gap-4 px-5  bg-black ">
            <Image src={img7} className="h-[20px] w-[20px] " />
            <p className="text-[18px] font-[400] text-white   ">
              4 Credits Left
            </p>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4 px-9 pt-2  ">
            <Image src={img8} className="h-[20px] w-[20px] " />
            <p className="text-[18px] font-[400] text-[#919191]  ">
              Request Feature
            </p>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4 px-9 pt-2  ">
            <Image src={img9} className="h-[20px] w-[20px] " />
            <p className="text-[18px] font-[400] text-[#919191]  ">
              {" "}
              What’s New
            </p>
          </div>
          <div className="flex items-center  h-[45px] w-[310px] gap-4 px-9 pt-2  ">
            <Image src={img10} className="h-[20px] w-[20px] " />
            <p className="text-[18px] font-[400] text-[#A41D30]  "> Logout </p>
          </div>
        </div>
      </div>
    </div>
  );
}
