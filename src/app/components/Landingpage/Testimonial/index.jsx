import React from "react";
import Image from "next/image";
import img from "../../../../../Images/landingpage/19.png";
import img1 from "../../../../../Images/landingpage/20.png";
import img2 from "../../../../../Images/landingpage/21.png";

import { MdOutlineStarPurple500 } from "react-icons/md";

export default function Testimonial() {
  return (
    <div className=" md:px-20 px-4 py-4">
      <div className="flex justify-center md:mt-10 mt-5 cursor-pointer ">
        <Image src={img} alt="img" />
      </div>
      <p className="text-center text-[16px] font-[400] mt-3 ">
        Mass-generate articles according to your preferences - niche, keywords,
        titles, structure & headings and more.
      </p>
      <br />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
        <div
          className="h-[480px] flex  items-center flex-col p-5 rounded-md md:mt-8  "
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.12)" }}
        >
          <Image src={img1} alt="img" className="" />
          <p className="pt-3 text-[16px] font-[600] ">James Williams</p>
          <p className="pt-0 text-[14px] font-[400] ">Entrepreneur</p>
          <div className="mt-2 flex gap-2 text-[17px] ">
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
          </div>
          <p className="  pt-2 text-center ">
            Writer AI has been a game-changer for our small business! The
            platform's ease of use and the quality of articles it produces are
            unmatched. Our blog has never been more lively and informative. It's
            amazing how it can generate unique, SEO-friendly content that
            resonates with our audience, driving more organic traffic to our
            site. A big thumbs up from us!
          </p>
        </div>
        <div
          className="h-[480px] flex  items-center flex-col p-5 rounded-md "
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.12)" }}
        >
          <Image src={img2} alt="img" className="" />
          <p className="pt-3 text-[16px] font-[600] ">David Warner </p>
          <p className="pt-0 text-[14px] font-[400] ">Entrepreneur</p>
          <div className="mt-2 flex gap-2 text-[17px] ">
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
          </div>
          <p className="  pt-2 text-center ">
            Writer AI has been a game-changer for our small business! The
            platform's ease of use and the quality of articles it produces are
            unmatched. Our blog has never been more lively and informative. It's
            amazing how it can generate unique, SEO-friendly content that
            resonates with our audience, driving more organic traffic to our
            site. A big thumbs up from us!
          </p>
        </div>

        <div
          className="h-[480px] flex  items-center flex-col p-5 rounded-md md:mt-8"
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.12)" }}
        >
          <Image src={img1} alt="img" className="" />
          <p className="pt-3 text-[16px] font-[600] ">James Maxwell</p>
          <p className="pt-0 text-[14px] font-[400] ">Entrepreneur</p>
          <div className="mt-2 flex gap-2 text-[17px] ">
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
            <MdOutlineStarPurple500 className="text-[#FC7326] " />
          </div>
          <p className="  pt-2 text-center ">
            Writer AI has been a game-changer for our small business! The
            platform's ease of use and the quality of articles it produces are
            unmatched. Our blog has never been more lively and informative. It's
            amazing how it can generate unique, SEO-friendly content that
            resonates with our audience, driving more organic traffic to our
            site. A big thumbs up from us!
          </p>
        </div>
      </div>
    </div>
  );
}
