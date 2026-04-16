const ItemList = (itemCards) => {
    const data = itemCards.category;
    return (
        <div className="space-y-4">
            {data.map((each) => (
                <div
                    key={each.card.info.id}
                    className="flex justify-between items-start p-4 border-b border-gray-200"
                >
                    {/* LEFT CONTENT */}
                    <div className="w-3/4 pr-4">
                        <h3 className="text-base font-semibold text-gray-800">
                            {each.card.info.name}
                        </h3>

                        <p className="text-sm text-gray-700 mt-1">
                            ₹ {each.card.info.price / 100 || each.card.info.defaultPrice / 100}
                        </p>

                        <span className="text-green-600 font-medium text-sm">
                            ⭐ {each?.card?.info?.ratings?.aggregatedRating?.rating || "N/A"}
                        </span>

                        <p className="text-gray-500 text-xs mt-2 line-clamp-2">
                            {each?.card?.info?.description}
                        </p>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-1/4 flex flex-col items-center relative">
                        <img
                            className="w-24 h-24 object-cover rounded-lg"
                            src={each?.card?.info?.imageId? `https://media-assets.swiggy.com/swiggy/image/upload/${each?.card?.info?.imageId}`: "Customisable"}
                            alt="Customisable"
                        />

                        <button className="absolute -bottom-2 bg-white border border-gray-300 text-green-600 text-xs px-4 py-1 rounded-lg shadow-md hover:bg-gray-100">
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;