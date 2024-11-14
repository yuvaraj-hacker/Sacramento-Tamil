import React from 'react'
import Goals from '../../Shared/Components/Goals/Goals'
import SponsorSwiper from '../../Shared/Components/SponsorSwiper/SponsorSwiper'
import AboutUs from '../../Shared/Components/About/AboutUs'
function GoalPage() {
    return (
        <>
            <AboutUs title="GOALS" />
            <Goals />
            <SponsorSwiper />
        </>
    )
}
export default GoalPage
