import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Portifolio from './Pages/Portifolio/Portifolio';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/portifolio' element={<Portifolio/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;