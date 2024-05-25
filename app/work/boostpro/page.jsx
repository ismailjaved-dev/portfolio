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
                BoostPro
              </h2>
              <h6 className="text-2xl text-[#666666] font-[400]">Website</h6>
              <div className=" mt-8 grid grid-cols-6 gap-4">
                <div className="card-bg rounded-[24px] col-span-2 p-8 flex flex-col gap-8 pb-20">
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      COMPANY
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Shopify
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      MY ROLE
                    </p>
                    <p className=" text-[20px] tracking-[1.2px] text-[#ccc] font-[400]">
                      Senior Designer
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
                      Boosting sales & engagement with landing page redesign.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      CONTEXT
                    </p>
                    <p className=" text-[20px] text-[#ccc] font-[400]">
                      The objective of this case study is to examine a landing
                      page designed to increase customer engagement and boost
                      sales. The landing page is part of a digital marketing
                      campaign aimed at promoting a product or service to a
                      specific target audience.
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
                  src="/boostpro-img-1.webp"
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
                The challenge of the task is to create a landing page for a SaaS
                (Software as a Service) product that effectively communicates
                the value proposition of the product, engages potential
                customers, and encourages them to take action, such as
                subscribing to the service or purchasing the product.
              </p>
              <div className="card-bg rounded-[24px] mt-4 p-0">
                <Image
                  src="/boostpro-img-2.svg"
                  fill
                  className="!static w-full h-full object-cover object-top m-auto"
                />
              </div>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Process
              </h4>
              <ol className="pl-2">
                <li className="relative before:content-['1.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Customize the landing page design to meet the audience's needs
                  and preferences.
                </li>
              </ol>
              <ol>
                <li className="relative before:content-['2.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Create a wireframe before designing a landing page. It
                  outlines layout and content, including headlines,
                  call-to-actions, and forms.
                </li>
              </ol>
              <ol>
                <li className="relative before:content-['3.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  Optimize wireframe for mobile and user experience after
                  approval. Add branding elements.
                </li>
              </ol>
              <ol>
                <li className="relative before:content-['4.'] before:absolute before:top-0 before:-left-1 pl-7 text-[20px] text-[#cccccc] leading-8 font-[400]">
                  To succeed, a landing page needs persuasive copy that shows
                  product value, solves pain points, and drives action.
                </li>
              </ol>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Solution
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                The landing page was designed with the target audience in mind,
                incorporating elements that aligned with their needs,
                preferences, and pain points.
              </p>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                The value proposition of the SaaS product was clearly
                communicated on the landing page, highlighting the key benefits
                and how it solves the target audience's problems.
              </p>
              <div className="card-bg rounded-[24px] mt-4 p-0">
                <Image
                  src="/boostpro-img-3.svg"
                  fill
                  className="!static w-full h-full object-cover object-top m-auto"
                />
              </div>
              <div className="card-bg rounded-[24px] mt-4 p-0">
                <Image
                  src="/boostpro-img-4.svg"
                  fill
                  className="!static w-full h-full object-cover object-top m-auto"
                />
              </div>
              <h4 className=" text-[28px] font-[500] text-[#cccccc]">
                Outcome
              </h4>
              <p className=" text-[20px] text-[#cccccc] leading-8 font-[400]">
                The results of the SaaS landing page project were highly
                successful in engaging more customers to convert and boosting
                sales and subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
