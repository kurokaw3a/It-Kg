import {FC, useState} from 'react';
import arrow from '../../assets/headerarrow.png'
import { IDropdown } from '../../Types/types'
import {NavLink} from "react-router-dom";

interface DropdownProps {
  title: string
  items: IDropdown[]
  link: string  
}

const Dropdown: FC<DropdownProps> = ({ title, items, link }) => {
  const [itemsShow, setShowItems] = useState<boolean>(false)
  const showItems = () => {
    setShowItems(true)
  }
  const closeItems = () => {
    setShowItems(false)
  }
    return (
        <div onMouseOverCapture={showItems} onMouseLeave={closeItems}>
            <div className='flex items-baseline gap-[5px]'>
                <NavLink to={link} className='cursor-pointer'>
                    {title}
                </NavLink>
                <img className='w-[10px]' src={arrow} alt='none'/>
            </div>
            <div
                onMouseOverCapture={closeItems}
                className={`absolute z-50 bg-[#ffffff] rounded-[10px] grid overflow-hidden transition-all duration-300 ease-in-out ${
                    itemsShow
                        ? 'grid-rows-[1fr] opacity-100 pr-[10px] pl-[10px] pb-[10px] mt-[20px]'
                        : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className='overflow-hidden flex flex-col gap-[10px]'>
                    {items?.map(el =>
                        <div key={el.title}>
                            {el.title}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dropdown