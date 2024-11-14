import React, { useState } from 'react'
import FinancialSummary from '../../Shared/Components/FinancialSummary/FinancialSummary'
import AboutUs from '../../Shared/Components/About/AboutUs';
import SponsorSwiper from '../../Shared/Components/SponsorSwiper/SponsorSwiper';
function FinancialPage() {
    const [openAccordions, setOpenAccordions] = useState({});
    const toggleAccordion = (index) => {
        setOpenAccordions((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const accordionItems = [
        { id: 2023, content: 'Financial data for 2023' },
        { id: 2022, content: 'Financial data for 2022' },
        { id: 2021, content: 'Financial data for 2021' },
    ];
    return (
        <>
            <AboutUs title="FINANCIAL SUMMARY" />
            <FinancialSummary openAccordions={openAccordions} accordionItems={accordionItems} toggleAccordion={toggleAccordion} setOpenAccordions={setOpenAccordions} />
            <SponsorSwiper />
        </>
    )
}
export default FinancialPage
