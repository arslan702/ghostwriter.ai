"use client";
import React, { useState } from "react";
import img from "../../../../../Images/landingpage/logo.png";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "@/config";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    axios.post(`${API_URL}/user/login`, {email})
    .then((res) => {
        console.log(res.data)
        localStorage.setItem('user', JSON.stringify(res?.data?.user))
        router.push('/dashboard/articles/all-articles')
    })
    .catch((err) => {
        console.log(err)
    })
  }
  return (
    <div className="bg-[#E2EBF0] md:px-24 px-4 h-screen flex flex-col justify-center items-center ">
      <div className=" ">
        {/* <p className="text-[20px] font-[700] leading-[30px] text-center ">
          LOGO
        </p> */}
        <div className="flex justify-center items-center">
          <Image
            src={img}
            alt="logo"
            className="flex justify-center items-center h-[80px]"
          />
        </div>
        <p className="text-[30px] font-[700] leading-[36px] w-[446px] text-center text-[#1A202C] pt-[24px] ">
          Start creating content for your website today
        </p>
        <p className="text-[17px] leading-[27px] font-[400] pt-[24px] text-center ">
          You're just step away from automating your blog.
        </p>
        <input
          type="email"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address "
          className="border-[1px] border-[#FF44EC] rounded-[6px] outline-none h-[48px] w-[480px] px-4 mt-[24px] shadow-md "
        />
        <div className="h-[76px] w-[302px] bg-[#F9F9F9] border-[1px]  rounded-[3px] mt-[24px] border-[#D3D3D3] ">
          <div className="px-4 flex justify-between pt-6 ">
            <div className="flex gap-3 justify-center items-center ">
              <input
                type="checkbox"
                name=""
                id=""
                className="rounded-[2px] border-[2px] border-[#C1C1C1] h-[28px] w-[28px] "
              />
              <p className="text-[14px] font-[400] leading-[17px] ">
                {" "}
                I'm not a robot{" "}
              </p>
            </div>
            <div>recaptcha</div>
          </div>
        </div>
        <button onClick={handleSubmit} className="bg-[#FF44EC] hover:bg-[#e758d9] transition-all duration-1000 shadow-md text-white h-[48px] w-[480px] rounded-[6px] text-[18px] mt-5 ">
          Login
        </button>
      </div>
    </div>
  );
}
