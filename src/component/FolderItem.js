import style from "./FolderItem.module.css";
function FolderItem({ folder: { id, name } }) {
  return <button className={style.button}>{name}</button>;
}
export default FolderItem;
