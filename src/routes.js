import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Portifolio from './Pages/Portifolio/Portifolio';

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/portifolio' element={<Portifolio/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;