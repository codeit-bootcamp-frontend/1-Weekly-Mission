import { Card } from "@/components";
import { LinksData, FoldersData } from "@/lib/types/data";
import * as Styled from "./CardSection.styled";

interface Props {
  data: LinksData[];
  folderData: FoldersData[];
}

const CardSection = ({ data, folderData }: Props) => {
  return (
    <Styled.Section>
      {data.map((data) => {
        return <Card key={data?.id} data={data} folderData={folderData} />;
      })}
    </Styled.Section>
  );
};

export default CardSection;
