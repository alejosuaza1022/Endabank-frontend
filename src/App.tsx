import { useState } from "react";
import { LogIn, RegisterForm } from "./pages/index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sign" element={<HomeLayout />}>
            <Route index element={<LogIn />} />
            <Route path="up" element={<RegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
