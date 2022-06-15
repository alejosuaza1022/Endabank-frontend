import {
    ActivateAccountForm,
    FormResetPassword,
    Home,
    LogIn,
    RegisterForm,
    Unauthorized,
    UserEmailVerification,
    UserProfile
} from "./pages/index";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import {RequireAuth} from "./components/index";
import MerchantSite from "./pages/MerchantSite/MerchantSite";



function App() {
    return (

        <Routes>
            <Route path="merchant-site" element={<MerchantSite/>}/>
            <Route path="/" element={<HomeLayout/>}>

                {/*public routes*/}
                <Route path="log-in" element={<LogIn/>}/>
                <Route path="sign-up" element={<RegisterForm/>}/>
                <Route path="unauthorized" element={<Unauthorized/>}/>
                <Route path="reset-password" element={<FormResetPassword/>}/>
                <Route path="verify-email" element={<UserEmailVerification email={""}/>}/>

                {/*private routes*/}
                <Route element={<RequireAuth allowedRoles={['ROLE_USER', 'ROLE_ADMIN']}/>}>
                    <Route path="/" element={<Home/>}>
                        <Route path="profile" element={<UserProfile/>}/>
                        <Route element={<RequireAuth allowedRoles={['ACCOUNT:VALIDATE']}/>}>
                            <Route path="activate-account" element={<ActivateAccountForm/>}/>
                        </Route>
                        <Route path="home/reset-password" element={<FormResetPassword/>}/>
                    </Route>
                </Route>

            </Route>
        </Routes>
    );
}

export default App;
