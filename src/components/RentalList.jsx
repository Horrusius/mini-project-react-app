import RentalCard from "./RentalCard";

function RentalList({ rentalsArr, onDelete }) {
  return (
    <section>
      {rentalsArr.map((rentalObj) => (
        <RentalCard
          key={rentalObj.id}
          rental={rentalObj}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default RentalList;