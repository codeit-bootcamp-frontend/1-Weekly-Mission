import { Card } from "components";
import * as Styled from "./StyledCardSection";

const CardSection = ({ data }) => {
  const handleCardClick = (url) => {
    window.open(url);
  };

  return (
    <Styled.Section>
      {data.map((data) => {
        return <Card key={data.id} data={data} onClick={handleCardClick} />;
      })}
    </Styled.Section>
  );
};

export default CardSection;
