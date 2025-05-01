import { Link } from "react-router-dom";

function RentalCard({ rental, onDelete }) {
  return (
    <article className="rental-card flex border-2 border-blue-100 rounded-2xl bg-blue-50/50">
      <div className="shrink-0">
        <img
          src={rental.picture_url}
          alt={rental.name}
          className="rental-img h-60 aspect-4/3 object-cover rounded-tl-2xl rounded-bl-2xl"
        />
      </div>
      <div className="rental-content flex flex-col justify-between content-between w-full">
        <div className="flex flex-col justify-between content-between px-6 py-4 gap-3">
          <h3 className="font-bold text-lg">{rental.name}</h3>
          <div className="flex gap-8">
            {rental.neighbourhood && (
              <p className="location font-semibold">{rental.neighbourhood}</p>
            )}
            <p className="rating">
              ⭐ {rental.review_scores_rating ?? "No rating yet"}
            </p>
            <p className="price font-semibold text-lg">
              {rental.price} / Night
            </p>
          </div>
          <p className="short-description border-l-2 border-gray-400 pl-2 text-gray-500">
            {rental.description
              ? rental.description.slice(0, 150) + "..."
              : "No description available"}
          </p>
        </div>

        <div className="rental-actions py-4 px-6 gap-2 flex">
          <Link to={`/rentals/${rental.id}`}>
            <button className="details-btn btn">More Details</button>
          </Link>

          <Link to={`/rentals/${rental.id}/edit`}>
            <button className="edit-btn btn">Edit</button>
          </Link>
          
          <button
            onClick={() => onDelete(rental.id)}
            className="delete-btn btn"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default RentalCard;
