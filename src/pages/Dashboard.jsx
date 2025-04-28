import RentalList from "../components/RentalList";
import CreateRental from "../components/CreateRental";

function Dashboard({ rentalsArr, onDelete, createRental }) {
    return (
      <div>
        <h1>This is the Dashboard</h1>
        <CreateRental createRental={createRental}/>
        <RentalList rentalsArr={rentalsArr} onDelete={onDelete} />
      </div>
    );
  }

export default Dashboard;

