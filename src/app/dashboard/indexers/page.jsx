import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Indexers</p>
      <div className="flex justify-between gap-2 ">
        <p className="text-[17px] font-[500] opacity-[70%] mt-2 ">
        An indexer is a service that will continuously submit your google for indexing .
        </p>
         
        <Link href="/dashboard/integrations/create"  >  <button className=" h-[45px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
            + New Indexer 
          </button> </Link>
      </div>
      <br />
      <div className="relative overflow-x-auto border-[0.6px] rounded-t-lg ">
        <table className="w-full text-sm border-[#D4D4D4] rounded-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[18px] h-[68px] font-[600] text-[#202224]   opacity-[90%] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-5 text-[16px] font-[500] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
              >
               Sparkling stays- google Indexer
              </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-5 text-[16px] font-[500] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
              >
                Sparkling stays- google Indexer
              </th>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
