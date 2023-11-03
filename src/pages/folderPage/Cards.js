import "../../styles/landing.css";
import "./header.css";
import Card from "./Card";

const Cards = ({ fullData, fullFolderData }) => {
  return (
    <div className="cards-area">
      <div>
        <ul className="cards-ul">
          {fullData.map((data) => (
            <Card key={data?.id} data={data} fullFolderData={fullFolderData} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
