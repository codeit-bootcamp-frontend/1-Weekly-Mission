import Card from "./Card";
import * as Styled from "../style/CardSection";

function CardSection({ data }) {
  const handleCardClick = (url: string) => {
    window.open(url);
  };

  interface linkData {
    id: number;
  }

  return (
    <Styled.Div>
      {data.map((linkData: linkData) => {
        return (
          <Card key={linkData.id} data={linkData} onClick={handleCardClick} />
        );
      })}
    </Styled.Div>
  );
}

CardSection.defaultProps = {
  data: [],
};

export default CardSection;
