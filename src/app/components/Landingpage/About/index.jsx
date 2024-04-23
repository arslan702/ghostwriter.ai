import React from "react";
import Image from "next/image";
import img from "../../../../../Images/landingpage/3.png";
import img1 from "../../../../../Images/landingpage/4.png";
import img2 from "../../../../../Images/landingpage/5.png";
import img3 from "../../../../../Images/landingpage/6.png";
import img4 from "../../../../../Images/landingpage/7.png";
import img6 from "../../../../../Images/landingpage/10.png";
import img7 from "../../../../../Images/landingpage/11.png";
import img8 from "../../../../../Images/landingpage/12.png";
import img9 from "../../../../../Images/landingpage/13.png";

export default function About() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(122, 115, 255, 0.1) -29%, rgba(255, 255, 255, 0.1) 133.25%)",
        }}
        className="  md:px-24 px-4 py-4 "
      >
        <p className="text-center text-[16px] uppercase md:pt-10  ">
          Our AI matches the quality of articles seen on leading publishers
        </p>
        <div className=" flex justify-between items-center flex-wrap gap-5 md:py-8 pt-4 mb-3  ">
          <Image src={img} alt="img"/>
          <Image src={img1} alt="img" className=" h-[34px] w-[119px]  " />
          <Image src={img2} alt="img" className=" h-[64px] w-[64px] " />
          <Image src={img3} alt="img" className=" h-[42px] w-[140px]  " />
          <Image src={img4} alt="img" className=" h-[45px] w-[90px] " />
        </div>
      </div>
      <div className="  bg-[#e6e4ff] px-4 py-4 ">
        <br />
        <p className="md:text-[35px] text-[20px] font-[600] md:leading-[50px] leading-[30px] text-center pt-5 uppercase max-w-xl mx-auto ">
          Feature-Rich <span className=" text-[#7a73ff] ">Articles</span> that
          Bring Traffic
        </p>
        <p className="text-center md:text-[16px] text-[14px] font-[400] leading-[22px] pt-2 uppercase ">
          Writer AI produces content that is well-organized, suits your business
          perfectly, and achieves high rankings on Google.
        </p>
        <br />
        <br />
        <div className="flex justify-center flex-wrap gap-5 ">
          <div className=" md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] ">
            <div className="flex items-center gap-5 " >
              <Image src={img6} alt="img" className="" />
              <p className="md:text-[25px] text-[18px] font-[600] " >Premium Content</p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] " >Writer AI is comparable to a skilled writer, crafting knowledgeable articles that align perfectly with your business needs.</p>
          </div>
          <div className=" md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] ">
            <div className="flex items-center gap-5 " >
              <Image src={img7} alt="img" className="" />
              <p className="md:text-[25px] text-[18px] font-[600] " >Relevant Images & Videos</p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] " >Every article comes with a main image and additional images placed within relevant sections. You also have the option to incorporate YouTube videos.</p>
          </div>
          <div className=" md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] ">
            <div className="flex items-center gap-5 " >
              <Image src={img8} alt="img" className="" />
              <p className="md:text-[25px] text-[18px] font-[600] " >Extensive Formatting</p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] " >The articles are visually appealing and well-organized, featuring crucial HTML elements such as H2s, H3s, paragraphs, lists, and tables.</p>
          </div>
          <div className="md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] ">
            <div className="flex items-center gap-5 " >
              <Image src={img9} alt="img" className="" />
              <p className="md:text-[25px] text-[18px] font-[600] " >Table of Contents</p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] " >Each article features a coherent outline that logically progresses from start to finish. The content is structured in a way that naturally captivates the reader, optimizing engagement and reading duration.</p>
          </div>
         
        </div>
        <br />
        <div className="mx-auto max-w-fit md:mt-5  " >
        <button className=" bg-[#7a73ff] px-4 py-2 text-white rounded-md mx-auto w-[180px] transition-all duration-300 hover:bg-[#6e6ac7] " >Get 3 free articles</button>
        </div>
        <br />
      </div>
    </div>
  );
}
