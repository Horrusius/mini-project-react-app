import RentalList from "../components/RentalList";

function Dashboard({ rentalsArr, onDelete}) {
  return (
    <div>
      <RentalList rentalsArr={rentalsArr} onDelete={onDelete}/>
    </div>
  );
}

export default Dashboard;