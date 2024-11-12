import React from 'react'
import SwipeSponsor from './SwipeSponsor'
import { Sponsor } from '../../../../public/assets/Json/Swiper'
import AboutSection from './AboutSection'
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EventProgram } from '../../../../public/assets/Json/Event'

function HomePage({ }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <section className="bg-[url('/assets/images/Header/Hero-sec.png')] bg-cover bg-no-repeat lg:my-0 my-10  flex items-center justify-center   lg:h-[100vh]   w-full">
                <div className='mx-auto max-w-[90rem] px-5 lg:my-0 my-10'>
                    <div className='grid lg:grid-cols-4 grid-cols-1   gap-10 items-center'>
                        <div className=' space-y-6 lg:col-span-3 '>

                            <div>
                                {EventProgram.map((item, index) => (
                                    <div key={index} className="flex flex-wrap md:flex-nowrap  items-center gap-5">
                                        <img
                                            src={item.imgSrc}
                                        />
                                        <div className='space-y-5'>
                                            <p className=" concert-one-regular md:text-xl text-base text-white w-fit px-3 rounded-md bg-[#0470BC]">UPCOMING EVENT</p>
                                            <p className="md:text-2xl text-lg text-[#E91E31] font-semibold">சாக்ரமெண்டோ தமிழ் மன்றம்</p>
                                            <p className="text-[#0470BC] font-semibold text-xl">நடத்தும்</p>
                                            <p className="  font-bold  text-[#0470BC] md:text-4xl text-xl text-outline-yellow">முதலாம் ஆண்டு
                                                விளையாட்டு போட்டி</p>
                                            <p className="font-bold text-[#FFD900]  bg-[#0470BC] w-fit p-2 rounded-md">GAMES-CARROM, CHESS <span className='text-white'> &</span> TABLE TENNIS</p>
                                            <p className="concert-one-regular text-[#0470BC] text-xl">Registration Deadline: <span className='text-[#E91E31]'> 23-11-24</span></p>
                                            <p className="concert-one-regular text-[#0470BC] text-xl">Date Duration:  </p>
                                            <div className='flex gap-5'>
                                                <div className='text-center'>
                                                    <div className='bg-[#E91E31] w-fit px-3 py-1 text-white rounded-md font-bold'>
                                                        17
                                                    </div>
                                                    <p className="text-[#E91E31] font-bold">DAYS</p>
                                                </div>
                                                <div className='text-center'>
                                                    <div className='bg-[#E91E31] w-fit px-3 py-1 text-white rounded-md font-bold'>
                                                        15
                                                    </div>
                                                    <p className="text-[#E91E31] font-bold">HRS</p>
                                                </div>
                                                <div className='text-center'>
                                                    <div className='bg-[#E91E31] w-fit px-3 py-1 text-white rounded-md font-bold'>
                                                        55
                                                    </div>
                                                    <p className="text-[#E91E31] font-bold">MINS</p>
                                                </div>
                                                <div className='text-center'>
                                                    <div className='bg-[#E91E31] w-fit px-3 py-1 text-white rounded-md font-bold'>
                                                        00
                                                    </div>
                                                    <p className="text-[#E91E31] font-bold">SECS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className='lg:ml-auto'>
                            <h2 className="text-2xl font-bold text-center text-red-600 mb-5 .archivo-black-regular">OUR SPONSORS</h2>
                            <section className="flex flex-col items-center relative py-10 xl:h-[620px] lg:h-[500px] md:h-[400px] h-[250px]">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            direction: 'horizontal', // Horizontal for small screens 
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            direction: 'horizontal', // Horizontal for medium screens
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            direction: 'vertical', // Vertical for large screens
                                        },
                                    }}
                                    navigation={{ nextEl: '.swiper-button-nextdeal', prevEl: '.swiper-button-prevdeal' }}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    className="w-full max-w-5xl"
                                >
                                    {Sponsor.map((sponsor, index) => (
                                        <SwiperSlide key={index} className="flex justify-center">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{sponsor.tier}</h3>
                                                <div className="flex items-center space-x-4">
                                                    <img src={sponsor.imgSrc} className="bg-no-repeat" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>


                                <div
                                    ref={prevRef}
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:block hidden -translate-y-1/2 z-10 cursor-pointer"
                                >
                                    <img className="swiper-button-prevdeal px-2" src="/assets/images/Hero-Section/Top.png" alt="Previous" />
                                </div>


                                <div
                                    ref={nextRef}
                                    className="absolute bottom-0 left-1/2 transform lg:block hidden -translate-x-1/2 translate-y-1/2 z-10 cursor-pointer"
                                >
                                    <img className="swiper-button-nextdeal px-2" src="/assets/images/Hero-Section/Bottom.png" alt="Next" />
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HomePage
