import { useState } from "react"
import { useNavigate } from "react-router-dom";

function CreateRental(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [availability, setAvailability] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRental = {
            name: name,
            description: description,
            has_availability: availability,
        }

        props.createRental(newRental);

        setName("");
        setDescription("");
        setAvailability(false);

        navigate('/');
    }

    return (
        <section>
            <form id="form" onSubmit={handleSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the title of Rental"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>
                <label>Description
                    <textarea
                        type="textarea"
                        name="description"
                        placeholder="Enter the description of Rental"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>

                
                <label> It's available
                    <input
                        type="checkbox"
                        id="available"
                        name="available"
                        checked={availability}
                        onChange={(e) => { setAvailability(e.target.value) }}
                    />
                </label>

                <button>Create Rental</button>
            </form>
        </section>
    )
}

export default CreateRental;