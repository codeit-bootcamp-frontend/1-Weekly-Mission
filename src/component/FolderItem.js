import style from "./FolderItem.module.css";
function FolderItem({ folder: { id, name }, onFolderClick }) {
  const handleClick = (e) => {
    onFolderClick(e.target.id);
  };
  return (
    <button className={style.button} id={id} onClick={handleClick}>
      {name}
    </button>
  );
}
export default FolderItem;
