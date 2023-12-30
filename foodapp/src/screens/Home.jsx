import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer';
import Crousel from '../components/Crousel';
import Card from '../components/card';


function Home() {
  return (
    <>
    <Navbar/>
    <Crousel/>
    <div className="container mt-4 mb-2">
    <Card/>
    </div>
   
   
    
<Footer/> 
    </>
  )
}

export default Home