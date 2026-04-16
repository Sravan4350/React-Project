import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

const RestroCategories = ({ category,showItems, setShowItems, index }) => {

  const onClickAccordion = () => {
    setShowItems(index===showItems ? null : index)
  }
  return (
    <div className="max-w-3xl mx-auto mb-2 p-1">
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        
        {/* HEADER BUTTON */}
        <button onClick={onClickAccordion} className="w-full text-left p-4 flex justify-between items-center cursor-pointer">
          <span className="text-base font-semibold text-gray-800">{category.title} ({category.itemCards.length})</span>
          <FontAwesomeIcon icon={showItems===index ? faAngleUp : faAngleDown} className="text-gray-500" />
        </button>

        {/* CONTENT INSIDE SAME BOX */}
        {showItems === index  && (
          <div className="px-4 pb-4">
            <ItemList category={category.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestroCategories;
