"use client";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// import {  } from "swiper";

const page = () => {
  return (
    <>
      <section className="relative isolate bg-dark overflow-hidden max-w-full h-full">
        <div className="w-screen h-full absolute bg-distortion opacity-[0.06] z-[1] pointer-events-none"></div>
        <div className="border-2 rounded-[40px] border-borderDark py-[40px] m-[16px] px-[15px]">
          <div className="fluid-container">
            <Link
              className="text-[22px] min-w-12 h-12 rounded-full border-[#333333] hover:bg-[#1f1f1f] duration-300 ease-in-out border-2 w-fit grid place-items-center m-auto"
              href="/"
            >
              <RxCross2 className="opacity-[0.5]" />
            </Link>
            <div className=" mt-8 grid grid-cols-2 gap-4">
              <div className="card-bg rounded-[24px] p-8 flex flex-col gap-2 pb-10">
                <h2 className=" text-[32px] font-[500] text-[#cccccc]">
                  What I'm about?
                </h2>
                <div className="flex flex-col gap-4 pt-6 border border-l-0 border-r-0 border-b-0 border-[#242424]">
                  <div className="flex flex-col gap-2">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      MY STORY
                    </p>
                    <p className=" text-[20px] text-[#ccc] font-[400]">
                      I was born and raised in Cairo, Egypt. Ever since I was a
                      child, I have had a passion for art and design. I was
                      captivated by the vibrant colors and intricate details of
                      the things around me, which inspired me to learn web
                      design, where I delved deeper into the world of UX and
                      product design.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" text-sm tracking-[1.2px] text-[#666666] font-[500]">
                      WHAT I DO NOW
                    </p>
                    <p className=" text-[20px] text-[#ccc] font-[400]">
                      Today I'm a Design Lead at mano improving the daily
                      process of ordering groceries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="card-bg rounded-[24px] p-8 flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <p className=" tracking-[1.2px] text-[#666666] font-[500]">
                      WHAT I DO BEST
                    </p>
                    <Swiper
                      pagination={true}
                      modules={[Pagination]}
                      loop={true}
                      className="do_best w-full !pb-20"
                    >
                      <SwiperSlide>
                        <div className="">
                          <h2 className=" text-[24px] font-[500] text-[#cccccc]">
                            Behavior Design
                          </h2>
                          <p className=" text-[20px] text-[#ccc] font-[400]">
                            Combining psychology, design, technology, and
                            creativity to create convincing experiences.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <h2 className=" text-[24px] font-[500] text-[#cccccc]">
                            Behavior Design
                          </h2>
                          <p className=" text-[20px] text-[#ccc] font-[400]">
                            Combining psychology, design, technology, and
                            creativity to create convincing experiences.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <h2 className=" text-[24px] font-[500] text-[#cccccc]">
                            Behavior Design
                          </h2>
                          <p className=" text-[20px] text-[#ccc] font-[400]">
                            Combining psychology, design, technology, and
                            creativity to create convincing experiences.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <h2 className=" text-[24px] font-[500] text-[#cccccc]">
                            Behavior Design
                          </h2>
                          <p className=" text-[20px] text-[#ccc] font-[400]">
                            Combining psychology, design, technology, and
                            creativity to create convincing experiences.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <h2 className=" text-[24px] font-[500] text-[#cccccc]">
                            Behavior Design
                          </h2>
                          <p className=" text-[20px] text-[#ccc] font-[400]">
                            Combining psychology, design, technology, and
                            creativity to create convincing experiences.
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="card-bg rounded-[24px] p-8 flex flex-col gap-8">
                  <h2 className=" text-[24px] font-[500] text-[#cccccc]">
                    Stack I use
                  </h2>
                  <Swiper
                    loop={true}
                    autoplay={{ delay: 1 }}
                    // spaceBetween={16}
                    speed={1000}
                    modules={[Autoplay]}
                    slidesPerView={5}
                    className="eternal w-full"
                  >
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl min-w-[72px] h-[72px]">
                        <Image
                          src="/notion.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl min-w-[72px] h-[72px]">
                        <Image
                          src="/orange.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl min-w-[72px] h-[72px]">
                        <Image
                          src="/paint-type.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl min-w-[72px] h-[72px]">
                        <Image
                          src="/rainbow.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl min-w-[72px] h-[72px]">
                        <Image
                          src="/framer.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl min-w-[72px] h-[72px]">
                        <Image
                          src="/framer-motion.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl max-w-[72px] h-[72px]">
                        <Image
                          src="/astra.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#242424] p-4 w-fit rounded-2xl max-w-[72px] h-[72px]">
                        <Image
                          src="/ai.webp"
                          fill
                          className="!relative object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
