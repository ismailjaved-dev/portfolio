import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="relative isolate bg-dark overflow-hidden max-w-full h-full">
        <div className="w-screen h-full absolute bg-distortion opacity-[0.06] z-[1] pointer-events-none"></div>
        <div className="border-2 rounded-[40px] border-borderDark py-[40px] m-[18px]">
          <div className="fluid-container">
            <Link
              className="text-[22px] min-w-12 h-12 rounded-full border-[#333333] hover:bg-[#1f1f1f] duration-300 ease-in-out border-2 w-fit grid place-items-center m-auto"
              href="/"
            >
              <RxCross2 className="opacity-[0.5]" />
            </Link>
            <div className="mt-10">
              <h2 className=" text-[32px] font-[500] text-[#cccccc]">
                Job Portal
              </h2>
              <h6 className="text-2xl text-[#666666] font-[400]">Mobile App</h6>
              <div className=" mt-8 grid grid-cols-6 gap-4">
                <div className="card-bg rounded-[24px] col-span-2 p-8 flex flex-col gap-8 pb-20">
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      COMPANY
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Wanderu
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      MY ROLE
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Product Designer
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      TOOLS
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Miro
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Notion
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      TIMELINE
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      2020 – 2021
                    </p>
                  </div>
                </div>
                <div className="card-bg rounded-[24px] col-span-4 p-8 flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      DESCRIPTION
                    </p>
                    <p className=" text-[20px] text-[#ccc] font-[400]">
                      An app that matches job seekers with relevant postings.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      CONTEXT
                    </p>
                    <p className=" text-[20px] text-[#ccc] font-[400]">
                      Providing job seekers with the ability to search, explore,
                      and discover suitable job postings based on their
                      individual preferences and criteria, the job portal app
                      enables job seekers to take a more proactive and informed
                      approach to their job search process.
                    </p>
                  </div>
                  <Link
                    className="text-[18px] text-[#ccc] px-6 border-2 py-[10px] rounded-full border-[#333333] duration-300 hover:bg-[#1f1f1f] w-fit flex items-center gap-[10px]"
                    href=""
                  >
                    Check the app
                    <span className="rotate-[-45deg]">
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="card-bg rounded-[24px] mt-4 p-0 max-h-[68vh]">
                <Image
                  src="/job-portal-img-1.webp"
                  fill
                  className="!static w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="p-24 flex flex-col gap-10">
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Challenge
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                The task of helping job seekers find suitable jobs through a job
                portal mobile application is a multifaceted challenge that
                involves addressing several key issues. Some of the challenges
                that you can consider in your case study are:
              </p>
              <ol className="pl-2">
                <li className="relative before:content-['1.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  A job portal app needs a good filter system to make job search
                  easy. It should sort listings by title, location, salary, and
                  experience level.
                </li>
              </ol>
              <ol className="pl-2">
                <li className="relative before:content-['2.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Job portals should provide customized job recommendations
                  based on user search history and job preferences.
                </li>
              </ol>
              <div className="card-bg rounded-[24px] mt-4 p-6">
                <Image
                  src="/job-portal-img-2.svg"
                  fill
                  className="!static w-full h-full object-cover object-top max-w-[40%] m-auto"
                />
              </div>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Process
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                Our team started the project by understanding the user's needs,
                and gathering feedback from users. We conducted extensive
                research on the real estate industry and competitors' websites
                to identify best practices and trends.
              </p>
              <ol className="pl-2">
                <li className="relative before:content-['1.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  User interviews & research
                </li>
                <li className="relative before:content-['2.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Synthesis the findings
                </li>
                <li className="relative before:content-['3.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Ideating the solution
                </li>
                <li className="relative before:content-['4.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Craft a prototype with the main idea
                </li>
                <li className="relative before:content-['5.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Test with users and iterate
                </li>
              </ol>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Solution
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                A job portal app should prioritize user experience and safety by
                including a strong filtering system for easy job searching based
                on individual preferences. The app should sync with employer
                databases for accurate job listings and provide personalized
                suggestions based on user preferences and search history.
              </p>
              <div className="card-bg rounded-[24px] mt-4 p-6">
                <Image
                  src="/job-portal-img-3.svg"
                  fill
                  className="!static w-full h-full object-cover object-top max-w-[50%] m-auto"
                />
              </div>
              <div className="card-bg rounded-[24px] mt-4 p-6">
                <Image
                  src="/job-portal-img-4.svg"
                  fill
                  className="!static w-full h-full object-cover object-top m-auto"
                />
              </div>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Takeaway & Reflection
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                The app's success was due in part to its user-centric design
                process. The team conducted extensive research and user testing
                to ensure that the app met users' needs and preferences,
                resulting in a highly effective and user-friendly platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
