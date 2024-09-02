import emailIcon from '../assets/footeremail.png'
import locationIcon from '../assets/footerlocation.png'
import phoneIcon from '../assets/footerphone.png'
import {FC} from "react";

const Footer: FC = () => {
    return (
        <footer className='bg-[#3D348B] text-white pb-[30px]'>
            <div className='bg-[#464080] flex items-center md:justify-around justify-between p-[20px] pb-[20px] font-[600]'>
                <address className='flex items-center gap-[20px] text-[16px] not-italic'>
                    <img className='w-[25px]' src={locationIcon} alt='' />
                    Адресс
                </address>
                <h2 className='text-[30px] font-[Inter]'>Website</h2>
                <div className='hidden md:flex items-center gap-[30px]'>
                    <div className='flex items-center gap-[20px]'>
                        <img className='w-[20px]' src={phoneIcon} alt='' />
                        <a href='/' className='text-[15px]'>
                            +996 708 691 661
                        </a>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <img className='w-[20px]' src={emailIcon} alt='' />
                        <p className='text-[15px]'>kamaldinov321@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='md:pt-[80px] md:pb-[80px] pt-[30px] pb-[30px] md:pl-0 pl-[15px] md:flex md:justify-around md:items-baseline md:gap-[0] md:flex-row flex flex-col gap-[50px]'>
                <div className='md:hidden flex flex-col gap-[10px] font-[600]'>
                    <div className='flex items-center gap-[20px]'>
                        <img className='w-[25px]' src={phoneIcon} alt='' />
                        <a href='/' className='text-[15px]'>
                            +996 708 691 661
                        </a>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <img className='w-[25px]' src={emailIcon} alt='' />
                        <p className='text-[15px]'>kamaldinov321@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-[16px] mb-[15px] font-[600] tracking-[2px]'>
                        ИНФОРМАЦИЯ О ЮР.ЛИЦЕ
                    </h2>
                    <div className='flex flex-col gap-[15px] text-[14px]'>
                        <p>ОГРН 11111111111111111</p>
                        <p>ИНН 2222222222222</p>
                        <p>КПП 3333333333333</p>
                        <p>ОКПО 44444444444 ОКВЭД 52.24</p>
                        <p>ОКТМО 5555555555555</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-[16px] mb-[15px] font-[600] tracking-[2px]'>
                        О КОМПАНИИ
                    </h2>
                    <div className='flex flex-col gap-[15px] text-[14px]'>
                        <a href='/'>Дипломы и награды</a>
                        <a href='/'>Tранспортная безопасность</a>
                        <a href='/'>Правовая информация</a>
                    </div>
                </div>
                <div>
                    <a
                        href='/'
                        className='text-[16px] mb-[15px] font-[600] tracking-[2px]'
                    >
                        АДМИН-ПАНЕЛЬ
                    </a>
                </div>
            </div>
            <p className='text-[#d7d7d7ab] text-[14px] md:text-[16px] text-center font-[600] tracking-[1.5px] pt-[20px]'>
                ВСЕ ПРАВА ЗАЩИЩЕНЫ
            </p>
        </footer>
    )
}

export default Footer