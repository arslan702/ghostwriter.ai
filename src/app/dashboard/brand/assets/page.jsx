import React from "react";
import img from "../../../../../Images/22.png";
import img1 from "../../../../../Images/20.png";
import img2 from "../../../../../Images/23.png";
import img3 from "../../../../../Images/24.png";

import Image from "next/image";
export default function page() {
  return (
    <div className="md:px-12 px-4 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Knowledge Base</p>
      <div className="md:flex  items-center gap-3 mt-3 ">
        <Image src={img} className=" h-[20px] w-[20px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[500] text-[#475467] ">Presets</p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[600] text-[#7A73FF] ">
          Lorem ipsum - Preset.
        </p>
      </div>
      <p className="text-[18px] font-[500] leading-[30px] mt-3 opacity-[70%] ">
        Manage All aspects of your Knowledge Base{" "}
      </p>
      <p className="text-[18px] font-[500] mt-3 text-[#344054] ">
        Knowledge Base Name
      </p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Lorem Ipsum - Preset"
        className="text-[16px] font-[400] h-[40px] w-full outline-none px-4 mt-1 border-[1px] border-[#D0D5DD] rounded-[8px]  "
      />
      <br />
      <div className="flex justify-between mt-3 ">
        <p className="text-[28px] font-[500] mt-2 ">Assets</p>
        <button className="border-[1px] mt-2 border-[#7A73FF] text-[#7A73FF] rounded-[6px] text-[18px] font-[500] h-[40px] w-[180px] ">
          + Add Assets
        </button>
      </div>
      <br />

      <div className="relative overflow-x-auto border-[1px] rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#F5F4FF] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                {/* Color */}
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                TYPE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem ipsum -1{" "}
              </th>
              <td className="px-6 py-4">{/* Silver */}</td>
              <td className="px-6 py-4   ">
                <p className="bg-[#dbfeeb] rounded-md  h-[30px] w-[60px] flex justify-center items-center text-[#047A3A] ">
                  Loaded
                </p>
              </td>
              <td className="px-6 py-4">
                <Image src={img2} className="h-[21px] w-[21px] " />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem ipsum -2{" "}
              </th>
              <td className="px-6 py-4">{/* White */}</td>
              <td className="px-6 py-4">
                <p className="bg-[#dbfeeb] rounded-md  h-[30px] w-[60px] flex justify-center items-center text-[#047A3A] ">
                  Loaded
                </p>
              </td>
              <td className="px-6 py-4">
                <Image src={img2} className="h-[21px] w-[21px] " />
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem ipsum -3{" "}
              </th>
              <td className="px-6 py-4">{/* Black */}</td>
              <td className="px-6 py-4">
                <p className="bg-[#dbfeeb] rounded-md  h-[30px] w-[60px] flex justify-center items-center text-[#047A3A] ">
                  Loaded
                </p>
              </td>
              <td className="px-6 py-4">
                <Image src={img3} className="h-[21px] w-[21px] " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="md:flex justify-between md:mt-5 ">
        <button className=" mt-3 h-[40px] border-[#DE5B87]  border-[1px] w-[160px] rounded-[6px] text-[#DE5B87] ">
          Delete
        </button>
        <div className="flex gap-2 ">
          <button className="  mt-3 h-[40px] w-[160px] rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] float-right ">
            Cancel
          </button>
          <button className="  mt-3 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
