import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import RentalList from './components/RentalList'
import Dashboard from './pages/Dashboard'
import RentalDetails from './pages/RentalDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />}/>

          <Route path="/rentals/:rentalId" element={<RentalDetails />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App