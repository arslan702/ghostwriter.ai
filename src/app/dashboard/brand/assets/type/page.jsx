import React from "react";
import img from "../../../../../../Images/22.png";
import img1 from "../../../../../../Images/20.png";
import Image from "next/image";
export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Knowledge Base</p>
      <div className="flex  items-center gap-5 flex-wrap md:mt-4 mt-2 ">
        <Image src={img} className=" h-[25px] w-[25px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[500] text-[#475467] ">Knowledge Base</p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[500] text-[#475467] ">Lorem ipsum.</p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[600] text-[#7A73FF] ">
          Lorem ipsum - 1.
        </p>
      </div>
      <div>
        <p className="text-[18px] font-[500] mt-4 text-[#344054] "> Name</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Lorem Ipsum - Preset"
          className="text-[16px] font-[400] h-[40px] w-full outline-none px-4 mt-1 border-[1px] border-[#D0D5DD] rounded-[8px]  "
        />
        <br />
        <p className="text-[18px] font-[500] mt-4 text-[#344054] "> Type</p>

        <form className="">
          <select
            id="countries"
            className=" mt-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Text</option>
            <option value="US">img</option>
          </select>
        </form>
        <p className="text-[18px] font-[500] mt-4 text-[#344054] "> Text</p>
        <textarea
          id="message"
          rows="6"
          className="outline-none mt-1 block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="md:flex justify-between md:mt-5 ">
        <button className=" mt-3 h-[40px] border-[#DE5B87]  border-[1px] md:w-[160px] w-full rounded-[6px] text-[#DE5B87] ">
          Delete
        </button>
        <div className="md:flex gap-2 ">
          <button className="  mt-3 h-[40px] md:w-[160px] w-full rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] md:float-right ">
            Cancel
          </button>
          <button className="  mt-3 h-[40px] md:w-[160px] w-full rounded-[6px] bg-[#7A73FF] text-white md:float-right ">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
