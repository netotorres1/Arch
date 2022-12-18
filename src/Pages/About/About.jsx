import OurHeritage from "../../Components/About/OurHeritage/OurHeritage"
import Team from "../../Components/About/Team/Team"
import Leaders from "../../Components/About/TheLeaders/Leaders"
import Footer from "../../Components/Shared/Footer/Footer"
import Navbar from "../../Components/Shared/Navbar/Navbar"

const About = () => {
    return(
        <div>
            <Navbar/>
            <Team />
            <OurHeritage />
            <Leaders/>
            <Footer/>
        </div>
    )
}

export default About