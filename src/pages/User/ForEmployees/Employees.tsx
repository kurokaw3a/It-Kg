import Card, {CardVariant} from '../../../Components/UI/Card'
import Sort from '../../../Components/UI/Sort'
import {useAppSelector} from "../../../hooks/redux";
import {IEmployees} from "../../../models/User/IEmployees";

const UserEmployees = () => {
    const { employees } = useAppSelector(state => state.user)
    return (
        <div className='pt-[20px] pb-[70px] flex flex-col gap-[60px] md:gap-[105px] md:pl-[125px] md:pr-[125px]'>
            <div className='flex justify-center md:justify-start items-center md:flex-row flex-wrap gap-[15px] md:gap-[160px] tracking-normal font-[700]'>
                <Sort title='сортировать по алфавиту' />
                <Sort title='сортировать по дате добавления' />
            </div>
            <div className='flex justify-center flex-wrap gap-[40px] md:gap-[40px]'>
                {employees.map((el:IEmployees) => (
                    <Card
                        variant={CardVariant.employees}
                        key={el.id}
                        id={el.id}
                        title={el.name}
                        img={el.image}
                        position={el.position}
                    />
                ))}
            </div>
            <div className='flex items-center justify-center gap-[15px] cursor-pointer'>
                <hr className='w-[120px] md:w-[600px] border-[1px] border-[#3d348b92]' />
                <p className='text-[#3d348b92] text-[25px]'>ещё</p>
                <hr className='w-[120px] md:w-[600px] border-[1px] border-[#3d348b92]' />
            </div>
        </div>
    )
}

export default UserEmployees