/* eslint-disable react/prop-types */
import Card from "./Card";

const CardsContainer = ({ data, activeButton }) => {
  return (
    <div className="cards-container">
      {data.map((cardData, i) => (
        <Card key={i} data={cardData} activeButton={activeButton} />
      ))}
    </div>
  );
};

export default CardsContainer;
