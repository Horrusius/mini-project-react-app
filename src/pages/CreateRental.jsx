import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRental(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [price, setPrice] = useState("");
  const [accommodates, setAccommodates] = useState(1);
  const [pictureUrl, setPictureUrl] = useState("");
  const [roomType, setRoomType] = useState("Private room");
  const [amenities, setAmenities] = useState("");
  const [availability, setAvailability] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRental = {
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

    props.createRental(newRental);
    navigate("/");
  };

  return (
    <section className="form-container">
      <h2>Create a New Rental</h2>
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
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Accommodates
          <input
            type="number"
            min="1"
            value={accommodates}
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

        <button type="submit">Create Rental</button>
      </form>
    </section>
  );
}

export default CreateRental;