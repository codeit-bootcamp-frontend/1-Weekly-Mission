import Card from "./Card";

interface SingleDataOfTotalData {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}

interface Link {
  count: number;
}

interface SingleData {
  created_at: string;
  id: number;
  link: Link;
  name: string;
  user_id: number;
}

interface Props {
  fullData: SingleDataOfTotalData[];
  fullFolderData: SingleData[];
}

const Cards = ({ fullData, fullFolderData }: Props) => {
  return (
    <div className="cards-area">
      <div>
        <ul className="cards-ul">
          {fullData &&
            fullData.map((data) => (
              <Card
                key={data?.id}
                data={data}
                fullFolderData={fullFolderData}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
