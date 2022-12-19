import Navbar from './../../Components/Shared/Navbar/Navbar'
import Footer from './../../Components/Shared/Footer/Footer'
import TellUs from '../../Components/Contact/TellUs/TellUs'
import Details from '../../Components/Contact/Details/Details'
import Form from '../../Components/Contact/Form/Form'

const Contact = () => {
    return(
        <div>
            <Navbar/>
            <TellUs/>
            <Details/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Contact