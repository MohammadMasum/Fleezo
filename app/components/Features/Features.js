'use client';
import React from 'react';
import Image from "next/image";
import FeaturesIcon1 from "@/app/assets/images/features-icon1.svg"; 
import FeaturesIcon2 from "@/app/assets/images/features-icon2.svg"; 
import FeaturesIcon3 from "@/app/assets/images/features-icon3.svg"; 
import FeaturesIcon4 from "@/app/assets/images/features-icon4.svg"; 
import FeaturesIcon5 from "@/app/assets/images/features-icon5.svg"; 


export default function Features() {

    return (
        <>
            <section className='lg:pb-[120px] pb-[50px]'>
                <div className="container">
                    <div className='mb-[30px]'>
                        <h2 className="main-title text-center">Fleezo <span className='font-light'>Features</span></h2>
                    </div>
                    <div 
                        className="grid sm:grid-cols-2 lg:gap-[45px] gap-[15px] lg:mb-[45px] mb-[15px]">
                        {/* single flex card item */}
                        <div 
                            className='bg-white xl:grid grid-cols-[5fr_7fr] p-[30px] rounded-[20px] xl:gap-[30px] gap-[15px]'
                        >
                            <div className='bg-[#FCFBFF] flex items-center justify-center rounded-[20px] xl:h-[auto] h-[215px] xl:mb-[0] mb-[20px]'>
                                <Image src={FeaturesIcon1} alt="Features icon1" />
                            </div>
                            <div>
                                <h4 className='lg:text-[30px] text-[24px] font-semibold 2xl:mb-[20px] mb-[15px]'>Online Orders</h4>
                                <p>A single system to handle all order types—delivery, takeaway, and dine-in—directly from customers. Manage your store, menu, orders, and more through intuitive order and business dashboards.</p>
                            </div>
                        </div>
                        {/* Other items */}
                        <div 
                            className='bg-white xl:grid grid-cols-[5fr_7fr] p-[30px] rounded-[20px] xl:gap-[30px] gap-[15px]'
                        >
                            <div className='bg-[#FCFBFF] flex items-center justify-center rounded-[20px] xl:h-[auto] h-[215px] xl:mb-[0] mb-[20px]'>
                                <Image src={FeaturesIcon2} alt="Features icon2" />
                            </div>
                            <div>
                                <h4 className='lg:text-[30px] text-[24px] font-semibold 2xl:mb-[20px] mb-[15px]'>Customized Delivery Website</h4>
                                <p>Control your website’s design to match your unique brand and style. Customize every detail to promote your branding and create a seamless customer experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-3 sm:grid-cols-2 lg:gap-[45px] gap-[15px]">
                        {/* single flex-column card item  */}
                        <div className='bg-white p-[30px] rounded-[20px] gap-[30px]'>
                            <div className='bg-[#FCFBFF] flex items-center justify-center h-[215px] rounded-[20px] mb-[20px]'>
                                <Image src={FeaturesIcon3} alt="Features icon3"></Image>
                            </div>
                            <div>
                                <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[20px]'>Seamless Delivery Integration</h4>
                                <p>Select your preference and leverage our integrated logistics partners to handle order deliveries.</p>
                            </div>
                        </div>
                        {/* single flex -columncard item  */}
                        <div className='bg-white p-[30px] rounded-[20px] gap-[30px]'>
                            <div className='bg-[#FCFBFF] flex items-center justify-center h-[215px] rounded-[20px] mb-[20px]'>
                                <Image src={FeaturesIcon4} alt="Features icon4"></Image>
                            </div>
                            <div>
                                <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[20px]'>Effortless Payment Management</h4>
                                <p>Say goodbye to payment hassles—your orders, payments, and bills are smoothly transferred and managed.</p>
                            </div>
                        </div>
                        {/* single flex -columncard item  */}
                        <div className='bg-white p-[30px] rounded-[20px] gap-[30px]'>
                            <div className='bg-[#FCFBFF] flex items-center justify-center h-[215px] rounded-[20px] mb-[20px]'>
                                <Image src={FeaturesIcon5} alt="Features icon5"></Image>
                            </div>
                            <div>
                                <h4 className='lg:text-[30px] text-[24px] font-semibold mb-[20px]'>Cloud Kitchen Exclusives</h4>
                                <p>This platform is designed specifically for cloud kitchens, allowing easy order management, including scheduled orders, all in one place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
