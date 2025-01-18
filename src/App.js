import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import './App.css';
import Visas from './Pages/Visas';
import Testimonial from './Pages/Testimonial';
import CanadaVisa from './Pages/CanadaVisa';
import EuropeanVisa from './Pages/EuropeanVisa';
import UnitedKingdomVisa from './Pages/UnitedKingdomVisa';

function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);
  
  return (
    <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Visas' element={<Visas/>}/>    
    <Route path='/CanadaVisa' element={<CanadaVisa/>}/>
    <Route path='/EuropeanVisa' element={<EuropeanVisa/>}/>
    <Route path='/UnitedKingdomVisa' element={<UnitedKingdomVisa/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Testimonial' element={<Testimonial/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>

   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
