import Card from "./Card";

interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

const Cards = ({ fullData }: { fullData: Link[] }) => {
  return (
    <div className="cards-area">
      <div>
        <ul className="cards-ul">
          {fullData.map((data: Link) => (
            <Card key={data?.id} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
