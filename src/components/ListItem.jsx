function RentalCard({ rental, onDelete }) {
    return (
      <article className="rental-list">
        <h3>{rental.name}</h3>
        <button onClick={() => onDelete(rental.id)}>Delete</button>
      </article>
    );
  }
  
  export default RentalCard;