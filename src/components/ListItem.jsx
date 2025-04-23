import {useState} from "react"
import RentalData from "../data/data.json"

function ListItem () {

    const [rentals, setRentals] = useState(RentalData.results.filter(obj => obj.has_availability === true));
    const deleteRentalItem = (locationId) => {

        const newRentalList = rentals.filter(location => location.id !== locationId);

        setRentals(newRentalList);
    }

    return (
        <>
        {rentals.map((rentalObj) => {
                return <article key={rentalObj.id}>
                    <h3>{rentalObj.name}</h3>
                    <button onClick={() => {deleteRentalItem(rentalObj.id)}}>Delete</button>
                </article>
            })}
        </>
    )
}

export default ListItem;