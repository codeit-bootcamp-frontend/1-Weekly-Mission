import { useSearchParams } from "react-router-dom";
import style from "./FolderItem.module.css";
import clsx from "clsx";
function FolderItem({ id, name }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const folderIdParam = searchParams.get("folderId");
  const handleClick = (e) => {
    setSearchParams({ folderId: e.target.id });
  };
  return (
    <button
      className={clsx(style.button, {
        [style.buttonClicked]: folderIdParam == id,
      })}
      id={id}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
export default FolderItem;
