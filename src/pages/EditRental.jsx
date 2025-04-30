import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRental(props) {
  const { rentalId } = useParams();
  const navigate = useNavigate();

  const rental = props.rentalArr.find((rentalObj) => rentalObj.id === parseInt(rentalId));

  const [name, setName] = useState(rental ? rental.name : "");
  const [description, setDescription] = useState(rental ? rental.description : "");
  const [neighbourhood, setNeighbourhood] = useState(rental ? rental.neighbourhood : "");
  const [price, setPrice] = useState(rental ? rental.price : "");
  const [accommodates, setAccommodates] = useState(rental ? rental.accommodates : 1);
  const [pictureUrl, setPictureUrl] = useState(rental ? rental.picture_url : "");
  const [roomType, setRoomType] = useState(rental ? rental.room_type : "Private room");
  const [amenities, setAmenities] = useState(rental ? rental.amenities.join(", ") : "");
  const [availability, setAvailability] = useState(rental ? rental.has_availability : false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRental = {
      id: rental.id,
      name,
      description,
      neighbourhood,
      price,
      accommodates,
      picture_url: pictureUrl,
      room_type: roomType,
      amenities: amenities.split(",").map((a) => a.trim()),
      has_availability: availability,
    };

    props.editRental(updatedRental);
    navigate("/");
  };

  return (
    <section className="form-container">
      <h2>Edit Rental</h2>
      <form onSubmit={handleSubmit} className="rental-form">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </label>

        <label>
          Neighbourhood
          <input
            type="text"
            value={neighbourhood}
            onChange={(e) => setNeighbourhood(e.target.value)}
          />
        </label>

        <label>
          Price (USD)
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Accommodates
          <input
            type="number"
            value={accommodates}
            min="1"
            onChange={(e) => setAccommodates(Number(e.target.value))}
          />
        </label>

        <label>
          Picture URL
          <input
            type="url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </label>

        <label>
          Room Type
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Private room">Private room</option>
            <option value="Entire home/apt">Entire home/apt</option>
            <option value="Shared room">Shared room</option>
            <option value="Hotel room">Hotel room</option>
          </select>
        </label>

        <label>
          Amenities (comma-separated)
          <input
            type="text"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
          />
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={availability}
            onChange={(e) => setAvailability(e.target.checked)}
          />
          Available
        </label>

        <button type="submit">Update Rental</button>
      </form>
    </section>
  );
}

export default EditRental;
