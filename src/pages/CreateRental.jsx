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
      <h2 className="text-2xl font-bold text-center mb-5">
        Create a New Rental
      </h2>
      <form
        onSubmit={handleSubmit}
        className="rental-form bg-blue-50/50 border-blue-300 w-1/2 mx-auto border flex flex-col p-5 rounded-2xl gap-2"
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>

        <div>
          <label>Neighbourhood</label>
          <input
            type="text"
            value={neighbourhood}
            onChange={(e) => setNeighbourhood(e.target.value)}
          />
        </div>

        <div>
          <label>Price (USD)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label>Accommodates</label>
          <input
            type="number"
            min="1"
            value={accommodates}
            onChange={(e) => setAccommodates(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Picture URL</label>
          <input
            type="url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </div>

        <div>
          <label>Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Private room">Private room</option>
            <option value="Entire home/apt">Entire home/apt</option>
            <option value="Shared room">Shared room</option>
            <option value="Hotel room">Hotel room</option>
          </select>
        </div>

        <div>
          <label>Amenities (comma-separated)</label>
          <input
            type="text"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="checkbox-label">Available</label>
          <input
            type="checkbox"
            checked={availability}
            onChange={(e) => setAvailability(e.target.checked)}
          />
        </div>

        <button type="submit" className="btn details-btn">Create Rental</button>
      </form>
    </section>
  );
}

export default CreateRental;
