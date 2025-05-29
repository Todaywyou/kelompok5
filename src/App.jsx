import React from "react";
import { Routes, Route } from "react-router-dom";
import Kami from "./components/Kami";
import TentangKami from "./pages/TentangKami";
import HomePage from "./pages/HomePage";
import Profil from "./components/profil";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/TentangKami" element={<TentangKami />} />
    </Routes>
  );
}
