import Card, {CardVariant} from '../../Components/UI/Card'
import {useAppSelector} from "../../hooks/redux";
import {IAdministration} from "../../models/User/IAdministration";

const UserAdministration = () => {
    const { administration } = useAppSelector(state => state.user)
    return (
        <div className='flex flex-col items-center md:gap-[166px] md:pt-[150px] md:pb-[200px] pt-[40px] pb-[100px] gap-[50px]'>
            <div className='flex items-center gap-[12px] select-none'>
                <div className='w-[28px] h-[14px] bg-[#3D348B] rounded-tr-[50px] rounded-bl-[50px]' />
                <h1
                    className='text-[32px] md:text-[42px] font-[700]'
                    style={{ fontFamily: 'El Messiri' }}
                >
                    Администрация
                </h1>
                <div className='w-[28px] h-[14px] bg-[#3D348B] rounded-tl-[50px] rounded-br-[50px]' />
            </div>
            <div className='hidden md:flex flex-col gap-[100px]'>
                {administration?.map((el:IAdministration, i:number) => {
                    if (i % 2 === 0) {
                        return (
                            <Card
                                variant={CardVariant.administration}
                                key={el.id}
                                id={el.id}
                                img={el.image}
                                title={el.name}
                                description={el.description}
                            />
                        )
                    }
                    return (
                        <Card
                            variant={CardVariant.administrationReverse}
                            key={el.id}
                            id={el.id}
                            img={el.image}
                            title={el.name}
                            description={el.description}
                        />
                    )
                })}
            </div>
            <div className='md:hidden flex flex-col gap-[70px] pl-[15px] pr-[15px]'>
                {administration?.map((el: IAdministration) => (
                    <Card
                        variant={CardVariant.administrationReverse}
                        key={el.id}
                        id={el.id}
                        img={el.image}
                        title={el.name}
                        description={el.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserAdministration