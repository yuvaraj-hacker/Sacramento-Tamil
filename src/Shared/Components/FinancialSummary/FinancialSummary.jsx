import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
function FinancialSummary(props) {
    const { toggleAccordion, accordionItems, openAccordions } = props;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    return (
        <>
            <section className="max-w-[50rem] mx-auto px-5 my-10">
                {accordionItems.map((item) => (
                    <div key={item.id} className=" ">
                        <button className="flex items-center w-full justify-between bg-gray-100 border-b-2 p-2" onClick={() => toggleAccordion(item.id)}   >
                            {item.id}
                            <span className="ml-2">
                                {openAccordions[item.id] ? (
                                    <FaChevronUp className="transition-transform duration-300" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300" />
                                )}
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordions[item.id] ? 'max-h-96' : 'max-h-0'}`}  >   {openAccordions[item.id] && (
                            <div className="p-4 bg-gray-50" onClick={openModal}>
                                {item.content}
                            </div>
                        )}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
export default FinancialSummary;
