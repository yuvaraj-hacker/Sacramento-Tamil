import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const targetDate = new Date('2024-11-31T23:59:59');
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
 
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
 
        return () => clearInterval(timer);
    }, []);
    return (
        <div className='flex gap-5 md:text-base text-sm'>
            <div className='text-center'>
                <div className='bg-[#E91E31] w-fit px-3 py-1 text-white rounded-md font-bold'>
                    {String(timeLeft.days).padStart(2, '0')}
                </div>
                <p className='text-[#E91E31] font-bold'>DAYS</p>
            </div>
            <div className='text-center'>
                <div className='bg-[#E91E31] w-fit px-3 py-1 text-white rounded-md font-bold'>
                    {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <p className='text-[#E91E31] font-bold'>HRS</p>
            </div>
            <div className='text-center'>
                <div className='bg-[#E91E31] w-fit px-3 py-1 text-white rounded-md font-bold'>
                    {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <p className='text-[#E91E31] font-bold'>MINS</p>
            </div>
            <div className='text-center'>
                <div className='bg-[#E91E31] w-[40px] px-3 py-1 text-white rounded-md font-bold text-center'>
                    {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <p className='text-[#E91E31] font-bold'>SECS</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
