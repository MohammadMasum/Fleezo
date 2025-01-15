'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorksThumbnail from "@/app/assets/images/how-it-works-thumb.png";
import Polygon from "@/app/assets/images/polygon.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    }
  }
};

export default function HowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
        <section ref={ref} className='bg-white lg:py-[100px] py-[50px]'>
            <div className="container">
                <motion.div className="grid xl:grid-cols-[4fr_8fr] gap-4 items-start" variants={stagger} initial="hidden" animate={controls}>
                    <div className='xl:pr-[50px] xl:mb-[0] mb-[30px]'>
                      <h2 className="main-title mb-[50px] xl:text-left text-center">How it works</h2>
                      <Image className="xl:mx-0 mx-auto" src={WorksThumbnail} alt="Works Icon2"/>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-[50px_80px]'>
                        {/* single item */}
                        <div className='relative z-10 sm:text-left text-center order-1'>
                          <h5 className='bg-secondary lg:h-[65px] h-[50px] lg:w-[65px] w-[50px] rounded-full flex items-center justify-center lg:text-[40px] text-[28px] font-semibold text-white mb-[15px] sm:mx-0 mx-auto'>1</h5>
                          <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[15px]'>Sign Up</h4>
                          <p>Sign up and get your <br /> restaurant verified by us.</p>
                            <span className='hidden sm:block border-t-[2px] border-dashed border-[#838383] absolute left-0 w-[calc(100%+80px)] h-[2px] top-[32px] -z-10'></span>
                            <Image className="hidden sm:block absolute top-[17px] left-[70%]" src={Polygon} alt="Works Icon2"/>
                        </div>
                        {/* single item */}
                        <div className='relative z-10 sm:text-left text-center order-2'>
                          <h5 className='bg-secondary lg:h-[65px] h-[50px] lg:w-[65px] w-[50px] rounded-full flex items-center justify-center lg:text-[40px] text-[28px] font-semibold text-white mb-[15px] sm:mx-0 mx-auto'>2</h5>
                          <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[15px]'>Basic Setup</h4>
                          <p>Set up your basic information <br /> and choose how you'd like to <br /> receive your payments.</p>
                            <span className='hidden sm:block border-t-[2px] border-dashed border-[#838383] absolute left-0 w-full h-[2px] top-[32px] -z-10'></span>
                            <span className='hidden sm:block border-r-[2px] border-dashed border-[#838383] absolute right-0 w-[2px] h-[calc(100%+50px)] top-[32px] -z-10'></span>
                            <Image className="hidden sm:block absolute top-[80%] -right-[11px] rotate-[90deg]" src={Polygon} alt="Works Icon2"/>
                        </div>
                         {/* single item */}
                         <div className='relative z-10 sm:text-left text-center sm:order-3 order-4'>
                          <h5 className='bg-secondary lg:h-[65px] h-[50px] lg:w-[65px] w-[50px] rounded-full flex items-center justify-center lg:text-[40px] text-[28px] font-semibold text-white mb-[15px] sm:mx-0 mx-auto'>4</h5>
                          <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[15px]'>Order Management <br /> Made Simple</h4>
                          <p>Start receiving and managing orders with ease—move them through states like processing, dispatch ready, delivery assigned, and more.</p>
                            <span className='hidden sm:block border-t-[2px] border-dashed border-[#838383] absolute -left-[30px] w-[calc(100%+110px)] h-[2px] top-[32px] -z-10'></span>
                            <span className='hidden sm:block border-r-[2px] border-dashed border-[#838383] absolute -left-[30px] w-[2px] h-[calc(100%+50px)] top-[32px] -z-10'></span>
                            <Image className="hidden sm:block absolute top-[17px] rotate-[180deg] left-[90%]" src={Polygon} alt="Works Icon2"/>
                        </div>
                        {/* single item */}
                        <div className='relative z-10 sm:text-left text-center sm:order-4 order-3'>
                          <h5 className='bg-secondary lg:h-[65px] h-[50px] lg:w-[65px] w-[50px] rounded-full flex items-center justify-center lg:text-[40px] text-[28px] font-semibold text-white mb-[15px] sm:mx-0 mx-auto'>3</h5>
                          <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[15px]'>Menu and <br /> Stock Management</h4>
                          <p>Add the food items you wish to serve and manage their stock and availability for both immediate and scheduled orders.</p>
                            <span className='hidden sm:block border-t-[2px] border-dashed border-[#838383] absolute left-0 w-full h-[2px] top-[32px] -z-10'></span>
                        </div>
                        {/* single item */}
                        <div className='relative z-10 sm:text-left text-center order-5'>
                          <h5 className='bg-secondary lg:h-[65px] h-[50px] lg:w-[65px] w-[50px] rounded-full flex items-center justify-center lg:text-[40px] text-[28px] font-semibold text-white mb-[15px] sm:mx-0 mx-auto'>5</h5>
                          <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[15px]'>Business Insights <br /> Dashboard</h4>
                          <p>Access your business dashboard for complete insights on orders, deliveries, special tracking for key food items, and much more.</p>
                          <span className='hidden sm:block border-t-[2px] border-dashed border-[#838383] absolute -left-[30px] h-[2px] w-[50px] top-[32px] -z-10'></span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    </>
  )
}
