'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";
import BannerThumb from "@/app/assets/images/banner-thumb.png";

export default function Banner() {
  return (
    <>
      <section className='banner-area relative z-10 overflow-hidden pt-[130px] lg:pb-[120px] pb-[50px] '>
        <div className='container'>
          <div className="md:grid grid-cols-[5fr_7fr] items-center">
            <div className="z-30 md:mb-0 mb-[30px] md:text-left text-center">
              <h1 className="2xl:text-[100px] xl:text-[60px] text-[56px] md:mb-[15px] mb-[8px]"><span className="font-normal">Redefining</span> <span className="text-secondary">Restaurant</span> <span className="font-normal">Deliveries</span></h1>
              <p className="text-[#4C4C4C] max-w-[525px] md:mb-[30px] mb-[25px] 2xl:text-[24px] xl:text-[20px]">Build custom delivery websites instantly and manage orders seamlessly for restaurants and cloud kitchens.</p>
              <div className="flex xl:gap-8 gap-4">
                <Link href="/" className="primary-btn md:ml-0 mx-auto">Start Now <span><BsArrowRightCircleFill /></span></Link>
              </div>
            </div>
            <div className="relative z-50">
                <Image className="" src={BannerThumb} alt="Banner Thumb"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
