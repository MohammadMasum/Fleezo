import React from 'react';
import Image from "next/image";
import BrandImage1 from "@/app/assets/images/brand1.svg"; 
import BrandImage2 from "@/app/assets/images/brand2.svg"; 
import BrandImage3 from "@/app/assets/images/brand3.svg"; 
import BrandImage4 from "@/app/assets/images/brand4.svg"; 
import BrandImage5 from "@/app/assets/images/brand5.svg"; 
export default function Brand() {
  return (
    <>
      <section className='lg:pt-[80px] pt-[50px]'>
        <div className="container">
            <div className='mb-[30px]'>
                <h3 className='lg:text-[40px] text-[36px] text-center'><span className='font-normal'>Trusted by the most</span> loved companies </h3>
            </div>
            <div className="flex items-center justify-center flex-wrap xl:gap-[20px_100px] gap-[20px_40px]">
                {/* single brand item  */}
                <div className="flex items-center">
                    <Image className='xl:max-w-[170px] max-w-[120px]' src={BrandImage1} alt="Brand1"/>
                </div>
                 {/* single brand item  */}
                 <div className="flex items-center">
                    <Image className='xl:max-w-[170px] max-w-[120px]' src={BrandImage2} alt="Brand2"/>
                </div>
                 {/* single brand item  */}
                 <div className="flex items-center">
                    <Image className='xl:max-w-[170px] max-w-[120px]' src={BrandImage3} alt="Brand3"/>
                </div>
                 {/* single brand item  */}
                 <div className="flex items-center">
                    <Image className='xl:max-w-[170px] max-w-[120px]' src={BrandImage4} alt="Brand4"/>
                </div>
                 {/* single brand item  */}
                 <div className="flex items-center">
                    <Image className='xl:max-w-[170px] max-w-[120px]' src={BrandImage5} alt="Brand5"/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
