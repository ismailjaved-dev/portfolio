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
                Cashless
              </h2>
              <h6 className="text-2xl text-[#666666] font-[400]">Mobile App</h6>
              <div className=" mt-8 grid grid-cols-6 gap-4">
                <div className="card-bg rounded-[24px] col-span-2 p-8 flex flex-col gap-8 pb-20">
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      COMPANY
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Shrink
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      MY ROLE
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Design Lead
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      TOOLS
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Figma
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Framer
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Arc
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
                      Managing finances with tools for tracking expenses and
                      budgeting.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      CONTEXT
                    </p>
                    <p className=" text-[20px] text-[#ccc] font-[400]">
                      An app that is a powerful tool designed to help users
                      manage their financial responsibilities effectively. The
                      app offers a range of features, including credit card
                      tracking, transaction management, subscription and bill
                      management, expense control, and budgeting tools.
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
                  src="/cashless-img-1.webp"
                  fill
                  className="!static w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="p-24 flex flex-col gap-10">
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Problem
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                As people have many financial obligations, they require a single
                platform to assist in managing their finances effectively. This
                platform should help limit unnecessary expenses and enable users
                to reach their financial objectives. The obstacle was to develop
                a mobile application that is user-friendly, intuitive, and
                packed with features to cater to these diverse financial
                requirements while ensuring a seamless user experience.
              </p>
              <div className="card-bg rounded-[24px] mt-4 p-6">
                <Image
                  src="/cashless-img-2.svg"
                  fill
                  className="!static w-full h-full object-cover object-top max-w-[50%] m-auto"
                />
              </div>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Process
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                We've adopted a user-centric approach, iterative design, and
                rigorous testing, ensuring that the app met the target
                audience's needs and preferences effectively.
              </p>
              <ol className="pl-2">
                <li className="relative before:content-['1.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  We've conducted studies with our audience's finances and
                  preferences through surveys and research, giving us valuable
                  insights.
                </li>
                <li className="relative before:content-['2.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  The team created wireframes and prototypes based on research
                  insights, refining the designs with user feedback to improve
                  the overall user experience.
                </li>
                <li className="relative before:content-['3.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Testing the app with users and used their feedback to improve
                  usability and design.
                </li>
              </ol>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Solution
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                The app's user-friendly interface and intuitive design make it
                easy for users to track their financial activities in real-time,
                view their transaction history, and receive alerts for upcoming
                bills and payments. Users can also set budget goals and receive
                personalized financial advice based on their spending patterns,
                helping them stay on track and achieve their financial
                objectives.
              </p>
              <div className="card-bg rounded-[24px] mt-4 p-6">
                <Image
                  src="/cashless-img-3.svg"
                  fill
                  className="!static w-full h-full object-cover object-top max-w-[50%] m-auto"
                />
              </div>
              <div className="card-bg rounded-[24px] mt-4 p-6">
                <Image
                  src="/cashless-img-4.svg"
                  fill
                  className="!static w-full h-full object-cover object-top m-auto"
                />
              </div>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Key Insights
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
