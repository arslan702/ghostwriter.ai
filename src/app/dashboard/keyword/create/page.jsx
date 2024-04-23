import React from "react";
import img from "../../../../../Images/33.png";
import img1 from "../../../../../Images/20.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="md:px-12 px-4 md:py-20 py-8 text-[#344054] ">
      <p className="text-[33px] font-[500] "> Keyword Monitors </p>
      <div className="flex  items-center gap-3 flex-wrap md:mt-4 mt-2 ">
        <Image src={img} className=" h-[18px] w-[18px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[500] text-[#475467] ">
          Keyword Monitors{" "}
        </p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[600] text-[#7A73FF] bg-[#faf9fb] px-3 py-1 rounded-md ">
          Sparkling stays
        </p>
      </div>
      <div className="md:flex gap-3  px-2 md:mt-4 mt-2 ">
        <div className="mt-4">
          <label htmlFor="" className="text-[18px] font-[500] text-[#344054]">
            Name
          </label>{" "}
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Sparkling Stays "
            className="px-3 h-[46px] text-[14px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
          />
          <p className="text-[14px] font-[400] opacity-[40%] pt-1 ">
            You can always change this later
          </p>
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-[18px] font-[500] text-[#344054] ">
            Website URL
          </label>{" "}
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="https://sparklingstays.com/ "
            className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg text-[14px] "
          />
          <p className="text-[14px] font-[400] opacity-[40%] pt-1 ">
            The full URL of your website without www...
          </p>
        </div>
      </div>
      <div className="md:flex gap-3  px-2 ">
        <div className="mt-4">
          <label htmlFor="" className="text-[18px] font-[500] text-[#344054]">
            Country
          </label>{" "}
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Canada "
            className="px-3 h-[46px] text-[14px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
          />
          <p className="text-[14px] font-[400] opacity-[40%] pt-1 ">
            The Location you’re targeting
          </p>
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-[18px] font-[500] text-[#344054] ">
            Language
          </label>{" "}
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="English "
            className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg text-[14px] "
          />
          <p className="text-[14px] font-[400] opacity-[40%] pt-1 ">
            The language relevant to your website
          </p>
        </div>
      </div>

      <div className=" gap-3  px-2 mt-4 ">
        <div className="mt-2">
          <label htmlFor="" className="text-[18px] font-[500] text-[#344054]">
            Automatic Refresh
          </label>{" "}
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Disabled "
            className="px-3 h-[46px] text-[14px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
          />
        </div>
      </div>
      <div>
        <p className=" opacity-[40%] text-[14px] leading-[20px] mt-2 px-2 ">
          Your monitor will be refreshed at least once in every period. <br />
          You will be charged 1 credit per refresh.
        </p>
      </div>
      <br />

      <div className="relative overflow-x-auto rounded-t-[6px]">
        <table className="w-full border-[1px]  text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="md:text-[18px] text-[14px] h-[66px] font-[100] text-[#202224] opacity-[90%] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-3/5 px-11 py-3">
                KEYWORD
              </th>
              <th scope="col" className="w-2/5  py-3 text-center ">
                MONTHLY SEARCHES
              </th>
              <th scope="col" className="w-1/5 px-6 py-3">
                DIFFICULTY
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-[16px] font-[500] text-[#202224] opacity-[90%] border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-3 ">
                  <p>1</p>
                  <p>restaurant cleansing service</p>
                </div>
              </th>
              <td className="px-6 py-4 text-center ">160</td>
              <td className="px-6 py-4 flex justify-center items-center ">
                <div className=" h-[30px] rounded-md w-[30px] bg-[#dbffeb] text-[#047A3A] flex justify-center items-center ">
                  4
                </div>
              </td>
            </tr>
            <tr className="bg-white text-[16px] font-[500] text-[#202224] opacity-[90%] border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-3 ">
                  <p>1</p>
                  <p>restaurant cleansing service</p>
                </div>
              </th>
              <td className="px-6 py-4 text-center ">160</td>
              <td className="px-6 py-4 flex justify-center items-center ">
                <div className=" h-[30px] rounded-md w-[30px] bg-[#dbffeb] text-[#047A3A] flex justify-center items-center ">
                  4
                </div>
              </td>
            </tr>
            <tr className="bg-white text-[16px] font-[500] text-[#202224] opacity-[90%] border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-3 ">
                  <p>1</p>
                  <p>restaurant cleansing service</p>
                </div>
              </th>
              <td className="px-6 py-4 text-center ">160</td>
              <td className="px-6 py-4 flex justify-center items-center ">
                <div className=" h-[30px] rounded-md w-[30px] bg-[#dbffeb] text-[#047A3A] flex justify-center items-center ">
                  4
                </div>
              </td>
            </tr>
            <tr className="bg-white text-[16px] font-[500] text-[#202224] opacity-[90%] border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-3 ">
                  <p>1</p>
                  <p>restaurant cleansing service</p>
                </div>
              </th>
              <td className="px-6 py-4 text-center ">160</td>
              <td className="px-6 py-4 flex justify-center items-center ">
                <div className=" h-[30px] rounded-md w-[30px] bg-[#dbffeb] text-[#047A3A] flex justify-center items-center ">
                  4
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="md:flex justify-between  md:mt-20  mt-2 ">
        <button className=" mt-3 h-[54px] border-[#DE5B87]  border-[1px] w-[160px] rounded-[6px] text-[#DE5B87] ">
          Delete
        </button>
        <div className="flex gap-2 ">
          <button className="  mt-3 h-[54px] w-[160px] rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] float-right ">
            Cancel
          </button>
          <button className="  mt-3 h-[54px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
