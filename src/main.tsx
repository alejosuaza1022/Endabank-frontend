import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import "flowbite";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthProvider";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);



