import React from 'react';

function Footer() {
  return (
    <>

      <section className="bg-[url('/assets/images/Footer/Foot.png')]    bg-center flex items-center justify-center md:h-[50vh] w-full">
        <div className="max-w-[90rem] mx-auto px-5 md:my-0 my-10">
          <div className="grid md:grid-cols-3 gap-5 grid-cols-1 place-items-center">
            <div >
              <img className='md:w-96 w-72' src="/assets/images/Footer/Footer-Logo.png" alt="Sacramento Tamil Mandrum Logo" />
            </div>
            <div className="text-white text-center md:text-left md:space-y-10 space-y-5">
              <div>
                <h1 className="text-[#FFE134] font-semibold mb-2 md:text-xl text-base">QUICK LINKS</h1>
              </div>
              <div className='space-y-2'>
                <p>Board Members</p>
                <p>Goals</p>
                <p>By Laws</p>
                <p>Financial Summary</p>
                <p>Youth Forum</p>
                <p>Gallery</p>
                <p>Events</p>
              </div>
            </div>

            <div className="text-white text-center md:text-left ">
              <div className='md:space-y-10 mb-7 '>
                <div>
                  <h1 className="text-[#FFE134] font-semibold mb-2 md:text-xl text-base">CONTACT US</h1>
                </div>
                <div className='space-y-2'>
                  <p>Email: xxxxxxxxxxxxxxx</p>
                  <p>Phone: xxxxxxxxxxxxxxx</p>
                </div>
              </div>
              <div className='md:space-y-10'>
                <div>
                  <h1 className="text-[#FFE134] font-semibold mt-4 mb-2 md:text-xl text-base">LOCATE US</h1>
                </div>
                <div className='space-y-2'>
                  <p>xxxxxxxxxxxxxxxxxxxx</p>
                  <p>xxxxxxxxxxxxxxxxxxxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full text-center bg-[#E52E3D] text-white py-3 px-5'>
        <p className=" md:text-base text-sm">© Sacramento Tamil Mandrum 2024. Developed by  <a href='http://arrowthought.com/' target='_blank' > <span className='text-[#FFE134] hover:underline '> Arrow Thought</span> </a> </p>
      </section>
    </>
  );
}

export default Footer;
