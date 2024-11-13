import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleIcons = () => {
    setIsVisible(!isVisible);
  };


  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="bg-[url('/assets/images/Header/ddd.png')] bg-center bg-white bg-contain shadow-md  fixed w-full top-0  z-20">
        <header className="max-w-[100rem] mx-auto px-5">
          <div className="flex items-center  justify-between ">
            <Link to='/'>
              <div className='flex gap-5 items-center lg:my-0 my-3'>

                <div className="flex items-center gap-2">
                  <img src="/assets/images/Header/Logo (2).png" alt="logo" className='w-20' />
                </div>
                <div>
                  <p className="text-[#5E0000] md:text-xl text-sm font-bold">SACRAMENTO</p>
                  <p className="text-[#0571BC] md:text-base text-sm font-semibold">TAMIL MANDRAM</p>
                </div>
              </div>
            </Link>
            <div className='block lg:hidden'>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div className="text-[#f4e316] lg:block  space-x-2 hidden">
              <Link
                to="/"
                className={`p-3 ps-px sm:px-3 md:py-2 2xl:text-lg text-sm hover:text-white hover:bg-[#0470BC] focus:outline-none ${isActive("/") ? "text-white bg-[#0470BC]" : "text-[#E91E31]"
                  }`}
                aria-current="page"
              >
                Home
              </Link>

              <Link
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`p-3 ps-px sm:px-3 md:py-2 2xl:text-lg group text-[#5E0000] text-sm relative hover:text-white hover:bg-[#0470BC] focus:outline-none ${isActive("/about") ? "text-white bg-[#0470BC]" : "text-[#E91E31]"}`}
              >
                About Us
                <i class={`fi fi-rr-angle-small-down text-red-500 group-hover:text-white relative top-1  ${isActive("/about") ? "text-white bg-[#0470BC]" : "text-[#E91E31]"}`}></i>

                {isHovered && (
                  <div className="absolute  left-0   mt-2 bg-white border rounded shadow-lg w-60">
                    <Link to="/about" className="block px-4 py-2 text-[#E91E31] hover:bg-[#0470BC] hover:text-white">
                      Board Members
                    </Link>
                    <Link to="/goal" className="block px-4 py-2 text-[#E91E31] hover:bg-[#0470BC] hover:text-white">
                      Goals
                    </Link>
                    <Link to="/financial" className="block px-4 py-2 text-[#E91E31] hover:bg-[#0470BC] hover:text-white">
                      Financial Summary
                    </Link>
                    <Link to="/youth" className="block px-4 py-2 text-[#E91E31] hover:bg-[#0470BC] hover:text-white">
                      Youth Forum
                    </Link>
                  </div>
                )}
              </Link>
              <Link
                to='/gallery'
                className={`p-3 ps-px sm:px-3 md:py-2  2xl:text-lg  text-[#5E0000] text-sm  hover:text-white   hover:bg-[#0470BC] focus:outline-none ${isActive("/gallery") ? "text-white bg-[#0470BC]" : "text-[#E91E31]"}`}
              >
                Gallery
              </Link>
              <Link
                className={`p-3 ps-px sm:px-3 md:py-2   2xl:text-lg  text-[#5E0000] text-sm  hover:text-white   hover:bg-[#0470BC]   focus:outline-none ${isActive("/events") ? "text-white bg-[#0470BC]" : "text-[#E91E31]"}`}
                to='/events'
              >
                Events
              </Link>
              <Link
                className={`p-3 ps-px sm:px-3 md:py-2  2xl:text-lg   text-[#5E0000] text-sm  hover:text-white   hover:bg-[#0470BC]  focus:outline-none ${isActive("/tamilschools") ? "text-white bg-[#0470BC]" : "text-[#E91E31]"} `}
                to='/tamilschools'
              >
                Tamil Schools
              </Link>

            </div>

            <div className='bg-[#0470BC] px-5 py-7 lg:block hidden text-white font-bold cursor-pointer'>
              Donate
            </div>


          </div>
        </header>
        {isOpen && (
          <div className="lg:hidden block bg-[#0571BC] text-[#f4e316] p-5 text-center border ">
            <Link
              to="/"
              className={`block py-2 text-lg  focus:outline-none  hover:underline ${isActive("/") ? "text-white" : "text-[#f4e316]"} `}
              aria-current="page"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 text-lg  focus:outline-none  hover:underline ${isActive("/about") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/course"
              className={`block py-2 text-lg  focus:outline-none  hover:underline ${isActive("/course") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/admission"
              className={`block py-2 text-lg  focus:outline-none  hover:underline ${isActive("/admission") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/university-details"
              className={`block py-2 text-lg  focus:outline-none  hover:underline ${isActive("/university-details") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              Tamil Schools
            </Link>
            <Link
              to="/contact"
              className={`block py-2 text-lg  focus:outline-none  hover:underline ${isActive("/contact") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>

          </div>
        )}
      </div>
      <div className="h-[2.5rem]"></div>
    </>
  );
}
export default Header;