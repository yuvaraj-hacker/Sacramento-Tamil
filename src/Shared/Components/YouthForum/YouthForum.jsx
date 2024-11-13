import React from 'react'
import AboutUs from '../About/AboutUs'
import SponsorSwiper from '../SponsorSwiper/SponsorSwiper'
import { Youthforum } from '../../../../public/assets/Json/YouthForum'

function YouthForum() {
    return (
        <>
            <section>
                <AboutUs title="YOUTH FORUM" />
            </section>
            <section className='max-w-[80rem] mx-auto px-5 my-10'>
                <div>
                    <div className='flex  flex-wrap gap-10' >
                        {Youthforum.map((item, index) => (
                            <div key={index} className="w-48 h-64 relative overflow-hidden rounded-xl shadow-lg bg-white group hover:bg-gradient-to-t hover:from-blue-700 hover:to-blue-300 transition-all duration-300 ease-out mx-auto">
                                <img
                                    src={item.imgSrc}
                                    alt="Profile"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-blue-700 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <p className="text-white font-bold text-center">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <SponsorSwiper />
            </section>
        </>
    )
}

export default YouthForum
