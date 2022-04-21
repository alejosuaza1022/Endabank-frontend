
import {ActivateAccountForm, LogIn,
    RegisterForm, FormResetPassword,
    Home, UserProfile,
    LandingPage,Unauthorized} from "./pages/index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import {RequireAuth} from "./components/index";


function App() {
  return (

      <Routes>
        <Route path="/" element={<HomeLayout/>}>

            {/*public routes*/}
            <Route path="log-in" element={<LogIn />} />
            <Route path="sign-up" element={<RegisterForm />} />
            <Route path="unauthorized" element={<Unauthorized/>}/>
            <Route path="reset-password" element={<FormResetPassword />} />

            {/*private routes*/}
            <Route element={<RequireAuth allowedRoles={['ROLE_USER','ROLE_ADMIN']}/>}>
                <Route path="/" element={<Home />}>
                    <Route path="profile" element={<UserProfile/>}/>
                    <Route element={<RequireAuth allowedRoles={['ACCOUNT:VALIDATE']}/>}>
                        <Route path="activate-account" element={<ActivateAccountForm />} />
                    </Route>
                    <Route path="home/reset-password" element={<FormResetPassword />} />
                </Route>
            </Route>

        </Route>
      </Routes>
  );
}
export default App;
