import React from 'react'
import NavBar from '../components/NavBar'
import Kami from '../components/Kami'
import Visi from '../components/Visi'
import Sejarah from '../components/Sejarah'
import SejarahInfografis from '../components/Sejarah'
import Footer from '../components/Footer'

function TentangKami() {
  return (
    <div>
      <NavBar/>
      <Kami/>
      <Visi/>
      <SejarahInfografis/>
      <Footer/>
    </div>
  )
}

export default TentangKami