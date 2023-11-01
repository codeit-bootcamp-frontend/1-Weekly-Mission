import Card from "./Card";
import styles from "../assets/css/CardSection.module.css";

function CardSection({ data }) {
  const handleCardClick = (url) => {
    window.open(url);
  };
  return (
    <div className={styles.cardSection}>
      {data.map((linkData) => {
        return (
          <Card key={linkData.id} data={linkData} onClick={handleCardClick} />
        );
      })}
    </div>
  );
}

CardSection.defaultProps = {
  data: [],
};

export default CardSection;
