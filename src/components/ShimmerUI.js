const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center px-4 py-8 mt-26">
      {Array(30)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-80 h-80 bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-200" />

            {/* Lines Skeleton */}
            <div className="p-4 space-y-3">

              {/* short */}
              <div className="h-4 bg-gray-200 rounded w-1/4" />

              {/* medium */}
              <div className="h-4 bg-gray-200 rounded w-1/2" />

              {/* long */}
              <div className="h-4 bg-gray-200 rounded w-3/4" />

            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;