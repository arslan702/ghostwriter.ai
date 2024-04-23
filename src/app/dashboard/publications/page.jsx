import React from "react";
import { BsClockHistory } from "react-icons/bs";
import img from "../../../../Images/18.png";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="md:px-6 px-4 md:py-20 py-8 ">
      <div className="md:flex justify-between ">
        <p className="text-[34px] font-[500] ">Publications</p>
        <div className="text-[#7A73FF] flex mt-7 gap-3 ">
          <p className="text-[22px] font-[400] ">Watch Tutorial</p>
          <BsClockHistory className="mt-2" />
        </div>
      </div>
      <p className="text-[17px] mt-2 font-[500] md:w-[70%] w-full text-[#000000] opacity-[70%] ">
        Everytime an article is published to one of your integrations, a
        Publication is created and displayed here. Data refreshed every 10
        seconds.{" "}
      </p>
      <div className="mt-1 md:flex justify-between ">
        <div className="md:flex gap-2  ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Filter By Article"
            className="rounded-[10px] mt-4 outline-none h-[44px] md:w-[180px] w-full text-gray-300 px-4 border-[1px] "
          />
          <form className="h-[44px] md:w-[180px] w-full mt-4 ">
            <select
              id="countries"
              className=" outline-none md:w-[180px] w-full border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Filter By integrations </option>
            </select>
          </form>
          <form className="h-[44px]  md:w-[180px] w-full mt-4">
            <select
              id=""
              className=" outline-none md:w-[180px] border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Filter by Auto blogs </option>
            </select>
          </form>
         
          <Link href="/dashboard/publications/apply">
          {" "}
          <button className="  h-[44px] md:w-[94px] mt-4 w-full bg-[#7A73FF] rounded-[10px] text-white ">
            Apply
          </button>{" "}
        </Link>
        </div>
        <Link href="/dashboard/publications/create">
          {" "}
          <button className="  h-[44px] md:w-[154px] mt-4 w-full bg-[#7A73FF] rounded-[10px] text-white ">
            Create Publication
          </button>{" "}
        </Link>
      </div>
      {/* tables  */}

      <br />
      {/* <div className="relative overflow-x-auto border-[1px] rounded-t-lg ">
        <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 h-[68px] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-[20px] font-[600] text-[#202224] opacity-[90%] "
                style={{ width: "50%" }}
              >
                ARTICLE
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-[20px] font-[600] text-[#202224] opacity-[90%] "
                style={{ width: "20%" }}
              >
                INTEGRATION
              </th>
              <th
                scope="col"
                className="px-6 py-4  text-[20px] font-[600] text-[#202224] opacity-[90%]"
                style={{ width: "10%" }}
              >
                STATUS
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-[20px] font-[600] text-[#202224] opacity-[90%] text-center "
                style={{ width: "20%" }}
              >
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[16px] bg-slate-300 md:w-[50%] w-full   font-[500] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
              >
                <Link href="/articles/history"  className="text-wrap w-full  ">
                  Lorem ipsum dolor , consectetur adipisicing elit.
                </Link>
              </th>
              <td
                className="px-1 text-center py-4 text-[16px] font-[400] text-[#202224] opacity-[90%]"
                style={{ width: "20%" }}
              >
                My Wix Blog Post
              </td>
              <td
                className="px-1 text-center py-4 text-[16px] font-[500] text-[#202224] opacity-[90%]"
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center " >
                <Image src={img} className=" h-[15px] w-[15px] mt-[1px] " />
              <p className="text-[#047A3A] text-[14px] font-[700] " >Published</p>  
              </div>
              </td>
              <td
                className="px-1 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center "
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
                style={{ width: "50%", height: "auto" }}
              >
                <Link href="/articles/history" style={{ width: "50%" }} className="text-wrap ">
                  Lorem ipsum dolor , consectetur adipisicing elit.
                </Link>
              </th>
              <td
                className="px-1 text-center py-4 text-[16px] font-[400] text-[#202224] opacity-[90%]"
                style={{ width: "20%" }}
              >
                My Wix Blog Post
              </td>
              <td
                className="px-1 text-center py-4 text-[16px] font-[500] text-[#202224] opacity-[90%]"
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center " >
                <Image src={img} className=" h-[15px] w-[15px] mt-[1px] " />
              <p className="text-[#047A3A] text-[14px] font-[700] " >Published</p>  
              </div>
              </td>
              <td
                className="px-1 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center "
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
                style={{ width: "50%", height: "auto" }}
              >
                <Link href="/articles/history" style={{ width: "50%" }} className="text-wrap ">
                  Lorem ipsum dolor , consectetur adipisicing elit.
                </Link>
              </th>
              <td
                className="px-1 text-center py-4 text-[16px] font-[400] text-[#202224] opacity-[90%]"
                style={{ width: "20%" }}
              >
                My Wix Blog Post
              </td>
              <td
                className="px-1 text-center py-4 text-[16px] font-[500] text-[#202224] opacity-[90%]"
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center " >
                <Image src={img} className=" h-[15px] w-[15px] mt-[1px] " />
              <p className="text-[#047A3A] text-[14px] font-[700] " >Published</p>  
              </div>
              </td>
              <td
                className="px-1 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center "
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
                style={{ width: "50%", height: "auto" }}
              >
                <Link href="/articles/history" style={{ width: "50%" }} className="text-wrap ">
                  Lorem ipsum dolor , consectetur adipisicing elit.
                </Link>
              </th>
              <td
                className="px-1 text-center py-4 text-[16px] font-[400] text-[#202224] opacity-[90%]"
                style={{ width: "20%" }}
              >
                My Wix Blog Post
              </td>
              <td
                className="px-1 text-center py-4 text-[16px] font-[500] text-[#202224] opacity-[90%]"
                style={{ width: "10%" }}
              >
                <div className="flex justify-center items-center " >
                <Image src={img} className=" h-[15px] w-[15px] mt-[1px] " />
              <p className="text-[#047A3A] text-[14px] font-[700] " >Published</p>  
              </div>
              </td>
              <td
                className="px-1 py-4 text-[16px] font-[500] text-[#202224] opacity-[90%] text-center "
                style={{ width: "20%" }}
              >
                04 Sep, 1:25AM
              </td>
            </tr>
           
           
          </tbody>
        </table>
      </div> */}

      <div className="overflow-x-auto border-[1px] rounded-t-lg ">
        <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-4 text-[20px] font-[500] text-[#202224] opacity-[90%]  ">
            <tr>
              <th scope="col" className="w-2/5 px-6 py-5">
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
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  text-[16px]  font-[500] text-[#202224] opacity-[90%] ">
              <Link href="/dashboard/publications/create">
                {" "}
                <th
                  scope="row"
                  className="w-2/5 px-6 py-4 font-[500]   whitespace-nowrap md:text-wrap  dark:text-white"
                >
                  {" "}
                  Lorem ipsum dolor  elit.{" "}
                </th>
              </Link>
              <td className="w-1/6 px-1 py-4 text-center ">My Wix Blog Post</td>
              <td className="w-1/6  py-4">
                <div className="flex justify-center items-center  ">
                  <Image src={img} className=" h-[15px] w-[15px] mt-[1px] " />
                  <p className="text-[#047A3A] text-[14px] font-[700] ">
                    Published
                  </p>
                </div>
              </td>
              <td className="w-1/6   py-4">04 Sep,1:25AM</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  text-[16px]  font-[500] text-[#202224] opacity-[90%] ">
              <Link href="/dashboard/publications/create">
                {" "}
                <th
                  scope="row"
                  className="w-2/5 px-6 py-4 font-[500]   whitespace-nowrap md:text-wrap  dark:text-white"
                >
                  {" "}
                  Lorem ipsum dolor  elit.{" "}
                </th>
              </Link>
              <td className="w-1/6 px-1 py-4 text-center ">My Wix Blog Post</td>
              <td className="w-1/6  py-4">
                <div className="flex justify-center items-center  ">
                  <Image src={img} className=" h-[15px] w-[15px] mt-[1px] " />
                  <p className="text-[#047A3A] text-[14px] font-[700] ">
                    Published
                  </p>
                </div>
              </td>
              <td className="w-1/6   py-4">04 Sep,1:25AM</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  text-[16px]  font-[500] text-[#202224] opacity-[90%] ">
              <Link href="/dashboard/publications/create">
                {" "}
                <th
                  scope="row"
                  className="w-2/5 px-6 py-4 font-[500]   whitespace-nowrap md:text-wrap  dark:text-white"
                >
                  {" "}
                  Lorem ipsum dolor  elit.{" "}
                </th>
              </Link>
              <td className="w-1/6 px-1 py-4 text-center ">My Wix Blog Post</td>
              <td className="w-1/6  py-4">
                <div className="flex justify-center items-center  ">
                  <Image src={img} className=" h-[15px] w-[15px] mt-[1px] " />
                  <p className="text-[#047A3A] text-[14px] font-[700] ">
                    Published
                  </p>
                </div>
              </td>
              <td className="w-1/6   py-4">04 Sep,1:25AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
