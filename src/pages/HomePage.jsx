import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Card from '../components/card'
import Profil from '../components/profil'
import Sejarah from '../components/Sejarah'
import Kami from '../components/Kami'
import Mitra from '../components/Mitra'
import Footer from '../components/Footer'
import StatSection from '../components/Stat-Section'
import Riview from '../components/Riview'
import CustomerReviews from '../components/Riview'



export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Profil />
      <Card />
      <Mitra />
      <StatSection />
      <CustomerReviews />
      <Footer />
    </div>
  );
  
}
