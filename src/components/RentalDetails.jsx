import { useParams } from "react-router-dom";

function RentalDetails({ rentalArr }) {
  const { rentalId } = useParams();

  const rental = rentalArr.find(
    (rentalObj) => rentalObj.id === parseInt(rentalId)
  );

  if (!rental) {
    return <p>Rental not found.</p>;
  }

  return (
    <section className="rental-details">
      <img
        src={rental.picture_url}
        alt={rental.name}
        className="detail-img"
      />
      <div className="detail-content">
        <h1>{rental.name}</h1>
        <p className="location">
          📍 {rental.neighbourhood} ({rental.neighbourhood_group_cleansed})
        </p>
        <p className="price">{rental.price} / night</p>
        <p className="rating">⭐ {rental.review_scores_rating ?? "No rating yet"}</p>

        <h3>Description</h3>
        <p>{rental.description}</p>

        <h3>Host Info</h3>
        <p><strong>{rental.host_name}</strong> from {rental.host_location}</p>
        <img
          src={rental.host_picture_url}
          alt={rental.host_name}
          className="host-img"
        />

        <h3>Amenities</h3>
        <ul className="amenities-list">
          {rental.amenities.slice(0, 10).map((amenity, idx) => (
            <li key={idx}>{amenity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RentalDetails;
