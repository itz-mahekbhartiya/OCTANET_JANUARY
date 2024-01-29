import React from 'react'
import Navbar from './components/Navbar'
import About from './screen/About';
import History from './screen/History';
import Cards from './screen/Cards';
import Footer from './screen/Footer';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <History />
      <Cards />
      <Footer />
    </BrowserRouter>
  )
}

export default App