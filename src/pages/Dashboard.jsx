import RentalList from "../components/RentalList";

function Dashboard({ rentalsArr, onDelete }) {
  return <RentalList rentalsArr={rentalsArr} onDelete={onDelete} />;
}

export default Dashboard;
