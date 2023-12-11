import Card from "./Card";

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
