import { Link } from "react-router-dom";

function RentalCard({ rental, onDelete }) {
    return (
      <article className="rental-list">
        <h3>{rental.name}</h3>
        <p>{rental.description}</p>
        <button onClick={() => onDelete(rental.id)}>Delete</button>
        <Link to={`/rentals/${rental.id}`}>
          <button>More Details</button>
        </Link>
        
      </article>
    );
  }
  
  export default RentalCard;