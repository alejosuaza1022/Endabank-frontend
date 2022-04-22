import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "flowbite";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
