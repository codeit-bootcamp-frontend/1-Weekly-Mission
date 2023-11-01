import LinkCard from "./LinkCard";

function FolderList({ item }) {
  return (
    <div className="cardListContainer">
      <div className="cardList">
        {item.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FolderList;
