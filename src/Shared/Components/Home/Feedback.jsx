import React from 'react'

function Feedback() {
    return (
        <>
            <section className="bg-[url('/assets/images/Feedback/Feedback.png')] bg-center  mt-10     bg-contain">
                <div className='max-w-[90rem] px-5 mx-auto py-10 pb-40 '>
                    <div>
                        <p className="text-center text-[#E91E31] md:text-3xl text-base concert-one-regular font-bold">FEEDBACK</p>
                    </div>
                    <div className='space-y-5'>


                        <div className='grid grid-cols-3 gap-4'>
                            <div className=' '>
                                <label htmlFor="" className='text-lg'>Name *</label>
                                <input className='w-full rounded-md p-2' type=" text" />

                            </div>
                            <div>
                                <label htmlFor="" className='text-lg'>Email *</label>
                                <input className='w-full rounded-md p-2' type="text" />
                            </div>
                            <div>
                                <label htmlFor="" className='text-lg'>Event Name *</label>
                                <input className='w-full rounded-md p-2' type="text" />
                                <p className="text-sm mt-2 italic">Enter a event name (Example: Summer Picnic) or type General</p>
                            </div>

                        </div>
                        <div className='grid items-center grid-cols-8 gap-10  '>

                            <div className='flex flex-col  col-span-7'>
                                <label htmlFor=" " className='text-lg'>Feedback</label>
                                <input type="text" name="" id="" className='p-2 rounded-md' />
                            </div>
                            <button className='bg-[#E91E31] text-white py-2 mt-6 rounded-md'>
                                SEND
                            </button>
                        </div>
                    </div>
                </div>

            </section >
            <section className='px-5'>
                <div className=' relative bottom-28  max-w-[88rem]  bg-white border rounded-xl mx-auto '>
                    <div className='flex items-center gap-10'>
                        <img src="/assets/images/Feedback/Coin.png" alt="" />
                        <div>
                            <div className='flex '>
                              
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Feedback
