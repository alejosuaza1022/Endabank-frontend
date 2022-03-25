import { useState } from "react";
import { RegisterForm, FormResetPassword } from "./pages/index";
import "./App.css";
import MainImage from "./components/MainImage/MainImage";

function App() {
  return (
    <div>
      <MainImage></MainImage>
      <RegisterForm></RegisterForm>
    </div>
  );
}
export default App;
