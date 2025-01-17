'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg"; 
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";


export default function ContactUs() {
  return (
    <>
      <section className='lg:py-[120px] py-[50px]'>
        <div className="container">
            <div className='grid lg:grid-cols-[5fr_7fr] gap-[20px_50px] bg-white md:p-[45px] p-[30px] md:rounded-[30px] rounded-[20px]'>
              <div className='bg-[#EEEAFF] p-[40px_30px] md:rounded-[30px] rounded-[20px]'>
                <h2 className='2xl:text-[60px] xl:text-[56px] lg:text-[42px] text-[36px] mb-[15px]'>Contact Us</h2>
                <p className='font-medium mb-[15px]'>We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.</p>
                <ul className='flex flex-col gap-[25px]'>
                  <li><a className='flex items-center sm:gap-[20px] gap-[15px] sm:text-[20px] text-[16px] font-medium text-black' href="mailto:sample@email.com"><span className='sm:h-[43px] h-[35px] sm:w-[43px] w-[35px] sm:min-w-[43px] min-w-[35px] flex items-center justify-center rounded-full bg-white text-black'><RxEnvelopeClosed /></span>sample@email.com</a></li>
                  <li><a className='flex items-center sm:gap-[20px] gap-[15px] sm:text-[20px] text-[16px] font-medium text-black' href="mailto:sample@email.com"><span className='sm:h-[43px] h-[35px] sm:w-[43px] w-[35px] sm:min-w-[43px] min-w-[35px] flex items-center justify-center rounded-full bg-white text-black'><IoCallOutline /></span>sample@email.com</a></li>
                  <li className='flex items-center sm:gap-[20px] gap-[15px] sm:text-[20px] text-[16px] font-medium text-black'><span className='sm:h-[43px] h-[35px] sm:w-[43px] w-[35px] sm:min-w-[43px] min-w-[35px] flex items-center justify-center rounded-full bg-white text-black'><FaMapMarkerAlt /></span>No. 23, 2nd Floor, Greams Road, Thousand Lights, Chennai - 600006, Tamil Nadu, India</li>
                </ul>
              </div>
              <div className='md:mt-[0] mt-[30px]'>
                <Image className='md:mb-[30px] mb-[20px]' src={Logo} alt="logo"/>
                <p className='md:mb-[30px] mb-[20px]'>Dedicated to provide customizable, cost-effective and time-saving solutions to provide seamless customer service to businesses and enterprises</p>
                <Link href="/" className="primary-btn">Start Now <span><BsArrowRightCircleFill /></span></Link>
                  <div className='md:mt-[50px] mt-[30px]'>
                    <h3 className='font-inter text-[30px] font-semibold mb-[30px]'>Subscribe now</h3>
                    <form action="#" className='border-[1px] border-[#D0D0D0] rounded-[15px] w-full p-[14px] flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-[20px]'>
                      <input type="email" name="email" id="email" placeholder="Your Email" className='w-full bg-transparent focus:outline-none placeholder:text-black pl-[5px]' />
                      <button className='primary-btn !bg-secondary !border-secondary !px-[30px] hover:!bg-transparent' type="submit">Subscribe <span><BsArrowRightCircleFill /></span></button>
                    </form>
                  </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
