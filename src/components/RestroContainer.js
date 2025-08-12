import RestroCard from "./RestroCard";

const RestroContainer = ({restroList}) => {
  
  return (
    <div className="restro-container">
      {restroList.map((restro, index) => (
        <RestroCard key={index} restro={restro.info} index={index} />
      ))}
    </div>
  );
}
export default RestroContainer;