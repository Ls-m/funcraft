import {BrowserRouter, Route, Routes} from "react-router-dom";
import GamesPage from "../pages/Games/gamesPage";
import RequestsPage from '../pages/requests/requestsPage';
// import FinancePage from "../pages/finance/FinancePage";
import FinancePage from '../pages/finance/FinancePage';
import EditPage from '../pages/editGame/EditPage';
// import EditPage from '../pages/editGame/EditPage2';

import LoginPage from '../pages/login/LoginPage';
import ProfilePage from "../pages/ProfilePage";
import TestPage from "../TestPage";
import RegisterPage from "../pages/register/RegisterPage";
import ActivationPage from "../pages/activation";
import UploadPage from '../pages/upload/UploadPage'
import AvatarPage from '../pages/avatar/AvatarPage'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/games" element={<GamesPage/>} />   
                <Route path="/requests" element={<RequestsPage/>} />    
                <Route path="/finance" element={<FinancePage/>} /> 
                <Route path="/edit/:id" element={<EditPage/>} />
                <Route path="/" element={<LoginPage/>} /> 
                <Route path="/test" element={<TestPage/>} /> 
                <Route path="/profile" element={<ProfilePage/>} /> 
                <Route path="/register" element={<RegisterPage/>} /> 
                <Route path="/activation" element={<ActivationPage/>} />
                <Route path="/avatars" element={<AvatarPage/>} />
                <Route path="/upload" element={<UploadPage/>} />
                



                


            </Routes>
        </BrowserRouter>
    );
}