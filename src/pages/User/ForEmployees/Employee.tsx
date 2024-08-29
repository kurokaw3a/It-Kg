import {useAppSelector} from "../../../hooks/redux";

const UserEmployeePage = () => {
    const { employee } = useAppSelector(state => state.user)
    return (
        <div className='md:pt-[90px] pt-[60px] md:pb-[200px] pb-[60px] md:gap-[80px] gap-[20px] flex md:justify-center md:items-start md:flex-row flex-col items-center'>
            <img
                className='md:w-[440px] md:h-[550px] w-[360px] rounded-[8px] border-[0.5s] border-black'
                src={employee?.image}
                alt=''
            />
            <div className='max-w-[350px] md:max-w-[530px] flex flex-col gap-[30px]'>
                <div className='text-[28px] font-[500] leading-tight'>
                    <h2>{employee?.name}</h2>
                    <p className='text-[25px] text-[#3D348B]'>{employee?.position}</p>
                </div>
                <div className='flex flex-col gap-[100px]'>
                    <p className='text-[22px] text-[#00000093] max-h-[300px] overflow-y-scroll'>
                        {employee?.description}
                    </p>
                    <div className='w-fit text-white bg-[#3D348B] text-[20px] pr-[20px] pl-[20px] rounded'>
                        <p className='font-[ABeeZee] font-[400]'>{employee?.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserEmployeePage