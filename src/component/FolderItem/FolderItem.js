import { useLocation, useSearchParams } from "react-router-dom";
import style from "./FolderItem.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
function FolderItem({ id, name }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const folderIdParam = searchParams.get("folderId");
  const location = useLocation();

  const FOLDERID_QUERY = "?folderId=";
  return (
    <Link
      className={clsx(style.button, {
        [style.buttonClicked]: folderIdParam === id,
      })}
      id={id}
      to={location.pathname + FOLDERID_QUERY + id}
    >
      {name}
    </Link>
  );
}
export default FolderItem;
