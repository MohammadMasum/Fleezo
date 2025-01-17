'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Premium from "@/app/assets/images/premium.svg"; 
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import Food1 from "@/app/assets/images/food1.png"; 
import Food2 from "@/app/assets/images/food2.png"; 

export default function Pricing() {
  return (
    <>
        <section className='lg:py-[120px] py-[50px] overflow-hidden'>
            <div className="container xl:!max-w-[1040px] relative z-10">
                <Image className='xl:block hidden absolute top-[50%] -left-[25%]' src={Food1} alt="Food1"/>
                <Image className='xl:block hidden absolute top-[10%] -right-[20%]' src={Food2} alt="Food2"/>
                <div className='mb-[40px]'>
                    <h2 className='main-title text-center'><span className='font-light'>Our</span> pricing <span className='font-light'>plans</span></h2>
                </div>
                <div className="bg-white lg:p-[60px] p-[30px] rounded-[25px] grid lg:grid-cols-2 gap-[20px_30px]">
                    <div className='flex flex-col justify-between items-start'>
                        <div>
                            <Image className='mb-[20px]' src={Premium} alt="premium"/>
                            <p className='mb-[20px]'>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                        </div>
                        <Link href="/" className="primary-btn !py-[10px]">Start Now <span><BsArrowRightCircleFill /></span></Link>
                    </div>
                    <div>
                        <p className='text-[18px] text-black font-bold mb-[15px]'>What’s included</p>
                        <ul className='flex flex-col gap-3'>
                            <li className='relative pl-[35px] text-[18px] text-black'><span className='absolute left-0 top-[50%] translate-y-[-50%] text-[24px] text-[#7B60ED]'><FaCircleCheck /></span>Free Setup</li>
                            <li className='relative pl-[35px] text-[18px] text-black'><span className='absolute left-0 top-[50%] translate-y-[-50%] text-[24px] text-[#7B60ED]'><FaCircleCheck /></span>Menu Management</li>
                            <li className='relative pl-[35px] text-[18px] text-black'><span className='absolute left-0 top-[50%] translate-y-[-50%] text-[24px] text-[#7B60ED]'><FaCircleCheck /></span>SMS, Email, Whatsapp Notifications</li>
                            <li className='relative pl-[35px] text-[18px] text-black'><span className='absolute left-0 top-[50%] translate-y-[-50%] text-[24px] text-[#7B60ED]'><FaCircleCheck /></span>Per Order: <span className='font-black text-[24px]'>3%</span> Platform Commission + Taxes</li>
                            <li className='relative pl-[35px] text-[18px] text-black'><span className='absolute left-0 top-[50%] translate-y-[-50%] text-[24px] text-[#7B60ED]'><FaCircleCheck /></span>Per Order Payment: <span className='font-black text-[24px]'>2%</span> Payment Gateway Fees + Taxes</li>
                        </ul>
                    </div>
                </div>
                <p className='text-black text-center mt-[40px]'><span className='font-black'>Delivery Fees:</span> Cost based on actuals paid by your customers</p>
            </div>    
        </section> 
    </>
  )
}
