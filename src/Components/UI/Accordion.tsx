import {FC, useState} from 'react'
import pdfIcon from '../../assets/pdf.png'
import {IAccordion} from "../../Types/types";

interface AccordionProps {
    items: IAccordion[]
}

const Accordion: FC<AccordionProps> = ({ items }) => {
    const [active, setActive] = useState<any>(null)
    const showItems = (i: number) => {
        if (active === i) {
            setActive(null)
        } else {
            setActive(i)
        }
    }
    return (
        <div className='flex flex-col items-center gap-[10px] text-black md:p-0'>
            {items.map((el: IAccordion, i: number) => (
                <div key={el.id}>
                    <div
                        className='flex items-center bg-[#0057E10D] md:w-[900px] w-[365px] select-none cursor-pointer'
                        onClickCapture={() => showItems(i)}
                    >
                        <div className='bg-[#0057E11A] md:w-[130px] w-[103px] text-center md:pt-[30px] md:pb-[30px] pt-[15px] pb-[15px]'>
                            <p className='text-[28px] font-[400] font-[Oswald]'>0{i + 1}</p>
                        </div>
                        <div className='md:w-[750px] w-[350px] md:pl-[36px] pl-[20px] pr-[20px] flex items-center justify-between'>
                            <p className='md:text-[22px] text-[18px] mx:max-w-[200px] font-[400] font-[Oswald] break-all'>
                                {el.title}
                            </p>
                            {el.file && <img className='w-[40px]' src={pdfIcon} alt='none' />}
                        </div>
                    </div>
                    <div
                        className={`bg-[#0057E126] rounded-b-[11px] md:max-w-[900px] max-w-[365px] grid overflow-hidden transition-all duration-300 ease-in-out ${
                            i === active
                                ? 'grid-rows-[1fr] opacity-100 pl-[50px] pr-[50px] pt-[20px] pb-[20px]'
                                : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                        <p className='md:text-[22px] text-[18px] font-[400] font-[Oswald] overflow-hidden'>
                            {el.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion