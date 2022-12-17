import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Portifolio from './Pages/Portifolio/Portifolio';
import About from './Pages/About/About';

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/portifolio' element={<Portifolio/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;