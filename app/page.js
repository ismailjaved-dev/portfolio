"use client";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <>
      <section className="isolate bg-dark h-screen overflow-hidden">
      <div className="w-screen h-screen absolute bg-distortion opacity-[0.06] pointer-events-none"></div>
        <div className="border-2 rounded-[40px] border-borderDark p-[14px] m-[16px] flex items-stretch ">
          <div className="grid gap-4 grid-cols-5 w-full">
            <div className="grid grid-cols-4 col-span-4 gap-4 grid-rows-3 min-h-[94vh]">

              
              <div className="card-bg !p-8 col-span-2 flex justify-center items-center">
                <div className="innerCard"></div>
                <span className="h-fit w-[92%] grid gap-4 mt-4">
                <h1 className="text-[32px] text-[#CCCCCC] ">Hi, I'm Tamer ⎯</h1>
                <h3 className="text-2xl text-[#666666] tracking-[-0.025rem] leading-relaxed">
                  Lead product designer, currently working at
                  <span> mano </span>
                  based in Cairo
                </h3>
                </span>
              </div>

              <div className="card-bg imgCard">
                <div className="linkBg"></div>
                <Image
                  src="/cashless-img-1.webp"
                  fill
                  alt=""
                  className="-z-20"
                />
                <div className="overflow-hidden w-full">
                  <div className="flex justify-between gap-5 items-center w-full cardLinks">
                    <h5 className="text-[22px] text-[#cccccc] font-medium">Cashless</h5>
                    <span>
                      <IoIosArrowRoundForward color="#fff" size={24} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-bg imgCard col">
              <div className="linkBg"></div>
                <Image
                  src="/job-portal-img-1.webp"
                  fill
                  alt=""
                  className="-z-20"
                />
                <div className="overflow-hidden w-full">
                  <div className="flex justify-between gap-5 items-center w-full cardLinks">
                    <h5 className="text-[22px] text-[#cccccc] font-medium">Cashless</h5>
                    <span>
                      <IoIosArrowRoundForward color="#fff" size={24} />
                    </span>
                  </div>
                </div>
              </div>

         



              <div className="card-bg imgCard">
                 
                <Image
                  src="/person.webp"
                  fill
                  alt=""
                  className="-z-20"
                />
              </div>


             <div className="col-span-3 flex gap-4">
              <div className="card-bg !p-8 col-span-2 basis-[60%] flex justify-center items-start">
                <div className="innerCard"></div>
                <span className="h-fit w-[92%] grid gap-4 mt-4">
                <p className=" text-[#666666] tracking-[3px] font-medium">ABOUT</p>
                <h4 className="text-[26px] text-[#cccccc] tracking-[-0.025rem] leading-relaxed font-semibold">
                Passionate about design and enjoy solving problems.
                </h4>
                </span>
              </div>


             <div className="card-bg imgCard h-full basis-[40%]">
                 <div className="linkBg"></div>
                <Image
                  src="/boostpro-img-1.webp"
                  fill
                  alt=""
                  className="-z-20"
                />
                <div className="overflow-hidden w-full">
                  <div className="flex justify-between gap-5 items-center w-full cardLinks">
                    <h5 className="text-[22px] text-[#cccccc] font-medium">BoostPro</h5>
                    <span>
                      <IoIosArrowRoundForward color="#fff" size={24} />
                    </span>
                  </div>{" "}
                </div>
              </div>

             </div>


         
 
 
              <div className="col-span-4 flex gap-4">
               <div className="card-bg !p-8 col-span-2 basis-[55%] flex justify-center items-center">
                 <div className="innerCard"></div>
                 <span className="h-fit w-[98%] grid gap-4 mt-4">
                 <h4 className="text-[26px] text-[#cccccc] tracking-[-0.025rem] leading-relaxed font-semibold">
                 Get design tips & guides straight to your inbox for free!
                 </h4>
                 <div className="w-full flex gap-4">
                 <input className="!bg-dark/0 !rounded-2xl card-bg !h-16 !border-2 grow" placeholder="Your email here"/>
                  <button className="outline-none rounded-2xl bg-[#242424] text-[#ccc] h-16 px-6">
                     Subscribe
                  </button>
                 </div>
                 </span>
               </div>
 
 
              <div className="card-bg imgCard h-full basis-[28%]">
              <div className="innerCard"></div>
              <div className="flex flex-col h-full w-full justify-center gap-[25px]">
              <h4 className="text-[26px] text-[#cccccc] tracking-[-0.025rem] leading-relaxed font-semibold">
                Stack I use
                 </h4>
              <Swiper
                    loop={true}
                    autoplay={{ delay: 1 }}
                    // spaceBetween={16}
                    speed={1000}
                    modules={[Autoplay]}
                    slidesPerView={4}
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
 
              <div className="card-bg imgCard basis-[22%]">
                 
                 <Image
                   src="/person.webp"
                   fill
                   alt=""
                   className="-z-20"
                 />
               </div>
              </div>


            </div>
            <div className="col-span-1 text-[#fff]">asd</div>
          </div>
        </div>
      </section>
    </>
  );
}
