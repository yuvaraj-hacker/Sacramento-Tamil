import React, { useRef } from 'react'
import { Events } from '../../../../public/assets/Json/NewEvent'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Event(props) {
    const { mobileNextRef, mobilePrevRef } = props;
    return (
        <>
            <section className=' max-w-[90rem] mx-auto   my-10 md:my-20 '>
                <div>
                    <div className='md:space-y-10 space-y-5'>
                        <h2 className="text-2xl font-bold text-center text-[#8F000D]    archivo-black-regular">EVENTS</h2>
                        <section className="flex flex-col items-center relative  px-14 ">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,

                                    },
                                    768: {
                                        slidesPerView: 2,

                                    },
                                    1024: {
                                        slidesPerView: 4,

                                    },
                                }}
                                navigation={{ nextEl: '.swiper-button-nextdeals', prevEl: '.swiper-button-prevdeals' }}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="w-full "
                            >
                                {Events.map((sponsor, index) => (
                                    <SwiperSlide key={index} className="flex justify-center">
                                        <div>
                                            <div className="flex items-center space-x-4">
                                                <img src={sponsor.imgSrc} className="bg-no-repeat" />
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div
                                ref={mobileNextRef}
                                className="absolute  right-0   top-1/2  rotate-90  cursor-pointer"  >
                                <img className=" swiper-button-nextdeals px-2 w-14" src="/assets/images/Hero-Section/Top.png" alt="Previous" />
                            </div>
                            <div
                                ref={mobilePrevRef}
                                className="absolute  left-0 top-1/2   rotate-90 cursor-pointer">
                                <img className=" swiper-button-prevdeals px-2 w-14" src="/assets/images/Hero-Section/Bottom.png" alt="Next" />
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <div id='Donate'>

            </div>
        </>
    )
}

export default Event
