import { useState } from "react";
import { LogIn, RegisterForm, FormResetPassword } from "./pages/index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LogIn />} />
            <Route path="sign-up" element={<RegisterForm />} />
            <Route path="reset-password" element={<FormResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
