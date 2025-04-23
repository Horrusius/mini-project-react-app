import { useState } from "react";
import RentalData from "../data/data.json";
import RentalCard from "./ListItem";

function RentalList() {
  const [rentals, setRentals] = useState(
    RentalData.results.filter((obj) => obj.has_availability === true)
  );

  const deleteRentalItem = (locationId) => {
    const newRentalList = rentals.filter((location) => location.id !== locationId);
    setRentals(newRentalList);
  };

  return (
    <section>
      {rentals.map((rentalObj) => (
        <RentalCard
          key={rentalObj.id}
          rental={rentalObj}
          onDelete={deleteRentalItem}
        />
      ))}
    </section>
  );
}

export default RentalList;