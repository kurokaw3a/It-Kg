import { NavLink, useParams } from 'react-router-dom'
import navIcon from '../../assets/navarrow.png'
import {FC} from "react";

interface NavigationProps {
    pathname: string
}

const Navigation: FC<NavigationProps> = ({ pathname}) => {
    const params = useParams()

    const path: any[] =
        (pathname === '/faq' &&  ['КОМПАНИЯ', 'FAQ']) ||
        (pathname === '/administration' && ['АДМИНИСТРАЦИЯ']) ||
        (pathname === '/news' && ['НОВОСТИ']) ||
        (pathname?.includes(`/news/${params.id}`) && ['НОВОСТИ', params.title]) ||
        (pathname === '/employees' && ['СОТРУДНИКАМ', 'СОТРУДНИКИ']) ||
        (pathname?.includes(`/employees/${params.id}`) && ['СОТРУДНИКАМ','СОТРУДНИКИ', params.name]) ||
        (pathname === '/regulatorydocuments' && ['общая информация', 'Нормативные документы']) || []

    const links:string = pathname?.includes(`/news/${params.id}`) ? 'news' : ''
    const links2:string = pathname?.includes(`/employees/${params.id}`) ? 'employees' : ''

    return (
        <nav className='w-[100%] pt-[20px] pb-[20px] bg-[#3d348b14] text-[#333333] md:text-[16px] text-[15px] font-[700] flex items-center select-none md:pl-[125px] pl-[20px] uppercase'>
            <div className='flex items-center gap-[15px]'>
                <NavLink to={links}>{path[0]}</NavLink>
                {path?.length > 1 && (
                    <img className='w-[3px]' src={navIcon} alt='error' />
                )}
                {path?.length > 1 && <NavLink to={links2}>{path[1]}</NavLink>}
                {path?.length > 2 && (
                    <img className='w-[3px]' src={navIcon} alt='error' />
                )}
                {path?.length > 2 && <p>{path[2]}</p>}
            </div>
        </nav>
    )
}

export default Navigation