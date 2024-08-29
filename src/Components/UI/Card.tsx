import {FC} from "react";
import {NavLink} from 'react-router-dom';
import Button, {ButtonVariant} from './Button'
import {INewsFiles} from "../../Types/types";

export enum CardVariant {
    main = "main",
    mainSecond = "main-second",
    mainThird = "main-third",
    administration = "administration",
    administrationReverse = "administration-reverse",
    news = "news",
    employees = "employees",

}

interface CardProps {
    variant: CardVariant
    id: number
    img: string
    title: string
    description?: string
    date?: string
    importance?: string
    pdf?: string
    video?: string
    position?: string
    files?: INewsFiles
}


const Card: FC<CardProps> = ({
 variant,
 id,
 img,
 title,
 description,
 date,
 importance,
 position, files
 }) => {
    return (
        (variant === CardVariant.main && (
            <div className='flex items-end text-white'>
                <img
                    className='w-[310px] h-[250px] rounded-[20px]'
                    src={img}
                    alt='error'
                />
                <p className='absolute text-[19px] font-[600] pb-[30px] pl-[35px]'>
                    {title}
                </p>
            </div>
        )) ||
        (variant === CardVariant.mainSecond && (
            <div className='flex items-end text-[#333333]'>
                <img
                    className='w-[415px] h-[220px] rounded-[20px]'
                    src={img}
                    alt='error'
                />
                <p className='absolute text-[19px] font-[600] pb-[30px] pl-[35px]'>
                    {title}
                </p>
            </div>
        )) ||
        (variant === CardVariant.mainThird && (
            <div className='flex flex-col gap-[15px] text-[#333333] max-w-[405px] md:max-w-[305px]'>
                <img
                    className='w-[400px] md:w-[300px] h-[215px] rounded-[20px]'
                    src={img}
                    alt='none'
                />
                <div className='flex flex-col gap-[15px] pl-[15px] md:p-0'>
                    <p className='text-[13px] font-[600]'>{date}</p>
                    <h2 className='text-[19px] font-[600]'>{title}</h2>
                    <p className='text-[14px]'>{description}</p>
                </div>
            </div>
        )) ||
        (variant === CardVariant.administration && (
            <div className='flex items-start gap-[84px]'>
                <div
                    className='flex flex-col gap-[25px] max-w-[470px]'
                    style={{fontFamily: 'ABeeZee'}}
                >
                    <h2 className='text-[24px] font-[400]'>{title}</h2>
                    <p className='text-[16px] font-[400px]'>{description}</p>
                </div>
                <img
                    className='w-[525px] md:h-[350px] h-[250px] rounded-[10px]'
                    src={img}
                    alt='none'
                />
            </div>
        )) ||
        (variant === CardVariant.administrationReverse && (
            <div className='md:flex md:flex-row md:items-start md:gap-[84px] flex flex-col items-center gap-[10px]'>
                <img
                    className='w-[400px] md:h-[350px] md:w-[525px] h-[250px] rounded-[10px]'
                    src={img}
                    alt='none'
                />
                <div
                    className='flex flex-col md:gap-[25px] gap-[10px] md:max-w-[470px] max-w-[400px]'
                    style={{fontFamily: 'ABeeZee'}}
                >
                    <h2 className='text-[24px] font-[400]'>{title}</h2>
                    <p className='text-[16px] font-[400px]'>{description}</p>
                </div>
            </div>
        )) ||
        (variant === CardVariant.news && (
            <div
                key={id}
                className='border-[2px] border-[#3D348B] rounded-[20px] md:w-fit md:p-[40px] md:flex md:flex-row md:items-start md:gap-[50px] flex flex-col items-center pt-[20px] pl-[12px] pr-[12px] pb-[25px] gap-[10px]'
            >
                <img
                    className='w-[375px] h-[250px] md:w-[430px] md:h-[330px] rounded-[10px]'
                    src={img}
                    alt='none'
                />
                <div className='flex flex-col gap-[30px]'>
                    <div className='flex items-center gap-[15px]'>
                        <p
                            className='text-white bg-[#3D348B] w-fit p-[5px] rounded text-[14px] font-[400] italic'
                            style={{fontFamily: 'ABeeZee'}}
                        >
                            {date}
                        </p>
                        {importance !== 'none' && (
                            <p
                                className={`rounded-[5px] text-white pr-[14px] pl-[14px] font-[500] font-[Inter] ${
                                    (importance === 'important' && 'bg-[#FF0000]') ||
                                    (importance === 'foremployees' && 'bg-[#0029FF]')
                                }`}
                            >
                                {importance === 'important' && 'важное'}
                                {importance === 'foremployees' && 'для сотрудников'}
                            </p>
                        )}
                    </div>
                    <div className='max-w-[565px] flex flex-col md:gap-[20px]'>
                        <h2
                            className='text-[24px] font-[700]'
                            style={{fontFamily: 'El Messiri'}}
                        >
                            {title}
                        </h2>
                        <p className='max-h-[150px] overflow-y-scroll font-[400]'>
                            {description}
                        </p>
                    </div>
                    <div className='flex items-center gap-[10px] uppercase'>
                        <NavLink to={`${id}/${title}`}>
                            <Button variant={ButtonVariant.news}>Читать статью</Button>
                        </NavLink>
                        {files?.pdf && (
                            <div className='text-white p-[8px] pt-[2px] pb-[2px] bg-[#5DB7DE] rounded-[10px]'>
                                PDF
                            </div>
                        )}
                        {files?.video && (
                            <div className='text-white p-[8px] pt-[2px] pb-[2px] bg-[#5DB7DE] rounded-[10px]'>
                                VIDEO
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )) ||
        (variant === CardVariant.employees && (
                <div className='flex flex-col gap-[20px]'>
                    <NavLink to={`${id}/${title}`}>
                        <img
                            className='w-[280px] h-[360px] border-[0.5px] border-black rounded-[8px]'
                            src={img}
                            alt='none'
                        />
                    </NavLink>
                    <div className='text-[22px] font-[400] leading-tight'>
                        <h2>{title}</h2>
                        <p className='text-[20px] text-[#3D348B]'>{position}</p>
                    </div>
                </div>
            )
        ) || <div/>
    )
};


export default Card
