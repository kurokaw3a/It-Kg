import arrow from '../../assets/arrow.png'
import {FC} from "react";

interface SortProps  {
    title: string
    onClick?: () => void
    state?: boolean
}

const Sort: FC<SortProps> = ({ title, onClick, state }) => {
    return (
        <div
            className='flex items-baseline gap-[5px] cursor-pointer'
            onClickCapture={onClick}
        >
            <p>{title}</p>
            <img
                className={`w-[12px] rotate-[180deg] transition-all duration-300 ${
                    state && 'rotate-[0deg]'
                }`}
                src={arrow}
                alt='none'
            />
        </div>
    )
}

export default Sort