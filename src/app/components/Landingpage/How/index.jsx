import React from "react";
import img6 from "../../../../../Images/landingpage/29.png";
import img7 from "../../../../../Images/landingpage/30.png";
import img8 from "../../../../../Images/landingpage/31.png";
import img9 from "../../../../../Images/landingpage/32.png";
import Image from "next/image";
import Today from "../Today";

export default function How() {
  return (
    <div>
      {/* 1st section  */}
      <div className="md:px-24 px-4 md:py-8 py-4 text-center ">
        <p className="text-[40px] font-[700] uppercase mt-2 ">How It Works</p>
        <p className="text-[16px] font-[400] uppercase mt-3 ">
          Ghostwriter AI plugs into your Shopify Store to write daily content
          that brings you clients.
        </p>
        <br />
        <div className=" grid md:grid-cols-3 gap-4 ">
          <div className="flex flex-col justify-center items-center ">
            <p className=" h-[55px] w-[55px] bg-[#7A73FF] rounded-full flex justify-center items-center text-white ">
              01
            </p>
            <p className="text-[20px] font-[600] mt-2 ">Integration</p>
            <p className="text-[16px] font-[400] leading-[20px] mt-2 ">
              Ghostwriter AI natively connects to your Shopify Store. No coding
              is required.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className=" h-[55px] w-[55px] bg-[#7A73FF] rounded-full flex justify-center items-center text-white ">
              02
            </p>
            <p className="text-[20px] font-[600] mt-2 ">Customization</p>
            <p className="text-[16px] font-[400] leading-[20px] mt-2 ">
              You can customize what type of content, how many articles, and how
              often you want to publish.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className=" h-[55px] w-[55px] bg-[#7A73FF] rounded-full flex justify-center items-center text-white ">
              03
            </p>
            <p className="text-[20px] font-[600] mt-2 ">Auto blog</p>
            <p className="text-[16px] font-[400] leading-[20px] mt-2 ">
              Ghostwriter AI will generate and publish articles to your store on
              auto-pilot.
            </p>
          </div>
        </div>
        <br />
        <br />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get 3 free articles
        </button>
        <br />
        {/* second section */}
        <div className="md:py-10 py-4 text-center">
          <p className="text-[40px] font-[700] uppercase mt-2  ">
            Made for Business Owners
          </p>
          <p className="text-[16px] font-[400] uppercase mt-2 ">
            Ghostwriter AI is a hands-off solution so you can focus on what
            matters - your business.
          </p>
          <br />
          <div className="flex justify-center flex-wrap gap-5 ">
            <div className=" md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] border-[1px] ">
              <div className="flex items-center gap-5 ">
                <Image src={img6} alt="img" className="h-[60px] w-[60px] " />
                <p className="md:text-[25px] text-[18px] font-[600] ">
                  Setup in 5 minutes
                </p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] ">
                Ghostwriter AI has been specifically designed for owners
                who don't have time to write articles. Minimum overhead, maximum
                results.
              </p>
            </div>
            <div className=" md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] border-[1px]">
              <div className="flex items-center gap-5 ">
                <Image src={img7} alt="img" className="h-[60px] w-[60px]" />
                <p className="md:text-[25px] text-[18px] font-[600] ">
                  Automated 24/7
                </p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] ">
                The platform can craft articles every single day and it works
                tirelessly to get you more clients. It won't stop bringing you
                traffic unless you tell it to.
              </p>
            </div>
            <div className=" md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] border-[1px]">
              <div className="flex items-center gap-5 ">
                <Image src={img8} alt="img" className="h-[60px] w-[60px]" />
                <p className="md:text-[25px] text-[18px] font-[600] ">
                  Premium Copy-Writing
                </p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] ">
                More affordable and efficient than a traditional copy-writer. We
                bring you the best of AI right to your Shopify Store, in a
                simple way that you can understand.
              </p>
            </div>
            <div className="md:h-[230px] h-[auto] w-[500px] bg-white rounded-lg p-[20px] border-[1px] ">
              <div className="flex items-center gap-5 ">
                <Image src={img9} alt="img" className="h-[60px] w-[60px]" />
                <p className="md:text-[25px] text-[18px] font-[600] ">
                  Share your Account
                </p>
              </div>
              <p className="text-[16px] font-[400] leading-[30px] ">
                Want to share your account with your team or assistants? Enable
                limited-access accounts to manage the platform for you.
              </p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="md:py-10 py-4 text-center">
          <p className="md:text-[40px] text-[30px] font-[700] uppercase mt-2  ">
            Tailored Articles for Your Store
          </p>
          <p className="text-[14px] font-[400] uppercase mt-2 ">
            Feature-Rich and well-structured articles that are crafted for your
            brand and niche.
          </p>
          <br />
          <div>
            <iframe
              className="rounded-md md:max-w-xl w-full mx-auto "
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pmyeOEym1cg?si=MNLFqCfjKt3T16wT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Today/>
    </div>
  );
}
