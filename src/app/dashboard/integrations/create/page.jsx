"use client";
import React, { useEffect, useState } from "react";
import img from "../../../../../Images/30.png";
import img1 from "../../../../../Images/20.png";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "@/config";

export default function page() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [siteId, setSiteId] = useState("");
  const [authorWix, setAuthorWix] = useState("");
  const [baseUrlWp, setBaseUrlWp] = useState("");
  const [userNameWp, setUserNameWp] = useState("");
  const [passwordWp, setPasswordWp] = useState("");
  const [authorWp, setAuthorWp] = useState("");
  const [ghostApiKey, setGhostApiKey] = useState("");
  const [ghostAuthor, setGhostAuthoer] = useState("");
  const [shopName, setShopName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [shopifyAuthor, setShopifyAuthor] = useState("");
  const [blogId, setBlogId] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const logedUser = localStorage.getItem("user");
    setUser(logedUser ? JSON.parse(logedUser) : {});
    const getData = setTimeout(() => {
      axios
        .post(`${API_URL}/integrations/get-shopify-blogs`, {
          shopName: shopName,
          accessToken: accessToken,
        })
        .then((response) => {
          console.log(response.data);
          setBlogs(response?.data?.data);
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [shopName, accessToken]);
  console.log({ user });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (active == 1) {
      axios
        .post(`${API_URL}/integrations/create`, {
          name: "wix",
          userId: user?._id,
          wix: {
            apiKey: apiKey,
            siteId: siteId,
            author: authorWix,
            publishImmediately: isChecked,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (active == 2) {
      axios
        .post(`${API_URL}/integrations/create`, {
          name: "wordpress",
          userId: user?._id,
          wordpress: {
            baseUrl: baseUrlWp,
            username: userNameWp,
            password: passwordWp,
            author: authorWp,
            publishImmediately: isChecked,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (active == 4) {
      axios
        .post(`${API_URL}/integrations/create`, {
          name: "ghost",
          userId: user?._id,
          ghost: {
            adminApiKey: ghostApiKey,
            author: ghostAuthor,
            publishImmediately: isChecked,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (active == 5) {
      axios
        .post(`${API_URL}/integrations/create`, {
          name: "shopify",
          userId: user?._id,
          shopify: {
            shopName: shopName,
            accessToken: accessToken,
            author: shopifyAuthor,
            publishImmediately: isChecked,
            blogId: blogId,
        },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="md:px-12 px-2 md:py-10 py-8">
      <p className="text-[34px] font-[500] "> Integrations </p>
      <div className="flex  items-center gap-3 flex-wrap md:mt-4 mt-2 ">
        <Image src={img} alt="img" className="h-[21px] w-[20px]" />
        <Image src={img1} alt="img" className="h-[15px] w-[20px]" />
        <p className="text-[18px] font-[500] text-[#475467] ">Integrations</p>
        <Image src={img1} alt="img" className="h-[15px] w-[20px]" />
        <p className="text-[18px] font-[600] text-[#7A73FF] bg-[#faf9fb] px-3 py-1 rounded-md ">
          My wix Blog
        </p>
      </div>
      <div className="flex flex-row mt-5">
        <div
          onClick={() => setActive(1)}
          className={`flex justify-center items-center rounded-[4px] font-[600] w-[150px] h-[50px] cursor-pointer ${
            active == 1 && "bg-[#7A73FF1A]"
          } ${active == 1 ? "text-[#7A73FF]" : "text-[#475467]"}`}
        >
          Wix
        </div>
        <div
          onClick={() => setActive(2)}
          className={`flex justify-center items-center rounded-[4px] font-[600] w-[150px] h-[50px] cursor-pointer ${
            active == 2 && "bg-[#7A73FF1A]"
          } ${active == 2 ? "text-[#7A73FF]" : "text-[#475467]"}`}
        >
          WordPress
        </div>
        <div
          onClick={() => setActive(3)}
          className={`flex justify-center items-center rounded-[4px] font-[600] w-[150px] h-[50px] cursor-pointer ${
            active == 3 && "bg-[#7A73FF1A]"
          } ${active == 3 ? "text-[#7A73FF]" : "text-[#475467]"}`}
        >
          Webflow
        </div>
        <div
          onClick={() => setActive(4)}
          className={`flex justify-center items-center rounded-[4px] font-[600] w-[150px] h-[50px] cursor-pointer ${
            active == 4 && "bg-[#7A73FF1A]"
          } ${active == 4 ? "text-[#7A73FF]" : "text-[#475467]"}`}
        >
          Ghost
        </div>
        <div
          onClick={() => setActive(5)}
          className={`flex justify-center items-center rounded-[4px] font-[600] w-[150px] h-[50px] cursor-pointer ${
            active == 5 && "bg-[#7A73FF1A]"
          } ${active == 5 ? "text-[#7A73FF]" : "text-[#475467]"}`}
        >
          Shopify
        </div>
      </div>
      {active == 1 && (
        <div>
          <div className="md:flex">
            <p className=" text-[18px] font-[500] opacity-70 md:mt-8 mt-2  ">
              Manage your Wix integrations
            </p>
          </div>
          <div className="md:flex gap-3  px-2 mt-4 ">
            <div className="mt-4  ">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054]"
              >
                API Key
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="API KEY"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054] "
              >
                Site ID
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                value={siteId}
                onChange={(e) => setSiteId(e.target.value)}
                placeholder="SITE ID"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <div className=" gap-2  px-2 ">
            <div className=" w-full mx-auto mt-4 ">
              <label
                htmlFor="qty"
                className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                name=""
                id=""
                value={authorWix}
                onChange={(e) => setAuthorWix(e.target.value)}
                placeholder="Author"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
            {/* <form className=" w-full mx-auto mt-4 ">
          <label
            for="qty"
            className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
          >
            Time gap between each post
          </label>
          <select
            id="qty"
            className="border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>15 Minutes</option>
            <option selected>30 Minutes</option>
            <option selected>45 Minutes</option>
          </select>
        </form> */}
          </div>
          <br />
          <div className="px-3">
            <p className="text-[22px] font-[500] ">Publish Immediately </p>
            <div className="flex gap-3 mt-2 ">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                <span className="ms-3 text-[18px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                  Publish
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      {active == 2 && (
        <div>
          <div className="md:flex">
            <p className="text-[18px] font-[500] opacity-70 md:mt-8 mt-2">
              Manage your WordPress integrations
            </p>
          </div>
          <div className="md:flex gap-3 px-2 mt-4">
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054]"
              >
                Base URL
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                value={baseUrlWp}
                onChange={(e) => setBaseUrlWp(e.target.value)}
                placeholder="Base URL"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054] "
              >
                Username
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                value={userNameWp}
                onChange={(e) => setUserNameWp(e.target.value)}
                placeholder="username"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <div className=" gap-2  px-2 ">
            <div className=" w-full mx-auto mt-4 ">
              <label
                htmlFor=""
                className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
              >
                Password
              </label>
              <input
                type="text"
                name=""
                id=""
                value={passwordWp}
                onChange={(e) => setPasswordWp(e.target.value)}
                placeholder="App Password"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
            <div className=" w-full mx-auto mt-4 ">
              <label
                htmlFor=""
                className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                name=""
                id=""
                value={authorWp}
                onChange={(e) => setAuthorWp(e.target.value)}
                placeholder="Author"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <br />
          <div className="px-3">
            <p className="text-[22px] font-[500] ">Publish Immediately </p>
            <div className="flex gap-3 mt-2 ">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                <span className="ms-3 text-[18px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                  Publish
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      {active == 3 && (
        <div>
          <div className="md:flex">
            <p className="text-[18px] font-[500] opacity-70 md:mt-8 mt-2">
              Manage your Webflow integrations
            </p>
          </div>
          <div className="md:flex gap-3 px-2 mt-4">
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054]"
              >
                Access Token
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Base URL"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <div className=" gap-2  px-2 ">
            <div className=" w-full mx-auto mt-4 ">
              <label
                htmlFor=""
                className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Author"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <br />
          <div className="px-3">
            <p className="text-[22px] font-[500] ">Publish Immediately </p>
            <div className="flex gap-3 mt-2 ">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                <span className="ms-3 text-[18px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                  Publish
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      {active == 4 && (
        <div>
          <div className="md:flex">
            <p className="text-[18px] font-[500] opacity-70 md:mt-8 mt-2">
              Manage your Ghost integrations
            </p>
          </div>
          <div className="md:flex gap-3 px-2 mt-4">
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054]"
              >
                Admin API Key
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                value={ghostApiKey}
                onChange={(e) => setGhostApiKey(e.target.value)}
                placeholder="admin api key"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <div className=" gap-2  px-2 ">
            <div className=" w-full mx-auto mt-4 ">
              <label
                htmlFor=""
                className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                name=""
                id=""
                value={ghostAuthor}
                onChange={(e) => setGhostAuthoer(e.target.value)}
                placeholder="Author"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <br />
          <div className="px-3">
            <p className="text-[22px] font-[500] ">Publish Immediately </p>
            <div className="flex gap-3 mt-2 ">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                <span className="ms-3 text-[18px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                  Publish
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      {active == 5 && (
        <div>
          <div className="md:flex">
            <p className="text-[18px] font-[500] opacity-70 md:mt-8 mt-2">
              Manage your Shopify integrations
            </p>
          </div>
          <div className="md:flex gap-3 px-2 mt-4">
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054]"
              >
                Shop Name
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="shop name"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[18px] font-[500] text-[#344054]"
              >
                Access Token
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                placeholder="access token"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <div className=" gap-2  px-2 ">
            <div className="w-full mx-auto mt-4">
              <label
                htmlFor="blog-select"
                className="block mb-2 text-[16px] leading-[24px] font-[500] text-[#344054] dark:text-white"
              >
                Select Blog
              </label>
              <select
                id="blog-select"
                value={blogId}
                onChange={(e) => setBlogId(e.target.value)}
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg"
              >
                <option value="">Select Blog</option>
                {blogs?.length && blogs?.map((blog) => (
                  <option key={blog.id} value={blog.id}>
                    {blog.title}
                  </option>
                ))}
              </select>
            </div>
            <div className=" w-full mx-auto mt-4 ">
              <label
                htmlFor=""
                className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                name=""
                id=""
                value={shopifyAuthor}
                onChange={(e) => setShopifyAuthor(e.target.value)}
                placeholder="Author"
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg "
              />
            </div>
          </div>
          <br />
          <div className="px-3">
            <p className="text-[22px] font-[500] ">Publish Immediately </p>
            <div className="flex gap-3 mt-2 ">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                <span className="ms-3 text-[18px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                  Publish
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      <div className="md:flex justify-between  md:mt-12 mt-6">
        <button className="mt-3 h-[50px] border-[#DE5B87]  border-[1px] md:w-[160px] w-full rounded-[6px] text-[#DE5B87]">
          Delete
        </button>
        <div className="md:flex gap-2 ">
          <button className="mt-3 h-[50px] md:w-[160px] w-full rounded-[6px] border-[#7A73FF] border-[1px] text-[#7A73FF] float-right">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="mt-3 h-[50px] md:w-[160px] w-full rounded-[6px] bg-[#7A73FF] text-white float-right"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
