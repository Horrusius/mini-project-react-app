import RentalList from "../components/RentalList";
import CreateRental from "../components/CreateRental";
import EditRental from "./EditRental";

function Dashboard({ rentalsArr, onDelete, createRental, editRental }) {
  return (
    <div>
      <h1>This is the Dashboard</h1>
      <CreateRental createRental={createRental} />
      <RentalList rentalsArr={rentalsArr} onDelete={onDelete} editRental={editRental} />
    </div>
  );
}

export default Dashboard;

