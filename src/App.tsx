import { useState } from "react";
import { RegisterForm, EmailRePassword } from "./pages/index";
import "./App.css";
import MainImage from "./components/MainImage/MainImage";

function App() {
  return (
    <div>
      <MainImage></MainImage>
      <EmailRePassword></EmailRePassword>
    </div>
  );
}
export default App;
