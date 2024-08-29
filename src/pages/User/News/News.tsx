import {useState} from 'react'
import Card, {CardVariant} from '../../../Components/UI/Card'
import Sort from '../../../Components/UI/Sort'
import {useAppSelector} from "../../../hooks/redux";
import {INewsSort} from "../../../Types/types";
import {INews} from "../../../models/User/INews";

const UserNews = () => {
    const { news } = useAppSelector(state => state.user)

    const [sort, setSort] = useState<INewsSort>({
        byDate: false,
        byImportance: false,
        byCategory: false,
    })

    const sortbydate = () => {
        setSort({ ...sort, byDate: !sort.byDate })
    }
    const sortbyimportance = () => {
        setSort({ ...sort, byImportance: !sort.byImportance })
    }
    const sortbycategory = () => {
        setSort({ ...sort, byCategory: !sort.byCategory })
    }
    return (
        <div className='flex flex-col md:gap-[115px] gap-[80px] text-black text-[16px] font-[700] lowercase md:pt-[35px] md:pb-[55px] pt-[20px] pb-[40px]'>
            <div className='flex justify-center md:justify-start items-center md:flex-row flex-wrap gap-[15px] md:gap-[160px] md:pl-[125px] tracking-normal'>
                <Sort
                    onClick={sortbydate}
                    state={sort.byDate}
                    title='сортировать по дате'
                />
                <Sort
                    onClick={sortbyimportance}
                    state={sort.byImportance}
                    title='сортировать по важности'
                />
                <Sort
                    onClick={sortbycategory}
                    state={sort.byCategory}
                    title='найти по категориям'
                />
            </div>
            <div className='flex flex-col items-center gap-[45px] md:p-0 pl-[15px] pr-[15px]'>
                {news?.map((el:INews) => (
                    <Card
                        variant={CardVariant.news}
                        key={el.id}
                        id={el.id}
                        img={el.image}
                        title={el.title}
                        description={el.description}
                        date={el.date}
                        importance={el.importance}
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

export default UserNews