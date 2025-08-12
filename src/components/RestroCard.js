const RestroCard = ({ restro, index }) => {
  return (
    <div className="restro-card" key={index}>
      <img
        className="restro-image"
         src={`https://media-assets.swiggy.com/swiggy/image/upload/${restro.cloudinaryImageId}`}
        alt={restro.name}
      />
      <h2 className="restro-name">{restro.name}</h2>
      <p className="restro-locality">{restro.locality.slice(0,15)}</p>
      <p className="restro-rating">{restro.avgRating} ⭐</p>
    </div>
  );
}
export default RestroCard;