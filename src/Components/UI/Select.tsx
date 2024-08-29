import {FC, useState} from "react";

import arrow from '../../assets/languagearrow.png'

export enum SelectVariant {
    lang = 'language'
}

interface SelectProps {
    variant: string
    setLang: (value: string) => void
    items: string[]
    initialValue: string
}


const Select: FC<SelectProps> = ({setLang, items, initialValue, variant}) => {

    const [value, setValue] = useState<string>(initialValue)

    const [itemsShow, setShowItems] = useState<boolean>(false)

    const showItems = () => {
        setShowItems((prev) => !prev)
    }

    const selectItem = (item: string) => {
        setValue(item)
        setLang(item)
        showItems()
    }


    const openSelectMenu = () => {
        showItems()
    }


    return <div>
        {variant === SelectVariant.lang &&
            <div>
                <div onClick={openSelectMenu} className='flex items-center gap-[10px] cursor-pointer w-[100px]'>
                    <p>{value}</p>
                    <img src={arrow} alt='none'/>
                </div>
                <div
                    className={`absolute z-[2] h-[max-content] bg-[#FFFFFF] rounded-[10px] grid overflow-hidden transtition-all duration-300 ease-in-out ${
                        itemsShow
                            ? 'grid-rows-[1fr] opacity-100 pt-[25px] pl-[10px] pr-[10px] pb-[10px]'
                            : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                    <div className='overflow-hidden'>
                        {items.map((el) => {
                            return (
                                <option
                                    key={el}
                                    onClick={() => selectItem(el)}
                                    className='hover:bg-gray-100 p-[5px] rounded cursor-pointer duration-[0.5s]'
                                    value={el}
                                >
                                    {el}
                                </option>
                            )
                        })}
                    </div>
                </div>
            </div>
        }
    </div>;
};

export default Select;