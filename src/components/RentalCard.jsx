import { Link } from "react-router-dom";

function RentalCard({ rental, onDelete }) {
  return (
    <article className="rental-card">
      <img src={rental.picture_url} alt={rental.name} className="rental-img" />
      <div className="rental-content">
        <h3>{rental.name}</h3>
        <p className="location">{rental.neighbourhood}</p>
        <p className="price">{rental.price} / night</p>
        <p className="rating">⭐ {rental.review_scores_rating ?? "No rating yet"}</p>
        <p className="short-description">
          {rental.description ? rental.description.slice(0, 150) + "..." : "No description available"}
        </p>

        <div className="rental-actions">
          <button onClick={() => onDelete(rental.id)} className="delete-btn">
            Delete
          </button>
          <Link to={`/rentals/${rental.id}`}>
            <button className="details-btn">More Details</button>
          </Link>
          <Link to={`/rentals/${rental.id}/edit`}>
            <button className="edit-btn">Edit</button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default RentalCard;
