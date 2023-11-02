import "../../styles/landing.css";
import "./header.css";
import Card from "./Card";

const Cards = ({ fullData, fullList }) => {
  return (
    <div className="cards-area">
      <div>
        <ul className="cards-ul">
          {fullData.map((data) => (
            <Card key={data?.id} data={data} fullList={fullList} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
