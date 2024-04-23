import React from "react";

export default function page() {
  return (
    <div className="md:px-8 px-4 md:py-20 py-8 ">
      <p className="text-[30px] font-[500] "> Linking Audits</p>
      <div className="flex justify-between gap-2 ">
        <p className="text-[16px] font-[500] opacity-[50%] mt-2  ">
        Manage Your Account
        </p>
      </div>
      <br />
        
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail Address</label>
        <input type="email" id="email" className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
  <p className=" text-[14px] font-[400] opacity-40 mt-1 " >You’ll be sent a verification link to switch e-mails.</p>
    </div> 
      <button className=" h-[40px] w-[180px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
        Send Verification
          </button> 
          <br />
    </div>
  );
}
