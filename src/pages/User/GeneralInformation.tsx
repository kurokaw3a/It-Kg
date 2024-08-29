import Accordion from '../../Components/UI/Accordion'
import {useAppSelector} from "../../hooks/redux";

const UserGeneralInformation = () => {
    const { documents } = useAppSelector(state => state.user)
    return (
        <div className='flex flex-col items-center text-[#333333] md:pt-[150px] md:pb-[200px] pt-[40px] pb-[100px] gap-[130px]'>
            <div className='md:flex md:flex-row md:items-start md:gap-[90px] flex flex-col items-center gap-[75px]'>
                <h1 className=' text-[30px] md:text-[40px] font-[700]'>
                    Нормативные документы
                </h1>
                <div className='md:p-0 pl-[15px] pr-[15px]'>
                    <Accordion items={documents} />
                </div>
            </div>
        </div>
    )
}

export default UserGeneralInformation