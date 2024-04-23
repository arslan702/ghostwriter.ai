import React from "react";
import Image from "next/image";
import img from "../../../../../Images/17.png";
import img1 from "../../../../../Images/18.png";
import Link from "next/link";

export default function page() {
  return (
    <div className="md:px-6 px-2 md:py-20 ">
      <p className="text-[34px] font-[500] ">History</p>
      <div className="flex gap-5 md:mt-4 mt-2 ">
        <Image src={img} alt="img" className=" h-[22px] w-[22px] text-[#919191] " />
        <p className="text-[20px] font-[500] ">All Articles</p>
        <p className="text-[20px] font-[600] text-[#7A73FF] ">History</p>
      </div>
      <p className="text-[18px] font-[400] opacity-[70%] md:mt-4 mt-2  ">
        Your Latest Batches
      </p>
      <div className="mt-3 flex justify-between ">
        <div className="flex gap-2 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by Name"
            className="rounded-[10px] outline-none h-[44px] w-[250px] px-4 border-[1px] "
          />
          <form className="h-[44px] w-[180px]">
            <select
              id="countries"
              className=" outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Filter By autoblog</option>
            </select>
          </form>

          <button className="h-[44px] w-[94px] bg-[#7A73FF] rounded-[10px] text-white ">
            Apply
          </button>
        </div>
        <div className="flex gap-3 ">
          <div className="flex gap-3 mt-2 ">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
              <span className="ms-3 text-[18px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                Archived
              </span>
            </label>
          </div>
        </div>
      </div>
      <br />
      <div className="relative ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-6 text-[18px] font-[700] text-[#202224] opacity-[90%]   "
                style={{ width: "50%" }}
              >
                NAME
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-[18px] font-[700] text-[#202224] opacity-[90%] text-center "
                style={{ width: "5%" }}
              >
                ARTICLES
              </th>
              <th
                scope="col"
                className="px-6 py-6  text-[18px] font-[700] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                AUTO BLOG
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-[18px] font-[700] text-[#202224] opacity-[90%] text-center"
                style={{ width: "10%" }}
              >
                STATUS
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-[18px] font-[700] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                DATE
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-[18px] font-[700] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                COST
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%]  whitespace-nowrap dark:text-white"
                style={{ width: "50%", height: "auto" }}
              >
                <Link href="/" style={{ width: "50%" }} className="text-wrap ">
                  Montreal cleaning services
                </Link>
              </th>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                10
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                10 Blogs...
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#047A3A] opacity-[90%] text-center  "
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center gap-1 ">
                  <Image src={img1} alt="img" />
                  <span>Done</span>
                </div>
              </td>
              <td
                className=" py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                60
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%]  whitespace-nowrap dark:text-white"
                style={{ width: "50%", height: "auto" }}
              >
                <Link href="/" style={{ width: "50%" }} className="text-wrap ">
                  Montreal cleaning services
                </Link>
              </th>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                10
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                10 Blogs...
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#047A3A] opacity-[90%] text-center  "
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center gap-1 ">
                  <Image src={img1} alt="img"/>
                  <span>Done</span>
                </div>
              </td>
              <td
                className=" py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                60
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%]  whitespace-nowrap dark:text-white"
                style={{ width: "50%", height: "auto" }}
              >
                <Link href="/" style={{ width: "50%" }} className="text-wrap ">
                  Montreal cleaning services
                </Link>
              </th>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                10
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                10 Blogs...
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#047A3A] opacity-[90%] text-center  "
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center gap-1 ">
                  <Image src={img1} alt="img"/>
                  <span>Done</span>
                </div>
              </td>
              <td
                className=" py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                60
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%]  whitespace-nowrap dark:text-white"
                style={{ width: "50%", height: "auto" }}
              >
                <Link href="/" style={{ width: "50%" }} className="text-wrap ">
                  Montreal cleaning services
                </Link>
              </th>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                10
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                10 Blogs...
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#047A3A] opacity-[90%] text-center  "
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center gap-1 ">
                  <Image src={img1} alt="img"/>
                  <span>Done</span>
                </div>
              </td>
              <td
                className=" py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
              <td
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center"
                style={{ width: "5%" }}
              >
                60
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
