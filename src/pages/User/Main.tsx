import {useRef, useState} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import newsIcon from '../../assets/newsarrow.png'
import pdfIcon from '../../assets/pdf.png'
import playIcon from '../../assets/videoplay.png'
import video from '../../assets/wano.mp4'
import Button, {ButtonVariant} from '../../Components/UI/Button'
import Card, {CardVariant} from '../../Components/UI/Card'
import {useAppSelector} from "../../hooks/redux";

const UserMain = () => {
    const {main} = useAppSelector(state => state.user)
    const ref = useRef<HTMLVideoElement>(null)
    const [isPlaying, setPlay] = useState<boolean>(false)
    const playVideo = () => {
        setPlay((prev) => !prev)
        if (isPlaying) {
            ref.current?.pause()
        } else {
            ref.current?.play()
        }
    }

    return (
        <main>
            <section className='bg-[#3D348B] pt-[110px] pb-[100px] md:pt-[113px] md:pb-[133px] text-white md:flex md:items-center md:justify-between pl-[15px] pr-[15px] md:pl-[150px] md:pr-[150px] leading-tight'>
                <div className='flex flex-col gap-[40px] max-w-[450px]'>
                    <h1 className='text-[35px] md:text-[40px] font-[600]'>
                        Нефтяная компания Neftchi{' '}
                    </h1>
                    <p className='max-w-[320px]'>
                        Нефтяная компания Neftchi - символ мощи и надежности в мире
                        энергетики, обеспечивающая стабильное производство и поставку
                        качественной нефти по всему миру, основанный на инновациях,
                        технологиях и экологической ответственности.
                    </p>
                    <div className='mt-[250px] md:mt-0'>
                        <Button variant={ButtonVariant.main}>О КОМПАНИИ</Button>
                    </div>
                </div>
                <div className='hidden md:flex flex-wrap max-w-[650px] gap-[20px]'>
                    {main?.top.map((el) => (
                        <Card variant={CardVariant.main} key={el.id} id={el.id} img={el.image} title={el.title} />
                    ))}
                </div>
            </section>
            <section className='pt-[110px] pb-[100px] pl-[15px] pr-[15px] flex flex-col gap-[80px] md:pt-[113px] md:pb-[133px] text-[#333333] md:flex md:flex-row md:items-start md:justify-between md:pl-[150px] md:pr-[150px] leading-tight'>
                <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                    <div className='flex flex-col gap-[40px]'>
                        <h1 className='text-[40px] font-[600]'>Партнёры</h1>
                        <a href='/' className='max-w-[250px] flex items-center gap-[5px]'>
                            <p className='text-[#3D348B] underline decoration-dotted'>
                                Условия для договора с нашей компанией
                            </p>
                            <img className='w-[40px]' src={pdfIcon} alt='none' />
                        </a>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' animateOnce>
                    <div className='flex flex-col items-center gap-[10px] md:flex md:flex-row md:flex-wrap md:max-w-[850px] md:gap-[20px]'>
                        {main?.half.map((el) => (
                            <Card variant={CardVariant.mainSecond} key={el.id} id={el.id} img={el.image} title={el.title} />
                        ))}
                    </div>
                </ScrollAnimation>
            </section>
            <section className='bg-[#cccccc54] pt-[75px] pb-[75px] pl-[15px] pr-[15px] flex flex-col items-center gap-[50px] md:pt-[113px] md:pb-[133px] text-[#333333] md:flex md:flex-row md:items-center md:justify-between md:pl-[150px] md:pr-[150px] leading-tight'>
                <div className='flex flex-col md:gap-[60px] gap-[35px] max-w-[600px]'>
                    <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                        <h1 className='text-[40px] font-[600]'>О компании</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                        <div className='flex flex-col gap-[15px] text-[16px]'>
                            Компания Neftchi – это ведущий участник нефтяного рынка,
                            специализирующийся на разработке, добыче, переработке и
                            распределении нефтепродуктов. Наша компания, базирующаяся в городе
                            Кочкор-Ате, является ключевым игроком на рынке Центральной Азии и
                            имеет долгосрочный опыт успешного ведения бизнеса в нефтяной
                            отрасли.
                            <p>Наши услуги и продукты:</p>
                            <div className='flex flex-col gap-[10px]'>
                                <p> • Разработку и эксплуатацию месторождений нефти и газа..</p>
                                <p> • Добычу и переработку сырой нефти.</p>
                                <p>
                                    • Производство и реализацию высококачественных нефтепродуктов,
                                    таких как бензин, дизельное топливо, мазут и другие.
                                </p>
                            </div>
                            <p>Наши преимущества:</p>
                            <div className='flex flex-col gap-[10px]'>
                                <p>
                                    • Технологическое превосходство: Мы постоянно инвестируем в
                                    разработку новых технологий и методов добычи нефти, чтобы
                                    повысить эффективность наших операций и уменьшить воздействие
                                    на окружающую среду.
                                </p>
                                <p>
                                    • Квалифицированный персонал: Наша команда состоит из опытных
                                    и высококвалифицированных специалистов, готовых решать самые
                                    сложные задачи в области нефтяной промышленности.
                                </p>
                                <p>
                                    • Стратегическое расположение: Наши месторождения расположены
                                    в стратегически важных регионах, что обеспечивает нам доступ к
                                    ключевым рынкам и транспортным маршрутам.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn='fadeInUp' animateOnce>
                    <div
                        className='flex items-center justify-center cursor-pointer'
                        onClickCapture={playVideo}
                    >
                        <video
                            ref={ref}
                            src={video}
                            className='w-[520px] rounded-[20px]'
                            loop
                        />
                        {!isPlaying && (
                            <img className='absolute w-[50px]' src={playIcon} alt='none' />
                        )}
                    </div>
                </ScrollAnimation>
            </section>
            <section className='bg-[#FFFFFF] pt-[150px] pb-[100px] pl-[15px] pr-[15px] gap-[40px] md:pt-[113px] md:pb-[133px] text-[#333333] flex flex-col items-center md:gap-[60px] md:pl-[150px] md:pr-[150px] leading-tight'>
                <div className='w-[100%] flex items-baseline justify-between'>
                    <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                        <h1 className='text-[35px] md:text-[40px] font-[600]'>Новости</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInRight' animateOnce>
                        <a
                            href='/'
                            className='text-[#3D348B] font-[600] text-[16px] flex items-center gap-[15px]'
                        >
                            <p>ВСЕ НОВОСТИ</p>
                            <img className='w-[25px]' src={newsIcon} alt='none' />
                        </a>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn='fadeInUp' animateOnce>
                    <div className='flex flex-col items-center gap-[40px] md:flex md:flex-row md:items-center md:gap-[24px]'>
                        {main?.bottom.map((el) => (
                            <Card
                                variant={CardVariant.mainThird}
                                key={el.id}
                                id={el.id}
                                img={el.image}
                                title={el.title}
                                description={el.description}
                                date={el.date}
                            />
                        ))}
                    </div>
                </ScrollAnimation>
            </section>
        </main>
    )
}

export default UserMain