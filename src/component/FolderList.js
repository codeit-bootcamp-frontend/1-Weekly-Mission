import style from "./FolderList.module.css";
import FolderItem from "./FolderItem";
function FolderList({ folders }) {
  const entireFolder = [{ id: "", name: "전체" }, ...folders];
  return (
    <div className={style.root}>
      <div className={style.folders}>
        {entireFolder.map((folder) => (
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </div>

      <div>
        <button className={style.addFolderBtn}>폴더 추가 +</button>
      </div>
    </div>
  );
}
export default FolderList;
