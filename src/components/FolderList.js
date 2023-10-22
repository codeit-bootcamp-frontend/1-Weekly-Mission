function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}
function FolderListItem({ item }) {
  return (
    <div className="FolderListItem"> 
      <img className="FolderListItem-img" src={item.imgUrl} alt={item.title}/>
      <div>
        <div className="date"></div>
        <h1>{item.title}</h1>
        <p>{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
}

function FolderList({ items }) {
  return (
    <ul className="FolderList">
      {items.map((items) => {
        return (
          <li key={item.id}>
            <FolderListItem
              item={item} />
          </li>);
      })}
    </ul>
  );
}

export default FolderList;