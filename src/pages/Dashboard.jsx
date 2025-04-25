import RentalList from "../components/RentalList";

function Dashboard({ rentalsArr, onDelete }) {
    return (
      <div>
        <h1>This is the Dashboard</h1>
        <RentalList rentalsArr={rentalsArr} onDelete={onDelete} />
      </div>
    );
  }

export default Dashboard;

