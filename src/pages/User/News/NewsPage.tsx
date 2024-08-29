import Slider from 'react-slick'
import {useAppSelector} from "../../../hooks/redux";

const UserNewsPage = () => {
    const { newsPage } = useAppSelector(state => state.user)
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className='md:pt-[40px] md:pb-[190px] md:pl-0 md:pr-0 pt-[40px] pb-[100px] pl-[15px] pr-[15px] md:flex md:flex-wrap md:items-start md:flex-row md:justify-center md:gap-[35px] flex flex-col items-center gap-[20px]'>
            <div className='hidden md:flex md:flex-wrap gap-[10px] max-w-[810px]'>
                {newsPage?.images.map((el) => (
                    <img
                        key={el}
                        className='md:w-[400px] md:h-[220px] rounded-[44px]'
                        src={el}
                        alt='none'
                    />
                ))}
            </div>
            <div className='md:hidden block'>
                <Slider
                    {...settings}
                    className='max-[550px]:max-w-[400px] max-[391px]:max-w-[360px]'
                >
                    {newsPage?.images.map((el, i) => (
                        <div key={el}>
                            <div className='flex justify-end'>
                                <p className='absolute text-white font-[700] pr-[10px] pt-[10px]'>
                                    {i + 1} / {newsPage.images.length}
                                </p>
                            </div>
                            <img
                                className='max-[550px]:w-[400px] h-[250px] max-[391px]:w-[360px]'
                                src={el}
                                alt='none'
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='flex flex-col gap-[30px]'>
                <div className='flex items-center md:gap-[12px] md:justify-start justify-between'>
                    {newsPage?.files.map((el) => (
                        <div className='bg-[#3D348B] md:text-[16px] text-[14px] text-white font-[700] pr-[20px] pl-[20px] pt-[8px] pb-[8px] rounded-[15px] cursor-pointer'>
                            <p>{el}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col md:gap-[30px] gap-[20px]'>
                    <div
                        className='text-[#00000061] text-[16px] md:text-[20px] font-[400] flex flex-col gap-[5px]'
                        style={{ fontFamily: 'ABeeZee' }}
                    >
                        <p>Дата: {newsPage?.date}</p>
                        <span>
              Категория:{' '}
                            <span
                                className={newsPage?.category === 'important' ? 'text-[red]' : ''}
                            >
                {newsPage?.category === 'important' ? 'важное' : ''}
              </span>
            </span>
                    </div>
                    <div className='max-w-[600px] flex flex-col gap-[20px] md:gap-[50px]'>
                        <h2 className='text-[20px] md:text-[28px] font-[400]'>
                            {newsPage?.title}
                        </h2>
                        <p className='text-[#00000061] text-[15px] md:text-[18px]'>
                            {newsPage?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNewsPage