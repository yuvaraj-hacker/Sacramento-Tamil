import React from 'react'
import AboutUs from '../About/AboutUs'
import SponsorSwiper from '../SponsorSwiper/SponsorSwiper'
import Event from '../Home/Event'

function Events() {
    return (
        <>
            <section>
                <AboutUs title="EVENTS" />
            </section>
            <section>
                <Event />
            </section>
            <section>
                <SponsorSwiper />
            </section>
        </>
    )
}

export default Events
