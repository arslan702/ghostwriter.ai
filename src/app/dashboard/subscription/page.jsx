import React from "react";
import { FaBlogger, FaShopify, FaYoutube } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { IoMdCheckbox } from "react-icons/io";
import { TbAlertCircle } from "react-icons/tb";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20">
      <p className="text-[20px] font-[600] ">Subscription</p>
      <br />
      <div className="flex justify-center gap-3 " >
        <p className=" pt-2 " >Billed Monthly</p>
        <div className="flex gap-3 mt-2 ">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
            
          </label>
        </div>
        <p className=" pt-2 ">Billed Yearly</p>
        <p className=" h-[30px] px-4 mt-1 py-1 bg-black text-white flex justify-center items-center rounded-md " >40% off</p>
      </div>
      <br />
      <br />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 " >
<div className="p-3  h-[590px] py-5 w-full rounded-lg  hover:shadow-2xl mt-2 transition-shadow duration-200 ease-in " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) -10px 0px 30px -15px' }} >
<p className="px-4 py-2 bg-[#F7FAFC] border-[1px] rounded-lg text-center font-[500] text-[18px]  " >AutoBlog $99 / month</p>
<div className="flex justify-center items-center gap-1 h-[50px] border-b  " >
<GiTwoCoins />
<b>150</b>
<p>credits per month</p>
</div>
<div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Up to 2 AutoBlogs</b></p>
<TbAlertCircle  data-tooltip-target="tooltip-default" className="rotate-180 relative text-black   rounded-lg text-lg text-center  "/>
 </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Connect to Web</b></p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>150+</b> supported languages</p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Featured Images</p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>In-Article</b> images</p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p className="flex gap-2 items-center " ><b>Youtube </b> videos <span><FaYoutube /></span> </p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Internal</b> linkings</p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>External </b> linking</p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p className="flex items-center gap-2 " >All <b> Integrations</b> <span className="flex items-center gap-2 " ><FaWordpress /> <FaShopify /> <FaBlogger /> </span> </p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Upto <b> 500,000</b> words/month</p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <button type="button" className="mt-4 text-white bg-[#4f00ff] hover:bg-[#3F00CC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Continue
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

</div>
</div>
<div className="p-3  h-[590px] py-5 w-full rounded-lg  hover:shadow-2xl mt-2 " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) -10px 0px 30px -15px' }} >
<p className="px-4 py-2 bg-[#F7FAFC] border-[1px] rounded-lg text-center font-[500] text-[18px] text-[#9362FF]  " >Business $149 / month</p>
<div className="flex justify-center items-center gap-1 h-[50px] border-b  " >
<GiTwoCoins />
<b>300</b>
<p>credits per month</p>
</div>
<div>
  <p className="text-[14px] text-[#586274] py-3 font-[500] " >ALL FEATURES IN AUTOBLOG, PLUS:</p>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Up to 5 AutoBlogs</b></p>
<TbAlertCircle  data-tooltip-target="tooltip-default" className="rotate-180 relative text-black   rounded-lg text-lg text-center  "/>
 </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Up to <b>1 Sub-Account</b> </p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
  <p>Up to <b>5 Knowledge Bases</b> </p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p className="flex gap-1 " ><b>Automated Social Media</b>  <span className="flex " > <BiLogoFacebookCircle /> <RiTwitterXFill /> </span> </p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Custom Images</b></p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p className="flex gap-2 items-center " > Auto <b>Keyword Research </b></p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Google <b>Auto-Indexing</b> </p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Up to  <b>1,000,000 </b> words/month</p>
  </div>
 <br /> 
  <button type="button" className="md:mt-7 mt-2 text-white bg-[#4f00ff] hover:bg-[#3F00CC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Continue
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

</div>
</div>
<div className="p-3  h-[590px] py-5 w-full rounded-lg  hover:shadow-2xl mt-2 " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) -10px 0px 30px -15px' }} >
<p className="px-4 py-2 bg-[#F7FAFC] border-[1px] rounded-lg text-center font-[500] text-[18px]  " >Agency $429 / month</p>
<div className="flex justify-center items-center gap-1 h-[50px] border-b  " >
<GiTwoCoins />
<b>1,000 </b>
<p>credits per month</p>
</div>
<div>
<p className="text-[14px] text-[#586274] py-3 font-[500] " >ALL FEATURES IN BUSINESS, PLUS:</p>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Unlimited AutoBlogs</b></p>
<TbAlertCircle  data-tooltip-target="tooltip-default" className="rotate-180 relative text-black   rounded-lg text-lg text-center  "/>
 </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Unlimited Sub-Accounts</b></p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Unlimited Knowledge Bases</b> </p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p> <b>External API</b> available </p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Live Chat</b> on Slack</p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Upto <b> 350,000</b> words/month</p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <br /> <br /> <br />
  <button type="button" className="md:mt-14 text-white bg-[#4f00ff] hover:bg-[#3F00CC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Continue
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

</div>
</div>
</div>
<div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:mt-10 mt-2 " >
<div className="p-3 py-5 w-full rounded-lg  hover:shadow-2xl mt-2 transition-shadow duration-200 ease-in " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) -10px 0px 30px -15px' }} >
<p className="px-4 py-2 bg-[#F7FAFC] border-[1px] rounded-lg text-center font-[500] text-[18px]  " >Enterprise</p>
<div className="flex justify-center items-center gap-1 h-[50px] border-b pt-3 py-2  " >
<GiTwoCoins />
<b>Unlimited</b>
<p>credits </p>
<TbAlertCircle className=" rotate-180 " />

</div>
<p className="text-[14px] text-[#586274] py-3 pt-5 font-[500] " >ALL FEATURES IN BUSINESS, PLUS:</p>

<div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Custom Features</b>requests</p>
<TbAlertCircle  data-tooltip-target="tooltip-default" className="rotate-180 relative text-black   rounded-lg text-lg text-center  "/>
 </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Highest Quality</b>output</p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Fastest </b> generation time</p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Priority Support</b></p>
<TbAlertCircle className=" rotate-180 " />
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Whitelabeling</b></p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p><b>Unlimited </b> words/month</p>
  </div>
  <button type="button" className="mt-4 border-[1px] text-[#3F00D6] font-[500] border-[#4f00ff] hover:bg-[#F4EEFF] rounded-lg text-md w-full py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Talk to Us

</button>

</div>
</div>
<div className="p-3 h-[300px] py-5 w-full rounded-lg  hover:shadow-2xl mt-2 " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) -10px 0px 30px -15px' }} >
<p className="px-4 py-2 bg-[#F7FAFC] border-[1px] rounded-lg text-center font-[500] text-[18px]  " >Pay as you go</p>

<div>
  <br />
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Purchase one-time for a higher rate ( 1 = $0.80)</p>
 </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Includes all features in <b>Unlimited Sub-Accounts</b></p>
  </div>
  <div className="flex gap-2 items-center h-[40px] text-[#1a202c] " >
  <IoMdCheckbox className=" h-[20px] w-[20px] " />
<p>Credits <b>do not expire</b>  and last forever. </p>
  </div>
  
  <br /> 
  <button type="button" className="md:mt-1 text-white bg-[#4f00ff] hover:bg-[#3F00CC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Continue
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

</div>
</div>
      </div>
    </div>
  );
}
