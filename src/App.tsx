import { useState } from "react";
import {
  ActivateAccountForm,
  LogIn,
  RegisterForm,
  FormResetPassword,
  Home,
} from "./pages/index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import { AuthProvider } from "./contexts/AuthProvider";
import UserEmailVerification from "./pages/UserEmailVerification/UserEmailVerification";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />
              <Route path="log-in" element={<LogIn />} />
              <Route path="sign-up" element={<RegisterForm />} />
              <Route path="reset-password" element={<FormResetPassword />} />
              <Route
                path="activate-account"
                element={<ActivateAccountForm />}
              />
              <Route path="verify-email" element={<UserEmailVerification email={""} />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
