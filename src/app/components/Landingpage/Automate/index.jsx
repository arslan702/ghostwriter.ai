import React from "react";
import Image from "next/image";
import img from "../../../../../Images/landingpage/14.png";
import img1 from "../../../../../Images/landingpage/15.PNG";
import img2 from "../../../../../Images/landingpage/16.png";
import img3 from "../../../../../Images/landingpage/17.png";
import img4 from "../../../../../Images/landingpage/18.png";

export default function Automate() {
  return (
    <div>
      <div className="bg-white md:px-12 px-4 py-4">
        <br />
        <p className="md:text-[35px] text-[20px] font-[600] md:leading-[50px] leading-[30px] text-center pt-5 uppercase max-w-xl mx-auto ">
          Automate with <span className="text-[#7a73ff]">AutoBlog</span>{" "}
        </p>
        <p className="text-center md:text-[16px] text-[14px] max-w-4xl mx-auto font-[400] leading-[22px] pt-2 ">
          All the features you need to drive traffic to your blog and run it on
          auto-pilot.
        </p>
        <br />
        <div className="flex justify-center flex-wrap gap-12 ">
          <div className="w-[540px]  h-auto py-3  ">
            <div className=" bg-[#bab6ff] rounded-md h-[410px] md:w-[540px] w-full flex justify-center items-center pt-10 ">
              <Image src={img} alt="img" className=" " />
            </div>
            <br />
            <p className="font-[700] text-[25px] ">Automatic Posting</p>
            <p className="text-[#777777] text-[15px] font-[400] ">
              AutoBlog allows you to set a schedule to generate & publish
              articles. Run your blog on auto-pilot, making Ghostwriter AI your
              full-time employee.
            </p>
          </div>

          <div className="w-[540px] h-auto py-3 ">
            <div className=" bg-[#bab6ff] rounded-md h-[410px] md:w-[540px] w-full flex justify-center items-center  ">
              <Image src={img1} alt="img" className=" h-[350px] " />
            </div>
            <br />
            <p className="font-[700] text-[25px] ">
              Integrate with any Website
            </p>
            <p className="text-[#777777] text-[15px] font-[400] ">
              It's easy to integrate with your website. We also have an
              integration with Zapier, allowing you to send the articles to any
              platform.
            </p>
          </div>

          <div className="w-[540px] h-auto py-3 ">
            <div className=" bg-[#bab6ff] rounded-md h-[410px] md:w-[540px] w-full flex justify-center items-center pt-10 ">
              <Image src={img2} alt="img" className=" " />
            </div>
            <br />
            <p className="font-[700] text-[25px] ">Internal Linking</p>
            <p className="text-[#777777] text-[15px] font-[400] ">
              AutoBlog allows you to set a schedule to generate & publish
              articles. Run your blog on auto-pilot, making Ghostwriter AI your
              full-time employee.
            </p>
          </div>

          <div className="w-[540px] h-auto py-3 ">
            <div className=" bg-[#bab6ff] rounded-md h-[410px] md:w-[540px] w-full flex justify-center items-center pt-10 ">
              <Image src={img3} alt="img" className=" " />
            </div>
            <br />
            <p className="font-[700] text-[25px] ">
              Real-Time External Linking
            </p>
            <p className="text-[#777777] text-[15px] font-[400] ">
              Jornalist AI will analyze the latest news and relevant sources for
              information that fits the generated article. It will carefully
              place links according to context and keywords. The end result
              feels like up-to-date content that is seen in a good-eye by
              Google.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-[#e6e4ff]  md:px-24 px-4 py-4">
        <p className="md:text-[40px] text-[20px] font-[600] md:leading-[50px] leading-[30px] text-center pt-5 mx-auto ">
          Upload your own Knowledge Base
        </p>
        <p className="text-center md:text-[16px] text-[14px] max-w-4xl mx-auto font-[400] leading-[22px] pt-2 ">
          Get articles that have in-depth knowledge about your current business.
        </p>
        <br />
        <div className="flex justify-center gap-10 flex-wrap " >
          <div className="border-[#4254ff] h-[150px] md:w-[550px] w-full bg-white border-[1px] rounded-xl p-[30px] flex py-3 md:items-center  gap-5"
            style={{ boxShadow: "0px 4px 11px 0px rgba(0,0,0,0.4)" }}
          >
            <div>
              <div className="bg-[#4254ff] h-[38px] w-[38px] rounded-full flex justify-center items-center ">
                <Image src={img4} alt="img" className="h-[22px] w-[18px] " />
              </div>
            </div>
            <div>
              <p className="text-[20px] font-[700] ">Upload Assets</p>
              <p className="text-[16px] font-[400] ">
                Ghostwriter AI will scrape your assets - website, youtube, text
                documents or any available information.
              </p>
            </div>
          </div>
          <div  className="border-[#4254ff] h-[150px] md:w-[550px] w-full bg-white border-[1px] rounded-xl p-[30px] flex py-3 md:items-center  gap-5"
            style={{ boxShadow: "0px 4px 11px 0px rgba(0,0,0,0.4)" }}
          >
            <div>
              <div className="bg-[#4254ff] h-[38px] w-[38px] rounded-full flex justify-center items-center ">
                <Image src={img4} alt="img" className="h-[22px] w-[18px] " />
              </div>
            </div>
            <div>
              <p className="text-[20px] font-[700] ">Learning Phase</p>
              <p className="text-[16px] font-[400] ">
              Ghostwriter AI will enter a learning phase, loading your assets and refining its algorithm.
              </p>
            </div>
          </div>
          <div className="border-[#4254ff] h-[150px] md:w-[550px] w-full bg-white border-[1px] rounded-xl p-[30px] flex py-3 md:items-center gap-5"
            style={{ boxShadow: "0px 4px 11px 0px rgba(0,0,0,0.4)" }}
          >
            <div>
              <div className="bg-[#4254ff] h-[38px] w-[38px] rounded-full flex justify-center items-center ">
                <Image src={img4} alt="img" className="h-[22px] w-[18px] " />
              </div>
            </div>
            <div>
              <p className="text-[20px] font-[700] ">Tailored Articles</p>
              <p className="text-[16px] font-[400] ">
              You can now generate articles that reflect your business's knowledge, context and tonality.

              </p>
            </div>
          </div>
        </div>
          <br />
      </div>
    </div>
  );
}
