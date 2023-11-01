import { Card } from "components";
import * as Styled from "./StyledCardSection";

const CardSection = ({ data }) => {
  return (
    <Styled.Section>
      {data.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </Styled.Section>
  );
};

export default CardSection;
