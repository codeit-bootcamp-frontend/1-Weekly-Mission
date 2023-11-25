import { Card } from "components";
import * as Styled from "./StyledCardSection";

const CardSection = ({ data, folderData }) => {
  return (
    <Styled.Section>
      {data.map((data) => {
        return <Card key={data?.id} data={data} folderData={folderData} />;
      })}
    </Styled.Section>
  );
};

export default CardSection;
