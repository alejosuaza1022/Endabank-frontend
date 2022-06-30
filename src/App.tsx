import {
    AccountSummary,
    FormResetPassword,
    Home,
    LogIn,
    LogInFromMerchant,
    MerchantApprovalLog,
    MerchantInfo,
    MerchantTransaction,
    RegisterForm,
    Transaction,
    Unauthorized,
    UserEmailVerification,
    UserProfile,
    UsersManagement
} from "./pages/index";

import "./App.css";
import {Route, Routes} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import MerchantLayout from "./layouts/MerchantLayout";
import {RequireAuth} from "./components/index";
import MerchantSite from "./pages/Merchant/MerchantSite/MerchantSite";
import ShoppingCart from "./pages/Merchant/ShoppingCart/ShoppingCart";



function App() {
    return (

        <Routes>
            <Route path="merchant-site" element={<MerchantLayout/>}>
                <Route index element={<MerchantSite/>}/>
                <Route path="checkout"
                       element={<ShoppingCart/>}/>
            </Route>

            <Route path="/" element={<HomeLayout/>}>

                {/*public routes*/}
                <Route path="log-in" element={<LogIn/>}/>
                <Route path="merchant/log-in" element={<LogInFromMerchant/>}/>
                <Route path="sign-up" element={<RegisterForm/>}/>
                <Route path="unauthorized" element={<Unauthorized/>}/>
                <Route path="reset-password" element={<FormResetPassword/>}/>
                <Route path="merchant-transaction" element={<MerchantTransaction/>}/>

                <Route path="verify-email" element={<UserEmailVerification email={""}/>}/>
                {/*private routes*/}
                <Route element={<RequireAuth allowedRoles={['ROLE_USER', 'ROLE_ADMIN']}/>}>
                    <Route path="/" element={<Home/>}>
                        <Route path="profile" element={<UserProfile/>}/>
                        <Route path="account-summary" element={<AccountSummary/>}/>
                        <Route path="transaction" element={<Transaction/>}/>
                        <Route element={<RequireAuth allowedRoles={['ACCOUNT:VALIDATE']}/>}>
                            <Route path="users-management" element={<UsersManagement />}/>
                        </Route>
                        <Route path="home/reset-password" element={<FormResetPassword/>}/>
                        <Route path="became-merchant" element={<MerchantInfo/>}/>
                        <Route path="merchant-log" element={<MerchantApprovalLog/>}/>
                    </Route>
                </Route>

            </Route>
        </Routes>
    );
}

export default App;
