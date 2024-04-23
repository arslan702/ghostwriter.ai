import React from "react";
import Image from "next/image";
import img from "../../../../../Images/landingpage/logo.png";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="md:px-16  md:py-12 py-4">
        <div className="flex flex-wrap md:gap-20 gap-5 ">
          <div>
            <Image src={img} alt="img"/>
            <p className="md:px-6 px-6 text-[14px] font-[400] text-[#141415] ">
              Copyright © 2024 OBEDIENTSHIELD, LDA. <br />
              All rights reserved.
            </p>
            <div className="flex gap-4 text-[25px] px-5 py-3 ">
              <FaInstagram />
              <FaFacebookMessenger />
              <FaTiktok />
              <FaTwitter />
              <FaFacebook />
            </div>
          </div>
          {/* 2nd column */}
          <div className="flex flex-col px-5 md:mt-0 mt-4  ">
            <p className="text-[18px] font-[700] mb-1 "> Links </p>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Affiliate Program
            </a>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Autoblog
            </a>
            <a
              href="/Pricing"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Pricing
            </a>
            <a
              href="/Faq"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              FAQs
            </a>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Learn
            </a>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Blog
            </a>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Request a feature
            </a>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              AI automated Blog
            </a>

            <div className="flex flex-col mt-4 ">
              <p className="text-[18px] font-[700] mb-1 ">Legal </p>
              <a
                href="/"
                className="text-[14px] font-[400] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-[14px] font-[400] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                terms of service
              </a>
            </div>
          </div>
          {/* 3rd column */}
          <div className="flex flex-col px-5 md:mt-0 mt-4 ">
            <p className="text-[18px] font-[700] mb-1 "> Documentation </p>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Help Docs
            </a>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              API Docs
            </a>
            <div className="flex flex-col mt-4 ">
              <p className="text-[18px] font-[700] mb-1 ">Comparisions </p>
              <a
                href="/"
                className="text-[14px] font-[400] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                ZimmWriter AI vs Ghostwriter AI
              </a>
              <a
                href="/"
                className="text-[14px] font-[400] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Drafthorse AI vs Ghostwriter AI
              </a>
            </div>
          </div>
          {/* 4th column */}
          <div className="flex flex-col px-5 md:mt-0 mt-4 ">
            <p className="text-[18px] font-[700] mb-1 "> Free Tools </p>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Introduction Generator
            </a>
            <a
              href="/"
              className="text-[14px] pt-3 font-[400] hover:text-[#7a7a7a] cursor-pointer "
            >
              Paragraph Generator
            </a>
            <div className="flex flex-col mt-4 ">
              <p className="text-[18px] font-[700] mb-1 ">Use Cases </p>
              <a
                href="/"
                className="text-[14px] font-[400] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Real estate
              </a>
              <a
                href="/"
                className="text-[14px] font-[400] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Restuarant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
