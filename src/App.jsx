import { useState } from "react";
import RentalData from "./data/data.json";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import RentalDetails from './pages/RentalDetails'
import EditRental from "./pages/EditRental";
import About from './pages/About'
import NotFound from './pages/NotFound'

import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  const [rentals, setRentals] = useState(
    RentalData.results.filter((obj) => obj.has_availability === true)
  );

  const createRental = (newRentalDetails) => {
    const rentalIds = rentals.map((rentalObj) => {
      return rentalObj.id;
    });
    const maxId = Math.max(...rentalIds)
    const nextId = maxId + 1

    const newRental = {
      ...newRentalDetails,
      id: nextId,
    }

    const newList = [newRental, ...rentals]

    setRentals(newList);
  }

  const editRental = (editRentalDetails) => {
    const newList = rentals.map((rental) =>
      rental.id === editRentalDetails.id ? { ...rental, ...editRentalDetails } : rental
    );
    setRentals(newList);
  }

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
            element={<Dashboard rentalsArr={rentals} onDelete={deleteRentalItem} createRental={createRental} editRental={editRental} />}
          />
          <Route path="/about" element={<About />} />

          <Route
            path="/rentals/:rentalId"
            element={<RentalDetails rentalArr={rentals} />}
          />
          <Route
            path="/rentals/:rentalId/edit"
            element={<EditRental rentalArr={rentals} editRental={editRental} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App