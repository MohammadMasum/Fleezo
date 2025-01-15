'use client';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TestimonialAuthor1 from "@/app/assets/images/testimonial-author.png"; 
import Burger from "@/app/assets/images/burger.png"; 
import Burger2 from "@/app/assets/images/burger2.png"; 

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} slick-prev`}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <FaAngleLeft />
      </button>
    );
  };
  
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} slick-next`}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <FaAngleRight />
      </button>
    );
  };

export default function Testimonials() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className='lg:pt-[120px] pt-[50px]'>
      <div className="container 2xl:max-w-[1320px] relative z-10">
      <Image className='xl:block hidden absolute top-[10%] -left-[5%]' src={Burger} alt="Burger"/>
      <Image className='xl:block hidden absolute top-[5%] -right-[5%]' src={Burger2} alt="Burger2"/>
        <div className='mb-[40px]'>
          <h2 className="main-title text-center mb-[15px]">
            <span className='font-normal'>Trusted by</span> Food Entrepreneurs
          </h2>
          <p className='max-w-[940px] mx-auto text-center'>
            Our delivery platform is trusted by food entrepreneurs and restaurant owners for seamless order management and business growth.
          </p>
        </div>
        <Slider {...sliderSettings} className='testimonial-slider'>
          {/* Single Slider Item */}
          <div>
            <div className='bg-white text-center sm:p-[45px] sm:px-[30px] px-[40px] py-[30px]  sm:rounded-[38px] rounded-[20px]'>
              <Image
                className='h-[100px] w-[100px] rounded-full border-[1px] border-[#60BDB2] mx-auto mb-[20px]'
                src={TestimonialAuthor1}
                alt="TestimonialAuthor1"
              />
              <p className='max-w-[1000px] text-[#4C4C4C] xl:text-[24px] lg:text-[18px] text-[16px] font-semibold mx-auto mb-[20px]'>
                The ability to provide 24/7 support through our online food delivery management tool has been a game-changer for restaurant owners. We've seen a significant boost in customer satisfaction as a result.
              </p>
              <p className='text-black text-[24px] font-semibold'>- Alex</p>
            </div>
          </div>
          {/* Single Slider Item */}
          <div>
            <div className='bg-white text-center sm:p-[45px] sm:px-[30px] px-[40px] py-[30px]  sm:rounded-[38px] rounded-[20px]'>
              <Image
                className='h-[100px] w-[100px] rounded-full border-[1px] border-[#60BDB2] mx-auto mb-[20px]'
                src={TestimonialAuthor1}
                alt="TestimonialAuthor1"
              />
              <p className='max-w-[1000px] text-[#4C4C4C] xl:text-[24px] lg:text-[18px] text-[16px] font-semibold mx-auto mb-[20px]'>
                The ability to provide 24/7 support through our online food delivery management tool has been a game-changer for restaurant owners. We've seen a significant boost in customer satisfaction as a result.
              </p>
              <p className='text-black text-[24px] font-semibold'>- Alex</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
