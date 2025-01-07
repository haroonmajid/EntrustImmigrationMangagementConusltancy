import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Blog from './Pages/Testimonials'
import VisaTypes from './Pages/VisaTypes';
import Testimonials from './Pages/Testimonials';


function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);
  
  return (
    <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/VisaTypes' element={<VisaTypes/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Testimonials' element={<Testimonials/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>

   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
