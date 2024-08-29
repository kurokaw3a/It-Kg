import Accordion from '../../Components/UI/Accordion'
import Button, {ButtonVariant} from '../../Components/UI/Button'
import Input, {InputVariant} from '../../Components/UI/Input'
import {useAppSelector} from "../../hooks/redux";

const UserFaq = () => {
    const {faq}  = useAppSelector(state => state.user)
    return (
        <div className='flex flex-col items-center md:gap-[160px] text-[#333333] md:pt-[150px] md:pb-[200px] pt-[40px] pb-[100px] gap-[130px]'>
            <div className='md:flex md:flex-row md:items-start md:gap-[290px] flex flex-col items-center gap-[75px]'>
                <h1 className='text-[40px] font-[700]'>FAQ</h1>
                <div className='md:p-0 pl-[15px] pr-[15px]'>
                    <Accordion items={faq} />
                </div>
            </div>
            <div className='flex flex-col items-center md:gap-[80px] gap-[50px]'>
                <h1 className='text-[25px] md:text-[40px] font-[700]'>
                    Для жалобы или обращения
                </h1>
                <form className='flex flex-col items-center md:gap-[65px] md:max-w-[900px] gap-[50px]'>
                    <div className='md:flex md:flex-row md:flex-wrap md:gap-x-[20px] md:gap-y-[40px] flex flex-col items-center gap-[20px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <label className='text-[13px] font-[700]' htmlFor='input'>
                                ИМЯ, ФАМИЛИЯ
                            </label>
                            <Input variant={InputVariant.appeal} type='text' />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <label className='text-[13px] font-[700]' htmlFor='input'>
                                КРАТКАЯ ПРИЧИНА ЖАЛОБЫ *
                            </label>
                            <Input variant={InputVariant.appeal} type='text' required />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <label className='text-[13px] font-[700]' htmlFor='input'>
                                НОМЕР ТЕЛЕФОНА
                            </label>
                            <Input variant={InputVariant.appeal} type='tel' />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <label className='text-[13px] font-[700]' htmlFor='input'>
                                АДРЕС ЭЛ.ПОЧТЫ *
                            </label>
                            <Input variant={InputVariant.appeal} type='email' required />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <label className='text-[13px] font-[700]' htmlFor='input'>
                                ОПИСАНИЕ
                            </label>
                            <Input variant={InputVariant.appeal} type='text' />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <label className='text-[13px] font-[700]' htmlFor='input'>
                                ПРИКРЕПИТЬ ФАЙЛ
                            </label>
                            <Input variant={InputVariant.appeal} type='file' />
                        </div>
                    </div>
                    <Button variant={ButtonVariant.appeal}>ОТПРАВИТЬ</Button>
                </form>
            </div>
        </div>
    )
}

export default UserFaq