import style from "./FolderList.module.css";
import FolderItem from "./FolderItem";
function FolderList({ folders }) {
  return (
    <div className={style.root}>
      <div className={style.folders}>
        {folders.map((folder) => (
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </div>

      <button>폴더추가</button>
    </div>
  );
}
export default FolderList;
