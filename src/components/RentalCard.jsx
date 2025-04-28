import { Link } from "react-router-dom";

function RentalCard(props) {
  return (
    <article className="rental-list">
      <h3>{props.rental.name}</h3>
      <p>{props.rental.description}</p>
      <button onClick={() => props.onDelete(props.rental.id)}>Delete</button>
      <Link to={`/rentals/${props.rental.id}`}>
        <button>More Details</button>
      </Link>
      <Link to={`/rentals/${props.rental.id}/edit`}>
        <button>Edit</button>
      </Link>
    </article>
  );
}
  
  export default RentalCard;

