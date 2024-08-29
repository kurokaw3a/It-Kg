import {Route, Routes} from "react-router-dom";
import UserLayout from "../layouts/User";
import UserFaq from "../pages/User/Faq";
import UserMain from "../pages/User/Main";
import UserNewsPage from "../pages/User/News/NewsPage";
import UserAdministration from "../pages/User/Administration";
import UserNews from "../pages/User/News/News";
import UserEmployeePage from "../pages/User/ForEmployees/Employee";
import UserGeneralInformation from "../pages/User/GeneralInformation";
import UserEmployees from "../pages/User/ForEmployees/Employees";

const UserRoutes = () => {
    return <Routes>
        <Route path="" element={<UserLayout/>}>
            <Route path='/' element={<UserMain/>}/>
            <Route path='/faq' element={<UserFaq />}/>
            <Route path='/administration' element={<UserAdministration/>}/>
            <Route path='/news' element={<UserNews/>}/>
            <Route path='/news/:id/:title' element={<UserNewsPage/>}/>
            <Route path='/employees' element={<UserEmployees/>}/>
            <Route path='/employees/:id/:name' element={<UserEmployeePage/>}/>
            <Route path='/regulatorydocuments' element={<UserGeneralInformation/>} />
        </Route>
    </Routes>;
}

export default UserRoutes