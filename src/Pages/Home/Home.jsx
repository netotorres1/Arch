import React from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Featured from '../../Components/Featured/Featured'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Welcome from '../../Components/WelcomeToArchStudio/Welcome'

const Home = () => {

  return (
    <div>
      <Navbar/>
      <Slider/>
      <Welcome/>
      <AboutUs/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default Home