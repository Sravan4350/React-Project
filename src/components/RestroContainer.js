import { Link } from "react-router-dom";
import RestroCard from "./RestroCard";

const RestroContainer = ({ restroList }) => {
  return (
    <div className="mx-auto px-1 flex ">
      
      {/* Grid Layout */}
      <div className="flex  flex-wrap gap-8 justify-center">
        {restroList.map((restro, index) => (
          <Link to={"/restaurant/" + restro.info.id} key={restro.info.id} className="block">
            <RestroCard restro={restro.info} index={index} />
          </Link>
        ))}
      </div>

      {/* No Results */}
      {restroList.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <h2 className="text-xl font-semibold mb-2">
            No Restaurants Found 😔
          </h2>
          <p>Try searching something else.</p>
        </div>
      )}

    </div>
  );
};

export default RestroContainer;