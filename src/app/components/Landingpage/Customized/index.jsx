import React from "react";
import Image from "next/image";

export default function Customized() {
  return (
    <div>
      <div className="bg-white px-4 py-4">
        <br />
        <p className="md:text-[35px] text-[20px] font-[600] md:leading-[50px] leading-[30px] text-center pt-5 uppercase max-w-xl mx-auto ">
          Customized <span className="text-[#7a73ff]">Bulk-Generation</span>{" "}
        </p>
        <p className="text-center md:text-[16px] text-[14px] max-w-4xl mx-auto font-[400] leading-[22px] pt-2 ">
          Efficiently produce large quantities of articles tailored to your
          specific requirements, including niche, keywords, titles, structure,
          headings, and more, all aligned with your preferences.
        </p>
        <br />
        <br />
        <div className="flex justify-center flex-wrap gap-5">
          <div className="block cursor-pointer md:h-[350px] h-auto md:w-[280px] w-full p-6 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-[20px] font-[600] tracking-tight text-gray-900 dark:text-white">
              Tell us Keywords, Titles or your Business.
            </h5>
            <h6 className="font-normal text-[14px] text-gray-700 dark:text-gray-400">
              Create articles using your chosen keywords or simply inform Writer
              AI about your business and niche. You also have the option to
              provide exact titles for the articles. Each piece of content will
              be completely unique.
            </h6>
          </div>
          <div className="block cursor-pointer md:h-[350px] h-auto md:w-[280px] w-full p-6 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-[20px] font-[600] tracking-tight text-gray-900 dark:text-white">
              Customize Outline & Structure
            </h5>
            <h6 className="font-normal text-[14px]   text-gray-700 dark:text-gray-400">
              Exercise complete command over your article headings. Incorporate
              personalized sections like Introductions, FAQs, Opinions, and
              more. Opt to keep certain headings consistent while allowing
              others to be generated. Additionally, you have the option to
              include a Call to Action (CTA) at the conclusion of every article.
            </h6>
          </div>
          <div className="block cursor-pointer md:h-[350px] h-auto md:w-[280px] w-full p-6 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-[20px] font-[600] tracking-tight text-gray-900 dark:text-white">
              Language & Personality
            </h5>
            <h6 className="font-normal text-[14px]   text-gray-700 dark:text-gray-400">
              Select from over 150 languages. Determine the creativity level of
              your articles, ranging from Correct/Factual to Creative/Original.
              You can also specify a particular tone, like informal or
              persuasive.
            </h6>
          </div>
          <div className="block cursor-pointer md:h-[350px] h-auto md:w-[280px] w-full p-6 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-[20px] font-[600] tracking-tight text-gray-900 dark:text-white">
              Generate & Publish In Mass
            </h5>
            <h6 className="font-normal text-[14px]  text-gray-700 dark:text-gray-400">
              Decide on the number of articles to be created, adhering to your
              previously set preferences. Opt to either download them in a zip
              file or publish them directly to your website with a single
              click.Furthermore, you have the option to enable Writer AI to
              schedule, produce, and publish content automatically on your
              behalf through an AutoBlog feature.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
