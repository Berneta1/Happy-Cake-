import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer.jsx";

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Contacto from './views/Contacto'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
   </div>
  )
}

export default App
