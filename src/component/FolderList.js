import style from "./FolderList.module.css";
import FolderItem from "./FolderItem";
function FolderList({ folders, onFolderClick }) {
  const entireFolder = [{ id: "", name: "전체" }, ...folders];
  return (
    <div className={style.root}>
      <div className={style.folders}>
        {entireFolder.map((folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            onFolderClick={onFolderClick}
          />
        ))}
      </div>

      <div>
        <button>폴더추가</button>
      </div>
    </div>
  );
}
export default FolderList;
