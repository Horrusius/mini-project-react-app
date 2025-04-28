import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRental(props) {
    const { rentalId } = useParams();
    const navigate = useNavigate();

    const rental = props.rentalArr.find((rentalObj) => rentalObj.id === parseInt(rentalId));

    const [name, setName] = useState(rental ? rental.name : "");
    const [description, setDescription] = useState(rental ? rental.description : "");
    const [availability, setAvailability] = useState(rental ? rental.has_availability : false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedRental = {
            id: rental.id,
            name,
            description,
            has_availability: availability,
        };

        props.editRental(updatedRental);

        navigate('/');
    };

    return (
        <section>
            <form id="form" onSubmit={handleSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the title of Rental"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Description
                    <textarea
                        name="description"
                        placeholder="Enter the description of Rental"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label>It's available
                    <input
                        type="checkbox"
                        name="available"
                        checked={availability}
                        onChange={(e) => setAvailability(e.target.checked)} 
                    />
                </label>

                <button>Update Rental</button>
            </form>
        </section>
    );
}

export default EditRental;