import React from 'react'
import AboutUs from '../../Components/Home/AboutUs/AboutUs'
import Featured from '../../Components/Home/Featured/Featured'
import Footer from './../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import Slider from '../../Components/Home/Slider/Slider'
import Welcome from '../../Components/Home/WelcomeToArchStudio/Welcome'

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