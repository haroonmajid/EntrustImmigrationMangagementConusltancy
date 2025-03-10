import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import './App.css';
import Visas from './Pages/OtherServices';
import Testimonial from './Pages/Testimonial';
import CanadaVisa from './Pages/CanadaVisa';
import EuropeanVisa from './Pages/EuropeanVisa';
import UnitedKingdomVisa from './Pages/UnitedKingdomVisa';
import UsaVisa from './Pages/UsaVisa';
import AustraliaVisa from './Pages/AustraliaVisa';
import TopBanner from './Components/TopBanner';
import ScrollToTop from './Components/ScrollToTop';
import OtherServices from './Pages/OtherServices';
// import { HashLink as Link } from 'react-router-hash-link';


function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);

  return (
    
    <BrowserRouter>
    <ScrollToTop />
      <TopBanner></TopBanner>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Visas' element={<Visas />} />
        <Route path='/CanadaVisa' element={<CanadaVisa />} />
        <Route path='/EuropeanVisa' element={<EuropeanVisa />} />
        <Route path='/UnitedKingdomVisa' element={<UnitedKingdomVisa />} />
        <Route path='/UsaVisa' element={<UsaVisa />} />
        <Route path='/AustraliaVisa' element={<AustraliaVisa />} />
        <Route path='/About' element={<About />} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/OtherServices' element={<OtherServices />} />


      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
