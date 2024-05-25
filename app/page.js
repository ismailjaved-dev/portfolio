"use client";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

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

            </div>
            <div className="col-span-1 text-[#fff]">asd</div>
          </div>
        </div>
      </section>
    </>
  );
}
