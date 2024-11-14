import React from 'react'
import Events from '../../Shared/Components/Eventss/Events'
import AboutUs from '../../Shared/Components/About/AboutUs'
import SponsorSwiper from '../../Shared/Components/SponsorSwiper/SponsorSwiper'
import Event from '../../Shared/Components/Home/Event'
function EventsPage() {
  return (
    <>
        <AboutUs title="EVENTS" />
        <Events />
        <Event />
        <SponsorSwiper />
    </>
  )
}
export default EventsPage
