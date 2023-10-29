import style from "./FolderList.module.css";
import FolderItem from "./FolderItem";
import addIcon from "../assets/img/add.svg";
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
        <button className={style.addFolderBtn}>
          폴더 추가
          <img src={addIcon} alt="더하기 아이콘" />
        </button>
      </div>
    </div>
  );
}
export default FolderList;
