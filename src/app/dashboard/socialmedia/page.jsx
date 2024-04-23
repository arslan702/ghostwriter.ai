import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="md:px-8  md:py-20 py-8 ">
      <p className="text-[34px] font-[500] px-4 "> Social Media</p>
      <div className="md:flex justify-between gap-2 px-4 ">
        <p className="text-[16px] font-[500] opacity-[50%] mt-2 ">
        You can Syndicate your Publications to one of your Social Medias .
        </p>
         
        <Link href="/dashboard/integrations/create"  >  <button className=" h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] mt-2 text-white md:float-right ">
            + New Indexer 
          </button> </Link>
      </div>
      <br />
      <div className="relative overflow-x-auto border-[0.6px] rounded-t-lg ">
        <table className="w-full h-[500px]  text-sm border-[#D4D4D4] rounded-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[18px] h-[68px] font-[800] text-[#202224]   opacity-[90%] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                name
              </th>
            </tr>
          </thead>
            <div className="flex justify-center items-center h-[400px] opacity-40 " >
            No Socials Found
            </div>
        
        </table>
      </div>
    </div>
  );
}
