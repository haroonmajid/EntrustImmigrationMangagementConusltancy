import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services'
import Blog from './Pages/Blog'


function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);
  
  return (
    <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>

   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
