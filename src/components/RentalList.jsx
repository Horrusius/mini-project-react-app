import RentalCard from "./RentalCard";

function RentalList({ rentalsArr, onDelete }) {
  return (
    <section className="flex flex-col gap-5">
      {rentalsArr.map((rentalObj) => (
        <RentalCard key={rentalObj.id} rental={rentalObj} onDelete={onDelete} />
      ))}
    </section>
  );
}

export default RentalList;
