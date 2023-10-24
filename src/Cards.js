import "./landing.css";
import Card from "./Card";

const Cards = ({ fullData }) => {
  return (
    <div className="card-area">
      <div
        style={{
          fontSize: "1.6rem",
          width: "100%",

          backgroundColor: "#F0F6FF",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {fullData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
