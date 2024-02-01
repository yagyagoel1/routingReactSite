import React from "react"
import Hero from './components/hero/Hero.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Data  from "./components/data/Data.jsx"
import Cloud from "./components/cloud/Cloud.jsx"
import Footer from "./components/footer/Footer.jsx"
function App() {
 
  return (
   <>
   <Navbar></Navbar>
   <Hero/> 
   <Data></Data>
   <Cloud></Cloud>
   <Footer></Footer>
   </>
  )
}

export default App
