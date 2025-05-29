import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>

   
  </Routes>
  </BrowserRouter>
 </StrictMode>
);
