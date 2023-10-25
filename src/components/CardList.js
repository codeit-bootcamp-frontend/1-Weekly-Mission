import CardItem from "./CardItem";
import "../styles/cardList.css";

const CardList = ({ folder }) => {
  const { links } = folder;
  return (
    <div className="card-list">
      <div className="section-title section-title-third">
        <div className="section-title-third-inner">
          {links &&
            links.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <CardItem item={item} />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
