import React from 'react'
function Gallerys() {
    return (
        <>
            <section className='max-w-[70rem] mx-auto px-5 my-10'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <div className="relative group    overflow-hidden rounded-lg shadow-lg">
                        <img src="/assets/images/Gallery-Hero/Galler.png" alt="Event" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 group-hover:bg-[#0571BC] group-hover:bg-opacity-50 flex items-end justify-center group-hover:items-center transition-all  ">
                            <p className="text-yellow-400 text-2xl font-bold translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                2023
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Gallerys
