import { Card } from "components";
import "./CardSection.css";

const CardSection = ({ data }) => {
  const handleCardClick = (url) => {
    window.open(url);
  };

  return (
    <section>
      {data.map((data) => {
        return <Card key={data.id} data={data} onClick={handleCardClick} />;
      })}
    </section>
  );
};

export default CardSection;
