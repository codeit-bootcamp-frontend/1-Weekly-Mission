import CardItem from "./CardItem";

const CardList = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { links } = folder;

    return (
      <ul className="Card__list">
        {links.map((data) => (
          <li key={data.id}>
            <CardItem item={data} />
          </li>
        ))}
      </ul>
    );
  }
};

export default CardList;
