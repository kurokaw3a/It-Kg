import {FC, useEffect, useState} from 'react'
import arrow from '../../assets/upicon.png'

const ScrollUp: FC = () => {
    const [showTopBtn, setShowTopBtn] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1200) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        showTopBtn ? (
            <img
                className='w-[40px] fixed bottom-0 right-0 mr-[20px] mb-[20px] select-none'
                onClick={goToTop}
                src={arrow}
                alt='none'
            />
        ) : <div/>
    )
}

export default  ScrollUp