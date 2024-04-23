import React from "react";
import {
  IoMdArrowRoundBack,
  IoMdArrowRoundForward,
} from "react-icons/io";

export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Linking Audits</p>
      <div className="flex justify-between gap-2 ">
        <p className="text-[16px] font-[500] opacity-[50%] mt-2  ">
          Every time you request links for your articles, an audit will be
          generated.
        </p>
      </div>
      <br />
      <div className="overflow-x-auto border-[1px] rounded-t-lg ">
        <table className="w-full  text-left  rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%]  ">
            <tr>
              <th scope="col" className="w-1/2 px-6 py-5">
                ARTICLE{" "}
              </th>
              <th scope="col" className="w-1/6 px-6 py-5">
                INTEGRATION{" "}
              </th>
              <th scope="col" className="w-1/6 px-6 py-5 text-center ">
                STATUS
              </th>
              <th scope="col" className="w-1/6 px-6 py-5">
                DATE
              </th>
            </tr>
          </thead>
          <tbody className="h-[400px] relative ">
            <button
              type="button"
              className="flex gap-2 absolute bottom-5 left-5 text-black opacity-[60%] border-[1px] bg-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              <IoMdArrowRoundBack className=" h-[20px] w-[20px] font-[800] opacity-[60%] " />
              Previous
            </button>
            <div className=" ">
              <button
                type="button"
                className="flex gap-2 opacity-[60%] absolute bottom-5 right-5 text-black border-[1px] bg-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Next
                <IoMdArrowRoundForward className="h-[16px] w-[16px] font-[800] mt-[2px] opacity-[60%]  " />
              </button>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
