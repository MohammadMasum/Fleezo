'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRightCircleFill } from "react-icons/bs";
import BannerThumb from "@/app/assets/images/banner-thumb.png";

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99], }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    }
  }
};

export default function Banner() {
  return (
    <>
      <section className='banner-area relative z-10 overflow-hidden pt-[130px] lg:pb-[120px] pb-[50px] '>
        <div className='container'>
          <motion.div className="md:grid grid-cols-[5fr_7fr] items-center" variants={stagger} initial="initial" animate="animate">
            <motion.div className="z-30 md:mb-0 mb-[30px] md:text-left text-center" variants={fadeInDown}>
              <h1 className="2xl:text-[100px] xl:text-[60px] text-[56px] md:mb-[15px] mb-[8px]"><span className="font-normal">Redefining</span> <span className="text-secondary">Restaurant</span> <span className="font-normal">Deliveries</span></h1>
              <p className="text-[#4C4C4C] max-w-[525px] md:mb-[30px] mb-[25px] 2xl:text-[24px] xl:text-[20px]">Build custom delivery websites instantly and manage orders seamlessly for restaurants and cloud kitchens.</p>
              <div className="flex xl:gap-8 gap-4">
                <Link href="/" className="primary-btn md:ml-0 mx-auto">Start Now <span><BsArrowRightCircleFill /></span></Link>
              </div>
            </motion.div>
            <motion.div className="relative z-50" variants={fadeInDown}>
                <Image className="" src={BannerThumb} alt="Banner Thumb"/>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
