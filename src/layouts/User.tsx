import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navigation from '../Components/UI/Navigation'
import ScrollUp from '../Components/UI/ScrollUp'

const UserLayout = () => {
    const { pathname } = useLocation()

    return (
        <div>
            <Header />
            {pathname !== '/' && <Navigation pathname={pathname} />}
            <Outlet />
            <Footer />
            <ScrollUp />
        </div>
    )
}

export default UserLayout