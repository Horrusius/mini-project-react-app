import { useState } from "react";
import RentalData from "./data/data.json";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import RentalDetails from "./components/RentalDetails";
import EditRental from "./pages/EditRental";
import CreateRental from "./pages/CreateRental";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  const [rentals, setRentals] = useState(
    RentalData.results.filter((obj) => obj.has_availability === true)
  );

  const createRental = (newRentalDetails) => {
    const rentalIds = rentals.map((rentalObj) => {
      return rentalObj.id;
    });
    const maxId = Math.max(...rentalIds);
    const nextId = maxId + 1;

    const newRental = {
      ...newRentalDetails,
      id: nextId,
    };

    const newList = [newRental, ...rentals];

    setRentals(newList);
  };

  const editRental = (editRentalDetails) => {
    const newList = rentals.map((rental) =>
      rental.id === editRentalDetails.id
        ? { ...rental, ...editRentalDetails }
        : rental
    );
    setRentals(newList);
  };

  const deleteRentalItem = (locationId) => {
    const newRentalList = rentals.filter(
      (location) => location.id !== locationId
    );
    setRentals(newRentalList);
  };

  return (
    <>
      <div className="wrapper flex">
        <Sidebar />

        <main className="pl-[280px] w-full">
          <div className="p-10">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    rentalsArr={rentals}
                    onDelete={deleteRentalItem}
                    editRental={editRental}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/createRental"
                element={<CreateRental createRental={createRental} />}
              />

              <Route
                path="/rentals/:rentalId"
                element={<RentalDetails rentalArr={rentals} />}
              />
              <Route
                path="/rentals/:rentalId/edit"
                element={
                  <EditRental rentalArr={rentals} editRental={editRental} />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
