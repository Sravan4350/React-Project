const RestroCard = ({ restro }) => {
  return (
    <div className="w-80 h-80 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <img
        className="w-full h-50 object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${restro.cloudinaryImageId}`}
        alt={restro.name}
      />

      {/* Content */}
      <div className="p-4">
        
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {restro.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1 truncate">
          📍 {restro.locality}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-yellow-600 font-medium">
            ⭐ {restro.avgRating}
          </span>
        </div>

      </div>
    </div>
  );
};
export default RestroCard;