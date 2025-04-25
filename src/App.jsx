import { useState } from "react";
import RentalData from "./data/data.json";
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

  const [rentals, setRentals] = useState(
    RentalData.results.filter((obj) => obj.has_availability === true)
  );

  const deleteRentalItem = (locationId) => {
    const newRentalList = rentals.filter((location) => location.id !== locationId);
    setRentals(newRentalList);
  };

  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={<Dashboard rentalsArr={rentals} onDelete={deleteRentalItem} />}
          />
          <Route path="/about" element={<About />} />

          <Route
            path="/rentals/:rentalId"
            element={<RentalDetails rentalArr={rentals} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App