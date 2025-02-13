import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Aboutus from './components/Aboutus.jsx'
import Contactus from './components/Contactus.jsx'
import Error from './components/Error.jsx'
import './App.css'
import { Outlet } from 'react-router-dom';




function App() {
  return (
    <div >
      <Navbar />

      <div className="pt-20 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App
