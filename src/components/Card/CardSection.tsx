import { Card } from "components";
import * as Styled from "./StyledCardSection";

interface LinksData {
  id?: number;
  created_at?: string;
  updated_at?: string | null;
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
}

interface LinkCount {
  count: number;
}

interface FoldersData {
  id?: number;
  created_at?: string;
  name: string;
  user_id?: number;
  link: LinkCount;
}

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
