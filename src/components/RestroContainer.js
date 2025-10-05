import { Link } from "react-router-dom";
import RestroCard from "./RestroCard";

const RestroContainer = ({restroList}) => {
  
  return (
    <div className="restro-container">
      {restroList.map((restro, index) => (
        <Link to={"/restaurant/" + restro.info.id} key={restro.info.id}>
          <RestroCard key={index} restro={restro.info} index={index} />
        </Link>
      ))}
    </div>
  );
}
export default RestroContainer;