import { useParams } from "react-router-dom";

function RentalDetails (props) {

    const { rentalId } = useParams();

    const rental = props.rentalArr.find((rentalObj) => {
        return rentalObj.id === parseInt(rentalId);
    });

    return (
        <>
            <h1>{rentalId}</h1>
            <p>{rental.name}</p>
        </>
    )
}

export default RentalDetails;