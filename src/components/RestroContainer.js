import { Link } from "react-router-dom";
import RestroCard, { WithPromotedTag } from "./RestroCard";

// HOF returned a new enhanced component, and we stored it in a variable, and we send the props to that, and received where it called
const PromotedRestroCard = WithPromotedTag(RestroCard);
const RestroContainer = ({ restroList }) => {
  return (
    <div className="mx-auto px-1 flex">

      {/* Grid Layout */}
      <div className="flex flex-wrap gap-8 justify-center">
        {restroList.map((restro) => (
          <Link to={"/restaurant/" + restro.info.id} key={restro.info.id} className="block">
            {restro.info.promoted ? (
              <PromotedRestroCard key={restro.info.id} restro={restro.info} />
            ) : (
              <RestroCard key={restro.info.id} restro={restro.info} />
            )}
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