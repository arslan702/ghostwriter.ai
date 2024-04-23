import React from "react";
import img from '../../../../Images/28.png'
import Image from "next/image";


export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8 ">
      <p className="text-[34px] font-[500]  "> Autoblogs </p>
      <div className="md:flex md:justify-between md:gap-2 ">
        <p className="md:text-[17px] text-[15px] font-[500] opacity-[70%] md:w-[600px] mt-2 ">
          An Autoblogs allows Ghostwriter AI to generate articles in a certain
          schedule and send them to one of your integrations.
        </p>

        <button className="  mt-3 h-[45px] w-[180px] rounded-[6px] bg-[#7A73FF] text-white md:float-right ">
          + New AutoBlog
        </button>
      </div>
      <br />

      <div className="relative overflow-x-auto rounded-t-[6px]">
        <table className="w-full border-[1px]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[18px] h-[66px] font-[800]  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              NAME
              </th>
              <th scope="col" className="px-6 py-3">
              STATUS
              </th>
              <th scope="col" className="px-6 py-3">
              NEXT BATCH
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-[17px] font-[600] text-[#202224] opacity-[90%] border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>

              <td className="px-6 py-4">
                <div className="flex  items-center justify-center gap-2 h-[32px] w-[78px] bg-[#eeeeee] rounded-md  " >
                <Image src={img} className="h-[8px] w-[8px] "  />
                <p className=" text-[12px] font-[700] text-[#919191] " >Paused</p>
                </div>
              </td>
            </tr>
            <tr className="bg-white text-[17px] font-[600] text-[#202224] opacity-[90%] border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">
                <div className="flex  items-center justify-center gap-2 h-[32px] w-[78px] bg-[#eeeeee] rounded-md  " >
                <Image src={img} className="h-[8px] w-[8px] "  />
                <p className=" text-[12px] font-[700] text-[#919191] " >Paused</p>
                </div>
              </td>
            </tr>
            <tr className="bg-white text-[17px] font-[600] text-[#202224] opacity-[90%] dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">
                <div className="flex  items-center justify-center gap-2 h-[32px] w-[78px] bg-[#eeeeee] rounded-md  " >
                <Image src={img} className="h-[8px] w-[8px] "  />
                <p className=" text-[12px] font-[700] text-[#919191] " >Paused</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
