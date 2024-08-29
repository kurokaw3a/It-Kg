import {FC, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Dropdown from "./UI/Dropdown";
import Select, {SelectVariant} from "./UI/Select";
import Input, {InputVariant} from "./UI/Input";
import headerMenu from '../assets/headermenu.png'


const Header: FC = () => {
    useEffect(() => {
        let lastScroll: number = 0
        const header = document.getElementById('header') as HTMLElement

        const scrollPosition = () =>
            window.pageYOffset || document.documentElement.scrollTop;
        const containHide = () => header?.classList.contains('_header-show')

        window.addEventListener('scroll', () => {
            if (scrollPosition() > lastScroll && !containHide()) {
                header?.classList.add('_header-show')
            } else if (scrollPosition() < lastScroll && containHide()) {
                header?.classList.remove('_header-show')
            }
            lastScroll = scrollPosition()
        })
    }, [])
    const [langs] = useState<string[]>(['Кыргызский', 'Английский', 'Русский'])
    const [lang, setLang] = useState<string>('Русский')
    const changeLang = (value: string) => {
        setLang(value);
    }

    const [menuShow, setShowMenu] = useState<boolean>(false)
    const showMenu = () => {
        setShowMenu((prev) => !prev)
    }

    return (
        <>
            <header
                id='header'
                className='hidden sticky top-0 z-[1] transition transform duration-[0.5s] w-[100%] bg-[#FFFFFF] pt-[15px] pb-[15px] font-[PT Sans] md:flex items-center justify-center gap-[100px]'
            >
                <NavLink to='/'>
                    <h1 className='font-[Inter] font-[700] text-[30px]'>IT KG</h1>
                </NavLink>
                <nav className='md:flex gap-[30px] text-[#333333] text-[15px] select-none'>
                    <Dropdown
                        link='faq'
                        items={[
                            {
                                title: 'FAQ',
                                link: 'faq',
                            },
                            {
                                title: 'Обращение',
                                link: 'faq',
                            },
                        ]}
                        title='Компания'
                    />
                    <NavLink to='/administration'>Администрация</NavLink>
                    <Dropdown
                        link='news'
                        items={[
                            {
                                title: 'Все новости',
                                link: 'news',
                            },
                        ]}
                        title='Новости'
                    />
                    <Dropdown
                        link='employees'
                        items={[
                            {
                                title: 'Сотрудники',
                                link: 'employees',
                            },
                        ]}
                        title='Сотрудникам'
                    />
                    <Dropdown
                        link='regulatorydocuments'
                        items={[
                            {
                                title: 'Нормативные документы',
                                link: 'regulatorydocuments',
                            },
                        ]}
                        title='Общая информация'
                    />
                </nav>
                <div className='flex items-baseline md:gap-[100px] text-[#333333]'>
                    <Input variant={InputVariant.search} type='search'/>
                    <div className='text-[16px] font-[700] text-[#333333] select-none'>
                        <Select
                            variant={SelectVariant.lang}
                            initialValue={lang}
                            setLang={changeLang}
                            items={langs}
                        />
                    </div>
                </div>
            </header>
            <header className='md:hidden w-[100%] bg-[#FFFFFF] p-[15px] flex items-center justify-between'>
                <h1 className='font-[Inter] font-[700] text-[30px]'>IT KG</h1>
                <img
                    onClick={showMenu}
                    className={`w-[35px] transition-all duration-300 ${
                        menuShow && 'rotate-[-90deg]'
                    }`}
                    src={headerMenu}
                    alt='none'
                />
            </header>
            <div
                className={`md:hidden text-[25px] font-[500] grid overflow-hidden transition-all duration-300 ease-in-out ${
                    menuShow
                        ? 'grid-rows-[1fr] opacity-100 pl-[15px] pt-[20px] pb-[20px]'
                        : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div
                    className='overflow-hidden flex flex-col gap-[15px]'
                    onClickCapture={showMenu}
                >
                    <NavLink
                        to='/'
                        className='w-[280px] p-[8px] rounded-xl duration-[0.5s] hover:bg-[#0400ff41]'
                    >
                        Главная Страница
                    </NavLink>
                    <NavLink
                        to='/faq'
                        className='w-[280px] p-[8px] rounded-xl duration-[0.5s] hover:bg-[#0400ff41]'
                    >
                        FAQ
                    </NavLink>
                    <NavLink
                        to='/administration'
                        className='w-[280px] p-[8px] rounded-xl duration-[0.5s] hover:bg-[#0400ff41]'
                    >
                        Администрация
                    </NavLink>
                    <NavLink
                        to='/news'
                        className='w-[280px] p-[8px] rounded-xl duration-[0.5s] hover:bg-[#0400ff41]'
                    >
                        Новости
                    </NavLink>
                    <NavLink
                        to='/employees'
                        className='w-[280px] p-[8px] rounded-xl duration-[0.5s] hover:bg-[#0400ff41]'
                    >
                        Сотрудники
                    </NavLink>
                    <NavLink
                        to='/regulatorydocuments'
                        className='w-[300px] p-[8px] rounded-xl duration-[0.5s] hover:bg-[#0400ff41]'
                    >
                        Нормативные документы
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;
