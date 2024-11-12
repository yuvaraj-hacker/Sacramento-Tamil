import React from 'react'
import { Member } from '../../../../public/assets/Json/BoardMember'

function AboutSection() {
    return (
        <>
            <section className="bg-[url('/assets/images/Main/Main-section.png')] bg-no-repeat   space-y-5  lg:py-36  pb-20    w-full">

                <div className='max-w-[60rem] px-5 mx-auto space-y-7 md:text-base text-sm'>
                    <div>
                        <p className="md:text-4xl text-lg concert-one-regular text-center  text-[#E91E31]">WHAT WE DO</p>
                    </div>
                    <div className='grid md:grid-cols-2  grid-cols-2 gap-3'>
                        <div className='bg-[#E91E31] text-center p-2 px-10 text-white font-semibold rounded-tl-3xl rounded-bl-3xl '>
                            <p className="">Serving</p>
                            <p className=""> Sacramento Tamils</p>
                        </div>
                        <div className='bg-[#E91E31] text-center p-2 px-14 text-white font-semibold rounded-tr-3xl rounded-br-3xl '>
                            <p className=""> Hosting discussions </p>


                            <p className=""> on Tamil topics</p>
                        </div>
                        <div className='bg-[#E91E31] text-center p-2 px-14 text-white font-semibold rounded-tl-3xl rounded-bl-3xl '>
                            <p className=""> Promoting Tamil </p>

                            <p className="">
                                language and culture</p>
                        </div>
                        <div className='bg-[#E91E31] text-center p-2 px-14 text-white font-semibold rounded-tr-3xl rounded-br-3xl '>
                            <p className="">Serving</p>
                            <p className=""> Sacramento Tamils</p>
                        </div>
                        <div className='bg-[#E91E31] text-center p-2 px-14 text-white font-semibold rounded-tl-3xl rounded-bl-3xl '>
                            <p className="">Serving</p>
                            <p className=""> Sacramento Tamils</p>
                        </div>
                        <div className='bg-[#E91E31] text-center p-2 px-14 text-white font-semibold rounded-tr-3xl rounded-br-3xl '>
                            <p className="">Serving</p>
                            <p className=""> Sacramento Tamils</p>
                        </div>
                        <div className='bg-[#E91E31] text-center p-2 px-14 text-white font-semibold rounded-tl-3xl rounded-bl-3xl '>
                            <p className="">Serving</p>
                            <p className=""> Sacramento Tamils</p>
                        </div>
                        <div className='bg-[#E91E31] text-center p-2 px-14 text-white font-semibold rounded-tr-3xl rounded-br-3xl '>
                            <p className="">Serving</p>
                            <p className=""> Sacramento Tamils</p>
                        </div>

                    </div>
                </div>

                <div className='bg-[#0571BC] max-w-[60rem] px-5 mx-auto space-y-6 rounded-2xl p-5'>
                    <p className="text-[#FFE134] text-center md:text-4xl text-xl concert-one-regular" >BOARD MEMBERS</p>
                    <div className='flex justify-evenly flex-wrap gap-6 text-center'>
                        {Member.map((item, index) => (
                            <div key={index} className="  ">
                                <img
                                    src={item.imgSrc}
                                />
                                <div className='border   mx-3   rounded-bl-lg rounded-br-lg bg-[#FFE134]'>
                                    <p className="text-[#E91E31] text-sm"> {item.name}</p>
                                    <p className=""> {item.role}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className=' concert-one-regular cursor-pointer  text-[#E91E31] rounded-lg bg-white p-2 w-fit mx-auto'>
                        VIEW ALL
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutSection
