import { useState } from "react";
import {LogIn, RegisterForm} from "./pages/index";
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
          <Routes>
              <Route path="/signup" element={<RegisterForm/>}/>
              <Route path="/login" element={<LogIn/>}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
