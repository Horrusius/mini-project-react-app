import { useParams } from "react-router-dom";

function RentalDetails () {

    const { rentalId } = useParams();

    return (
        <>
            <h1>{rentalId}</h1>
        </>
    )
}

export default RentalDetails;