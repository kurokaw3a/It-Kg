import {FC} from 'react'
import searchIcon from '../../assets/inputsearch.png'

const searchInputBlockStyle:string = 'flex items-end gap-[20px]'
const searchInputStyle:string =
  'w-[150px] outline-none border-b-[1px] border-color-[#333333]'
const appealInputStyle:string =
  'md:w-[415px] w-[360px] outline-none border-[1px] border-color-[#33333333] rounded pl-[5px]'
const appealFileInputStyle:string =
  'file:bg-[#5DB7DE] file:uppercase file:text-[13px] file:cursor-pointer file:text-white file:border-none file:rounded-[10px] file:p-[8px] text-[#333333] text-[13px] font-[700] uppercase'


export enum InputVariant {
    search = 'search',
    appeal = 'appeal',
    appealArea = 'appeal-area',
}


interface InputProps {
    variant: InputVariant
    type?: string
    placeholder?: string
    value?: string
    name?: string
    required?: boolean   
    onChange?: (e?: any) => void
}


const Input: FC<InputProps> = ({
  variant,
  type,
  placeholder,
  value,
  onChange,
  name,
  required,
}) => {
    return (
        <div className={variant === InputVariant.search ? searchInputBlockStyle : ''}>
            {variant === InputVariant.search && (
                <img className='w-[20px]' src={searchIcon} alt='error'/>
            )}
            {variant !== InputVariant.appealArea && (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={
                        (variant === InputVariant.search ? searchInputStyle : '') ||
                        (variant === InputVariant.appeal && type !== 'file' ? appealInputStyle : '') ||
                        (variant === InputVariant.appeal && type === 'file' ? appealFileInputStyle : '')
                    }
                    required={required}
                />
            )}
            {variant === InputVariant.appealArea && (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${appealInputStyle} h-[100px] resize-none`}
                />
            )}
        </div>
    );
}

export default Input;