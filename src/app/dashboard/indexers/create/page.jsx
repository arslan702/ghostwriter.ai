import React from "react";
import img from "../../../../../Images/31.png";
import img1 from "../../../../../Images/20.png";
import Image from "next/image";
import Link from "next/link";


export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Indexers </p>
      <div className="flex  items-center gap-3 ">
        <Image src={img} className=" h-[21px] w-[20px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[20px] font-[500] text-[#475467] ">Indexers</p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[20px] font-[600] text-[#7A73FF] bg-[#faf9fb] px-3 py-1 rounded-md ">
        Sparkling Stays- Google Indexer
        </p>
      </div>
      <div className=" gap-2  px-2 ">
        <form className=" w-full mx-auto mt-2 ">
          <label
            for="qty"
            className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
          >
            Indexer Name
          </label>
          <select
            id="qty"
            className="  border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Sparkling Stays - Google Indexer</option>
           
          </select>
        </form> 
        <p className="text-[14px] font-[400] text-[#475467] opacity-[70%] mt-2 " >This is just for convenience</p>
      </div>
      <br />
     <div>
      <p>Connect with Google</p>
      <Link to href="https://www.google.com/" target="_blank" >
  <button className="bg-[#7A73FF] h-[49px] w-[495px] text-white rounded-lg mt-2 ">
    <span className="font-[700] text-[20px]">G</span> Connect
  </button>
</Link>
    <br />
    <p className="mt-2 text-[14px] font-[500] opacity-[70%] text-[#475467] " > <b>Note:</b>  We can only index articles on websites linked to this google account.</p>
     </div>
     <br />
     <div>
      <p className="text-[22px] font-[500] text-[#344054] " >Compatible Integrations</p>
      <div className="h-[350px] w-full border-[1px] rounded-lg " >
<p className=" text-[16px] font-[700] opacity-[90%] text-[#202224] bg-[#F5F4FF] flex items-center px-12 h-[55px] " >NAME</p>
     <p className=" opacity-[30%] text-[20px] h-[300px] flex justify-center items-center " >No Integrations Found</p>
      </div>
      <p className="text-[14px] font-[500] text-[#475467] opacity-[70%] mt-2 " >Publishing articles to these integrations will trigger indexing. <br />
Only integrations that act on websites linked to your Google account are displayed here.</p>
     </div>
       
        <div className="flex justify-end gap-2 md:mt-10 ">
          <button className="  mt-3 h-[54px] w-[160px] rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] float-right ">
            Cancel
          </button>
          <button className="  mt-3 h-[54px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
            Save
          </button>
      </div>
    </div>
  );
}
