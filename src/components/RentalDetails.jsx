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
    <section className="rental-details flex flex-col gap-4">
      <div>
        <img
          src={rental.picture_url}
          alt={rental.name}
          className="detail-img aspect-5/2 object-cover rounded-2xl"
        />
      </div>
      <div className="detail-content">
        <div className="flex justify-between">
          <div className="space-y-3">
            <h1 className="font-bold text-2xl">{rental.name}</h1>
            <div className="flex gap-5 font-medium text-gray-500">
              <p className="location">
                📍 {rental.neighbourhood} ({rental.neighbourhood_group_cleansed}
                )
              </p>
              <p className="price">{rental.price} / night</p>
              <p className="rating">
                ⭐ {rental.review_scores_rating ?? "No rating yet"}
              </p>
            </div>
          </div>

          <div className="space-y-2 px-5 flex items-center gap-2">
            <p className="text-right leading-tight">
              <strong>{rental.host_name}</strong>
              <br />
              {rental.host_location}
            </p>
            <img
              src={rental.host_picture_url}
              alt={rental.host_name}
              className="host-img rounded-full w-20"
            />
          </div>
        </div>

        <div className="mb-5">
          <h3 className="font-bold mb-2">Description</h3>
          <p className="text-gray-700">{rental.description}</p>
        </div>

        <div className="mb-5">
          <h3 className="font-bold mb-2">Amenities</h3>
          <ul className="amenities-list grid grid-cols-3">
            {rental.amenities.slice(0, 10).map((amenity, idx) => (
              <li key={idx}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RentalDetails;
