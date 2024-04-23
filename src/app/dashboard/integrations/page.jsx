"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/config";

export default function page() {
  const [integrations, setIntegrations] = useState([]);

  useEffect(() => {
    const logUser = JSON.parse(localStorage.getItem('user') || '');
    axios.post(`${API_URL}/integrations/get-all`, { filter: { userId: logUser?._id}})
    .then((res) => {
      setIntegrations(res?.data?.data)
    })
    .catch((err) => {
      console.log({err})
    })
  },[])
  return (
    <div className="md:px-12 px-4 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Integrations </p>
      <div className="md:flex justify-between gap-2 ">
        <p className="text-[17px] font-[500] opacity-[70%] md:w-[600px] mt-5 ">
          Integrations allow you to publish your articles straight to your
          website.
        </p>

        <Link href="/dashboard/integrations/create">
          {" "}
          <button className="  mt-3 h-[45px] w-[180px] rounded-[6px] bg-[#7A73FF] text-white md:float-right ">
            + New Integration
          </button>{" "}
        </Link>
      </div>
      <br />

      <div className="relative overflow-x-auto rounded-t-[6px]">
        <table className="w-full border-[1px]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[18px] h-[66px] font-[800]  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {integrations?.map((integ) => (
            <tr key={integ?._id} className="bg-white text-[18px] font-[600] text-[#202224] opacity-[85%] border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[85%] "
              >
                {integ?.name}
              </th>

              {/* <td className="px-6 py-4">WIX</td> */}
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
