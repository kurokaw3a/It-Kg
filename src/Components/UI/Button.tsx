import mainButtonIcon from '../../assets/mainbutton.png'
import arrowIcon from '../../assets/newsarrow.png'
import {FC, ReactNode} from "react";

const stylesMain: string = 'w-max flex items-center gap-[15px] font-[600]'
const stylesAppeal: string = 'flex items-center gap-[15px] font-[700] text-[#3D348B]'
const stylesNews: string =
    'text-white text-[16px] bg-[#3D348B] font-[400] pl-[17px] pr-[17px] pt-[5px] pb-[5px] rounded'

export enum ButtonVariant {
    main = 'main',
    appeal = 'appeal',
    news = 'news'
}


interface ButtonProps {
    children: ReactNode
    variant: ButtonVariant
    onClick?: () => void
}


const Button: FC<ButtonProps> = (props) => {
    const { variant } = props
    return (
        <button
            onClick={props.onClick}
            className = {
                (variant === ButtonVariant.main ? stylesMain : '') ||
                (variant === ButtonVariant.appeal ? stylesAppeal : '') ||
                (variant === ButtonVariant.news ? stylesNews : '')
            }
        >
            {props.children}
            {variant === 'main' && (
                <img className='w-[30px]' src={mainButtonIcon} alt='error' />
            )}
            {variant === 'appeal' && (
                <img className='w-[25px]' src={arrowIcon} alt='error' />
            )}
        </button>
    )
}

export default Button