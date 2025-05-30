import React from "react";
import { Routes, Route } from "react-router-dom";
import Kami from "./components/Kami";
import TentangKami from "./pages/TentangKami";
import HomePage from "./pages/HomePage";
import Profil from "./components/profil";
import Katalog from "./pages/Katalog";
import Makan from "./pages/makan";
import Kontak from "./pages/kontak";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/TentangKami" element={<TentangKami />} />
      <Route path="/Katalog" element={<Katalog />} />
      <Route path="/makan" element={<Makan />} />
      <Route path="/kontak" element={<Kontak/>}/>
    </Routes>
  );
}
