"use client";
import { API_URL } from "@/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Contents() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const logUser = localStorage.getItem('user');
    setUser(logUser ? JSON.parse(logUser) : '');
  },[])

  const [base, setBase] = useState({
    creationMode: '',
    articleTitle: '' 
  });
  const [content, setContent] = useState({
    language: '',
    targetCountry: '',
    toneOfVoice: '',
    pointOfView: '',
    formality: '',
    customInstructions: '',
    includeExactKeywords: '',
  })
  const [formatting, setFormatting] = useState({
    bold: false,
    italics: false,
    tables: false,
    qoutes: false,
  })
  const [structure, setStructure] = useState({
    callToAction: '',
    keyTakeAways: false,
    conclusion: false,
    faqs: false,
    actualSize: '',
  })
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // If checked, update the state
    if (checked) {
      setBase({
        creationMode: name,
      });
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/configurations/generate-article`, {
      title: base?.articleTitle,
      noOfArticles: 1,
      creationMode: `Article creation mode should be ${base?.creationMode}`,
      language: `Language of article should be ${content?.language}`,
      targetCountry: `I want the target country of this article to be ${content?.targetCountry}`,
      toneOfVoice: `The tone of article should be ${content?.toneOfVoice}`,
      pointOfView: `The point of view is ${content?.pointOfView}`,
      formality: `The formality of article is ${content?.formality}`,
      customInstructions: content?.customInstructions,
      includeExactKeywords: `Please include these keywords in the article: ${content?.includeExactKeywords}`,
      bold: formatting?.bold ? 'Please bold the important keywords in article.' : '',
      italics: formatting?.italics ? 'Please Use Italics for Subtle emphasis in article' : '',
      tables: formatting?.tables ? 'If appropriate, please include tables in article' : '',
      qoutes: formatting?.qoutes ? 'If appropriate, please include quotes/tips/recommendations in your article' : '',
      callToAction: structure?.callToAction ? `Please add an extra h3 to article with a call-to-action to this ${structure?.callToAction}` : '',
      keyTakeAways: structure?.keyTakeAways ? `Please add a Key Takeaways section at the beggining of the article and don't add this line in article` : '',
      conclusion: structure?.conclusion ? `Please add conclusion section at the end of article and don't include this line in article` : '',
      faqs: structure?.faqs ? 'Please add frequently asked questions section at the end of article and do not include this line in article' : '',
      actualSize: structure?.actualSize ? `actual size should be ${structure?.actualSize}` : '',
      userId: user?._id
    })
    .then((res) => {
      console.log({res})
    })
    .catch((err) => {
      console.log({err})
    })
  }

  return (
    <div className="md:px-8 px-4 md:pt-20  mb-5 ">
      <p className="md:text-[30px] text-[20px] font-[500] leading-[66px] text-[#000000]  ">
        Generate Articles
      </p>
      <p className="md:mt-[16px] mt-1 md:font-[500] font-[400] md:text-[20px] text-[14px] leading-[30px] ">
        Fill the information below to start generating articles for your
        business.
      </p>
      <div className="mt-5 md:flex justify-between gap-3 ">
        <div className="flex gap-3 ">
          <p className="h-[40px] w-[20px] rounded-[6px] bg-[#7A73FF] text-white flex justify-center items-center text-[14px] font-[400] "></p>
          <p className="text-[20px] font-[600] leading-[20px] text-[#7A73FF] pt-3 ">
            1. Set your configuration
          </p>
        </div>
        <div className="md:flex relative gap-3 ">
          <button
            onClick={toggleSubMenu}
            className="border-[1px] md:mt-0 mt-2  border-[#E2E8F0] text-[14px] font-[500] leading-[24px] hover:border-[#7A73FF] h-[44px] md:w-[168px] w-full px-2 flex justify-between items-center py-2 rounded-[8px] "
          >
            Load Template{" "}
            <span className="ml-1">
              <RiArrowDropDownLine className="text-[20px] " />
            </span>
          </button>
          {isOpen && (
            <div className="absolute top-8 mt-2 bg-white border  md:w-[168px] w-full border-blue-500 rounded-md shadow-lg">
              {/* Submenu items */}
              <div className="px-4 py-2">Template 1</div>
              <div className="px-4 py-2">Template 2</div>
              <div className="px-4 py-2">Template 3</div>
            </div>
          )}
          <button className="border-[1px] md:mt-0 mt-2 border-[#7A73FF] md:w-[187px] w-full font-[500]  text-[14px] text-[#7A73FF] rounded-[10px] h-[44px] px-2  ">
            + Create Template
          </button>
        </div>
      </div>
      <br />
      <div className="h-[500px] w-full  ">
        {/* progress bar */}
        <div className="flex items-center">
          {/* <!-- Step 1 --> */}
          <div className="flex items-center ">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>

          {/* <!-- Border --> */}
          <div className="border-t border-gray-300 h-px flex-1 "></div>

          {/* <!-- Step 2 --> */}
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>

          {/* <!-- Border --> */}
          <div className="border-t border-gray-300 h-px flex-1"></div>

          {/* <!-- Step 3 --> */}
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>
          {/* <!-- Border --> */}
          <div className="border-t border-gray-300 h-px flex-1"></div>

          {/* <!-- Step 4 --> */}
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>
          {/* <!-- Border --> */}
          <div className="border-t border-gray-300 h-px flex-1"></div>

          {/* <!-- Step 5 --> */}
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>
          {/* <!-- Border --> */}
          <div className="border-t border-gray-300 h-px flex-1"></div>

          {/* <!-- Step 6 --> */}
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>
          {/* <!-- Border --> */}
          <div className="border-t border-gray-300 h-px flex-1"></div>

          {/* <!-- Step 7 --> */}
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>
          {/* <!-- Border --> */}
          <div className="border-t border-gray-300 h-px flex-1 "></div>

          {/* <!-- Step 8 --> */}
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] border-gray-300 border-[1px] rounded-full flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-[#EAECF0] rounded-full "></div>
            </div>
          </div>
        </div>

        {/* tabs  */}
        <div className="  ">
          <div className=" flex flex-row  text-[16px] justify-between font-[600] mt-1 ">
            {/* <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? '' : 'w-[245px]  '}>Base</button> */}
            <button
              onClick={() => handleTabClick(0)}
              className={activeTab === 0 ? "active text-[#7A73FF] " : "  "}
            >
              Base
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? "active text-[#7A73FF]" : "  "}
            >
              Content
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={activeTab === 2 ? "active text-[#7A73FF]" : ""}
            >
              Knowledge{" "}
            </button>
            <button
              onClick={() => handleTabClick(3)}
              className={activeTab === 3 ? "active text-[#7A73FF]" : ""}
            >
              Formatting
            </button>
            <button
              onClick={() => handleTabClick(4)}
              className={activeTab === 4 ? "active text-[#7A73FF]" : " "}
            >
              Structure
            </button>
            <button
              onClick={() => handleTabClick(5)}
              className={activeTab === 5 ? "active text-[#7A73FF]" : ""}
            >
              Internal <br /> Linking
            </button>
            <button
              onClick={() => handleTabClick(6)}
              className={activeTab === 6 ? "active text-[#7A73FF]" : ""}
            >
              External <br /> Linking{" "}
            </button>
            <button
              onClick={() => handleTabClick(7)}
              className={activeTab === 7 ? "active text-[#7A73FF]" : ""}
            >
              {" "}
              Media{" "}
            </button>
          </div>
          {/* tabs content start from here  */}

          <div className="tab-content mt-5 ">
            {/* Base */}
            {activeTab === 0 && (
              <div className=" relative h-[600px] border-[1px] rounded-[10px] shadow-md  ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex  md:px-10 px-4 items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF]">Base</p>
                </div>
                <div className="py-5  md:px-10 px-4 ">
                  <p className="text-[16px] font-[500] leading-[24px] text-[#344054] ">
                    Creation Mode
                  </p>
                  <div className="md:flex md:space-x-20 mt-4 ">
                    <div className="flex gap-4 ">
                      <input type="checkbox" name="keywords" id="" checked={base.creationMode === 'keywords'} onChange={handleCheckboxChange} />
                      <p className="text-[14px] font-[400] ">Keywords</p>
                    </div>
                    <div className="flex gap-4 ">
                      <input type="checkbox" name="title" id="" checked={base.creationMode === 'title'} onChange={handleCheckboxChange} />
                      <p className="text-[14px] font-[400] ">Title</p>
                    </div>
                    <div className="flex gap-4 ">
                      <input type="checkbox" name="description" id="" checked={base.creationMode === 'description'} onChange={handleCheckboxChange} />
                      <p className="text-[14px] font-[400] ">Description</p>
                    </div>
                    <div className="flex gap-4 ">
                      <input type="checkbox" name="keyword monitor" id="" checked={base.creationMode === 'keyword monitor'} onChange={handleCheckboxChange}/>
                      <p className="text-[14px] font-[400] ">Keyword Monitor</p>
                    </div>
                  </div>
                  <br />
                  <div>
                    <label
                      for="message"
                      className=" leading-[24px] mb-2 text-[16px] font-[500] text-gray-900 dark:text-white"
                    >
                      {/* Titles (1 per line) */}
                      Title
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={base?.articleTitle}
                      onChange={(e) => setBase({...base, articleTitle: e.target.value})}
                      className="mt-2 p-2.5 w-full text-sm text-gray-900   rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-[2px] focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your keyword here..."
                    ></textarea>
                    <p className="text-[14px] font-[400] text-[#4A5568] pt-2 ">
                      {/* We'll generate an article for each title.. */}
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveTab(1)} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Next
                </button>
              </div>
            )}
            {/* Content */}
            {activeTab === 1 && (
              <div className=" md:h-[850px] h-auto border-[1px] rounded-[10px] shadow-md ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex md:px-5 px-3   items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF] pt-1 ">
                    Content
                  </p>
                </div>
                <br />
                <div className="md:flex gap-3 md:px-3 px-2 ">
                  <form className="md:w-[450px] w-full mx-auto ">
                    <label
                      for="countries"
                      className="block mb-2 text-[14px] font-[500]  text-gray-900 dark:text-white"
                    >
                      Language
                    </label>
                    <select
                      id="countries"
                      value={content?.language}
                      onChange={(e) => setContent({ ...content, language: e.target.value})}
                      className="  w-full border border-gray-300 outline-none  text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>English</option>
                      <option value="US"> German</option>
                      <option value="CA">French</option>
                      <option value="FR">Spanish</option>
                      <option value="DE">Italian</option>
                    </select>
                  </form>

                  <form className="md:w-[450px] w-full mx-auto ">
                    <label
                      for="countries"
                      className="block mb-2 text-[14px] leading-[24px] font-[500]  text-gray-900 dark:text-white"
                    >
                      Target Country
                    </label>
                    <select
                      id="countries"
                      value={content?.targetCountry}
                      onChange={(e) => setContent({...content, targetCountry: e.target.value})}
                      className="  border w-full border-gray-300 outline-none text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>United States</option>
                      <option value="FR">Canada</option>
                      <option value="US"> Germany</option>
                      <option value="CA">France</option>
                      <option value="DE">Italy</option>
                    </select>
                    <p className="text-[14px] mt-2 font-[400] leading-[21px] text-[#4A5568] ">
                      Generate location-specific content. <br /> Important for
                      features like Connect to Web and External Linking.
                    </p>
                  </form>
                </div>
                {/* progress bar */}
                <div className="md:flex gap-3 md:px-5 px-2 ">
                  <div className="md:w-[450px] mx-auto ">
                    <p className=" text-[16px] font-[500] mt-2 text-[#344054] ">
                      Creativity
                    </p>
                    <div className=" w-full mt-2 bg-gray-200 rounded-full h-[10px] mb-4 dark:bg-gray-700">
                      <div className="bg-[#7F56D9] h-[10px] rounded-full  w-[45%] "></div>
                    </div>
                    <div className="flex justify-between text-[14px] font-[400] text-[#718096] ">
                      <p>Factual</p>
                      <p>Original</p>
                    </div>
                  </div>
                  <form className="md:w-[450px] w-full mx-auto mt-3 ">
                    <label
                      for="countries"
                      className="block mb-2 text-[16px] leading-[24px] font-[500]   text-[#344054] dark:text-white"
                    >
                      Tone of Voice
                    </label>
                    <select
                      id="countries"
                      value={content?.toneOfVoice}
                      onChange={(e) => setContent({...content, toneOfVoice: e.target.value})}
                      className="  border w-full border-gray-300 outline-none text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Select Tone </option>
                      <option selected>Neutral </option>
                    </select>
                  </form>
                </div>
                <div className="md:flex gap-3  md:px-5 px-2 ">
                  <form className="md:w-[450px] w-full mx-auto mt-3 ">
                    <label
                      for=""
                      className="block mb-2 text-[16px] leading-[24px] font-[500]   text-[#344054] dark:text-white"
                    >
                      Point of View
                    </label>
                    <select
                      id="point"
                      value={content?.pointOfView}
                      onChange={(e) => setContent({...content, pointOfView: e.target.value})}
                      className="  border w-full border-gray-300 outline-none text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Automatic </option>
                      <option selected>Manual </option>
                    </select>
                  </form>
                  <form className="md:w-[450px] w-full mx-auto mt-3 ">
                    <label
                      for="countries"
                      className="block mb-2 text-[16px] leading-[24px] font-[500]   text-[#344054] dark:text-white"
                    >
                      Formality
                    </label>
                    <select
                      id="countries"
                      value={content?.formality}
                      onChange={(e) => setContent({...content, formality: e.target.value})}
                      className="  border w-full border-gray-300 outline-none text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Select Tone </option>
                      <option selected>Neutral </option>
                    </select>
                    <p className="text-[13px] mt-1 font-[400] text-[#475467] ">
                      Useful if selected language has both formal and informal
                      verb conjunctions
                    </p>
                  </form>
                </div>
                <br />
                <div className="md:px-5 px-2">
                  <label
                    for="message"
                    className="block  mb-2 text-[16px] font-[500] text-[#344054] dark:text-white"
                  >
                    Custom Instructions{" "}
                  </label>
                  <textarea
                    id="message"
                    rows="2"
                    value={content?.customInstructions}
                    onChange={(e) => setContent({...content, customInstructions: e.target.value})}
                    className="block p-2.5 w-full outline-none text-sm text-gray-600   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Short and punchy phrases ..."
                  ></textarea>
                  <p className="text-[14px] mt-2 font-[400] text-[#475467] ">
                    We'll use these instructions to generate each paragraph.
                    These intructions <b> do not affect the headings. </b>{" "}
                    <br />
                  </p>
                  <br />
                  <label
                    for="message"
                    className="block mt-2 mb-2 text-[16px] font-[500] text-[#344054] dark:text-white"
                  >
                    Include Exact Keywords (1 per line){" "}
                  </label>
                  <textarea
                    id="message"
                    rows="2"
                    value={content?.includeExactKeywords}
                    onChange={(e) => setContent({...content, includeExactKeywords: e.target.value})}
                    className="block p-2.5 w-full outline-none text-[14px] font-[400] text-[#667085] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="How to bake bread..."
                  ></textarea>
                  <p className="text-[14px] mt-2 font-[400] text-[#475467] ">
                    {" "}
                    We will force-feed these keywords to the article. We'll try
                    to include them exactly as you've written them. <br /> Make
                    sure the keywords are related to the article's topic and do
                    not contain typos..{" "}
                  </p>
                </div>
                <button onClick={() => setActiveTab(2)} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Next
                </button>
              </div>
            )}
            {/* Knowledge  */}
            {activeTab === 2 && (
              <div className=" h-[506px] border-[1px] rounded-[10px] shadow-md  ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex  md:px-10 items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF]">
                    Knowledge
                  </p>
                </div>
                <button onClick={() => setActiveTab(3)} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Next
                </button>
              </div>
            )}
            {/* Formatting */}
            {activeTab === 3 && (
              <div className=" h-[506px] border-[1px] rounded-[10px] shadow-md ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex  md:px-10 items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF]">
                    Formatting
                  </p>
                </div>
                <div className="py-3 md: md:px-10 px-4 mt-5 grid md:grid-cols-3 gap-5 ">
                  <div className=" h-[98px] rounded-[6px]   ">
                    <p className="text-[18px] font-[500] text-[#344054] ">
                      Bold
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formatting?.bold}
                          onChange={() => setFormatting({...formatting, bold: !formatting?.bold})}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                        <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                          Enable
                        </span>
                      </label>
                    </div>
                    <p className="text-[14px] font-[400] text-[#344054] opacity-[50%] mt-2 ">
                      We will bold important keywords in your article.
                    </p>
                  </div>
                  <div className=" h-[98px] rounded-[6px]   ">
                    <p className="text-[18px] font-[500] text-[#344054] ">
                      Italics
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formatting?.italics}
                          onChange={() => setFormatting({...formatting, italics: !formatting?.italics})}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                        <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                          Enable
                        </span>
                      </label>
                    </div>
                    <p className="text-[14px] font-[400] text-[#344054] opacity-[50%] mt-2 ">
                      We’ll Use Italics for Subtle emphasis in your article{" "}
                    </p>
                  </div>
                  <div className=" h-[98px] rounded-[6px]   ">
                    <p className="text-[18px] font-[500] text-[#344054] ">
                      Tables
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formatting?.tables}
                          onChange={() => setFormatting({...formatting, tables: !formatting?.tables})}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                        <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                          Enable
                        </span>
                      </label>
                    </div>
                    <p className="text-[14px] font-[400] text-[#344054] opacity-[50%] mt-2 ">
                      If appropriate, we’ll include tables in article{" "}
                    </p>
                  </div>
                  <div className=" h-[98px] rounded-[6px]   ">
                    <p className="text-[18px] font-[500] text-[#344054] ">
                      Quotes
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formatting?.qoutes}
                          onChange={() => setFormatting({...formatting, qoutes: !formatting?.qoutes})}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                        <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                          Enable
                        </span>
                      </label>
                    </div>
                    <p className="text-[14px] font-[400] text-[#344054] opacity-[50%] mt-2 ">
                      If appropriate, we’ll include quotes/tips/recommendations
                      in your article{" "}
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveTab(4)} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Next
                </button>
              </div>
            )}
            {/* Structure */}
            {activeTab === 4 && (
              <div className=" h-[600px] border-[1px] rounded-[10px] shadow-md ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex  md:px-10 items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF]">
                    Structure
                  </p>
                </div>
                <br />
                <div className="md: md:px-10 px-4 ">
                  <p className="text-[14px] font-[500] ">Call-To-Action</p>
                  <input
                    type="email"
                    name=""
                    id=""
                    value={structure?.callToAction}
                    onChange={(e) => setStructure({...structure, callToAction: e.target.value})}
                    placeholder="https://mywebsite.com/"
                    className="h-[35px] mt-1 rounded-[6px] border-[1px] outline-none w-full px-4 py-2 "
                  />
                  <p className="text-[14px] font-[400] opacity-[70%] text-[#475467] mt-2 ">
                    We'll add an extra h3 to your articles with a call-to-action
                    to this URL . Leave blank to opt-out.{" "}
                  </p>
                </div>
                <div className="md: md:px-10 px-4  mt-5 flex justify-between gap-3 ">
                  <div className=" h-[98px] rounded-[6px] ">
                    <p className="text-[18px] font-[500] text-[#344054] ">
                      Key Takeaways
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={structure?.keyTakeAways}
                          onChange={() => setStructure({...structure, keyTakeAways: !structure?.keyTakeAways})}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                        <span className="ms-3 text-[16px] font-[500] text-[#344054] opacity-[50%] dark:text-gray-300">
                          Enable
                        </span>
                      </label>
                    </div>
                    <p className="text-[14px] text-[#475467] opacity-[70%] font-[400] mt-2 leading-[21px] ">
                      We'll add this section at the start of each article.{" "}
                    </p>
                  </div>
                  <div className=" h-[98px] rounded-[6px] ">
                    <p className="text-[18px] font-[500] text-[#344054] ">
                      {" "}
                      Conclusion
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={structure?.conclusion}
                          onChange={() => setStructure({...structure, conclusion: !structure?.conclusion})}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                        <span className="ms-3 text-[16px] font-[500] text-[#344054] opacity-[50%] dark:text-gray-300">
                          Enable
                        </span>
                      </label>
                    </div>
                    <p className="text-[14px] text-[#475467] opacity-[70%] font-[400] mt-2 leading-[21px] ">
                      We’ll add this section to the end of each article{" "}
                    </p>
                  </div>
                  <div className=" h-[98px] rounded-[6px] ">
                    <p className="text-[18px] font-[500] text-[#344054] ">
                      FAQs
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={structure?.faqs}
                          onChange={() => setStructure({...structure, faqs: !structure?.faqs})}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                        <span className="ms-3 text-[16px] font-[500] text-[#344054] opacity-[50%] dark:text-gray-300">
                          Enable
                        </span>
                      </label>
                    </div>
                    <p className="text-[14px] text-[#475467] opacity-[70%] font-[400] mt-2 leading-[21px] ">
                      We’ll add this section to the end of each article{" "}
                    </p>
                  </div>
                </div>
                <br />
                <div className=" md: md:px-10 px-4  ">
                  <p className="text-[20px] font-[500] mt-1 text-[#344054] ">
                    Actual Size{" "}
                  </p>
                  <form className="mt-2">
                    <select
                      id="countries"
                      value={structure?.actualSize}
                      onChange={(e) => setStructure({...structure, actualSize: e.target.value})}
                      className="  h-[50px] w-[302px] outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 border-[2px] block  px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option> Small</option>
                      <option>Medium</option>
                      <option>Large (1+ credit) </option>
                    </select>
                  </form>
                </div>
                <button onClick={() => setActiveTab(5)} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Next
                </button>
              </div>
            )}
            {/* Internal linking  */}
            {activeTab === 5 && (
              <div className=" h-[640px] border-[1px] rounded-[10px] shadow-md ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex  md:px-10 items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF]">
                    Internal Linking
                  </p>
                </div>
                <br />
                <div className="md:px-10 px-4 flex justify-between ">
                  <p className="text-[20px] font-[600] text-[#344054] ">
                    Sitemaps
                  </p>
                  <p className="h-[44px] w-[159px] cursor-pointer hover:bg-[#eeeef14d] flex justify-center items-center rounded-[10px] border-[1px] border-[#7A73FF] text-[14px] font-[#7A73FF] text-[#7A73FF] ">
                    + Add Sitemaps
                  </p>
                </div>
                <br />
                <div className=" grid md:grid-cols-3 md:px-10 px-4 gap-3 ">
                  <div>
                    <p className="text-[20px] font-[600] text-[#344054] text-center mt-2 ">
                      URL
                    </p>
                    <p className="text-[16px] font-[400] mt-3 ">
                      Example Sitemap:
                    </p>
                    <p className="text-[15px] font-[400] text-[#00AFE6] ">
                      https://www.website.com/sitemap.xml
                    </p>
                  </div>
                  <div>
                    <p className="text-[20px] font-[600] text-[#344054] text-center mt-2 ">
                      Filter Pattern
                    </p>
                    <p className="text-[14px] font-[400] mt-3 ">
                      Optional. We will only use URLs from the sitemap that
                      contain this pattern. Use a comma , to seperate multiple
                      patterna. Example: /my-category/, /blog/
                    </p>
                  </div>
                  <div>
                    <p className="text-[20px] font-[600] text-[#344054] text-center mt-2 ">
                      Exclude Pattern{" "}
                    </p>
                    <p className="text-[14px] font-[400] mt-3 ">
                      Optional. We will exclude any URLs that contain the
                      exclude pattern
                    </p>
                  </div>
                </div>
                <br />
                <p className="h-[44px] w-[228px] md:mx-10 cursor-pointer hover:bg-[#eeeef14d] flex justify-center items-center rounded-[10px] border-[1px] border-[#7A73FF] text-[14px] font-[500] text-[#7A73FF] ">
                  Test & Preview Links{" "}
                </p>
                <p className="text-[18px] font-[400] opacity-[50%] md:px-10 px-4 mt-2 ">
                  We will give you a preview of all the internal links that wil
                  be placed in your article
                </p>
                <br />
                <div className="md:w-[450px] md:px-10 px-4 ">
                  <p className=" text-[16px] font-[500] mt-2 text-[#344054] ">
                    Link
                  </p>
                  <div className=" w-full mt-2 bg-gray-200 rounded-full h-[10px] mb-4 dark:bg-gray-700">
                    <div className="bg-[#7F56D9] h-[10px] rounded-full  w-[45%] "></div>
                  </div>
                  <div className="flex justify-between text-[14px] font-[500] opacity-[40%] text-[#000000] ">
                    <p>No links</p>
                    <p>Up to 4 Links Per screen</p>
                  </div>
                  <p className="flex justify-between text-[14px] font-[500] opacity-[40%] text-[#000000] ">
                    This will also affect external links
                  </p>
                </div>
                <br />
                <button onClick={() => setActiveTab(6)} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Next
                </button>
              </div>
            )}
            {/* Extrnal linking */}
            {activeTab === 6 && (
              <div className="h-[640px] border-[1px] rounded-[10px] shadow-md ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex  md:px-10 items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF]">
                    External Linking
                  </p>
                </div>
                <br />
                <div className="md:px-10 px-4">
                  <div className="flex justify-between ">
                    <p className="text-[20px] font-[600] ">Include Links</p>
                    <p className="h-[44px] w-[119px] cursor-pointer hover:bg-[#eeeef14d] flex justify-center items-center rounded-[10px] border-[1px] border-[#7A73FF] text-[14px] font-[#7A73FF] text-[#7A73FF] ">
                      + Add Link
                    </p>
                  </div>
                  <br />
                  <div className="flex justify-evenly ">
                    <p className="text-[18px] font-[600] text-[#344054] ">
                      Page URL
                    </p>
                    <p className="text-[18px] font-[600] text-[#344054] ">
                      Anchor{" "}
                    </p>
                  </div>
                  <p className="text-[18px] font-[400] opacity-[50%] mt-3 ">
                    We’ll include these exact links as
                  </p>
                  <p className="text-[18px] font-[500] text-[#344054] mt-2 ">
                    Automatic External Links
                  </p>
                  <div className="flex gap-3 mt-2 ">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                      <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                        Enable
                      </span>
                    </label>
                  </div>
                  <p className="text-[14px] font-[400] text-[#475467] opacity-[70%] mt-2 ">
                    We’ll scrape the internet for relevant articles in your
                    niche & language
                  </p>
                  <div>
                    <p className="text-[18px] font-[500] text-[#344054] mt-2 ">
                      Include External Sources
                    </p>
                    <p className="text-[16px] opacity-[50%] font-[500] text-[#344054]">
                      Website URL
                    </p>
                    <p className="h-[34px] w-[138px] rounded-[30px] border-[1px] cursor-pointer border-[#7A73FF] mt-2 text-[#7A73FF] flex justify-center items-center  text-[14px] font-[500] ">
                      + Add Website
                    </p>
                  </div>
                  <br />
                  <div>
                    <p className="text-[18px] font-[500] text-[#344054] mt-2 ">
                      Exclude External Sources
                    </p>
                    <p className="text-[16px] opacity-[50%] font-[500] text-[#344054]">
                      Website URL
                    </p>
                    <p className="h-[34px] w-[138px] rounded-[30px] border-[1px] cursor-pointer border-[#7A73FF] mt-2 text-[#7A73FF] flex justify-center items-center text-[14px] font-[500] ">
                      + Add Website
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveTab(7)} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Next
                </button>
              </div>
            )}
            {activeTab === 7 && (
              <div className="h-[640px] border-[1px] rounded-[10px] shadow-md ">
                <div className=" h-[60px] bg-[#7A73FF0D] flex  md:px-10 items-center gap-3 ">
                  <div className="h-[13px] w-[13px] rounded-full bg-[#7A73FF] mt-1 "></div>
                  <p className="text-[20px] font-[500] text-[#7A73FF]">Media</p>
                </div>
                <br />
                <div className="md:px-10 px-4 ">
                  <p className="text-[20px] font-[500] text-[#344054] ">
                    Image Provider
                  </p>
                  <form className="w-full mx-auto">
                    <select
                      id="images"
                      className=" mt-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="bing">Organic Images (Bing) </option>
                      <option value="unsplash">
                        Organic Images (Unsplash)
                      </option>
                      <option value="custom">Custom Images </option>
                    </select>
                  </form>
                  <br />
                  <div>
                    <p className="text-[20px] font-[500] text-[#344054] ">
                      Image Prompt
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Black and white"
                      className="mt-2 outline-none px-4 h-[44px] w-full border-[1px] border-[#D0D5DD] rounded-[10px] "
                    />
                    <p className=" text-[14px] font-[400] text-[#475467] mt-1 ">
                      Example: Illustrative, hyper, realestic
                    </p>
                  </div>
                  <br />
                  <div className="grid md:grid-cols-3 grid-cols-1 ">
                    <div className=" h-[98px] rounded-[6px]   ">
                      <p className="text-[18px] font-[500] text-[#344054] ">
                        Featured Images
                      </p>
                      <div className="flex gap-3 mt-2 ">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                          <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                            Enable
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className=" h-[98px] rounded-[6px]   ">
                      <p className="text-[18px] font-[500] text-[#344054] ">
                        In-Article Images
                      </p>
                      <div className="flex gap-3 mt-2 ">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                          <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                            Enable
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className=" h-[98px] rounded-[6px]   ">
                      <p className="text-[18px] font-[500] text-[#344054] ">
                        Automate Youtube Videos
                      </p>
                      <div className="flex gap-3 mt-2 ">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
                          <span className="ms-3 text-[16px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
                            Enable
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={handleGenerate} className=" md:mx-5 mt-2 h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
                  Generate Article
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
