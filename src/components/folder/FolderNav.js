import { Link } from "react-router-dom";
import { Fragment } from "react";

const FolderNav = ({ folders, selectedFolder, handleClick }) => {
  return (
    <div className="folder_buttons">
      <Link
        className={`folder_item ${selectedFolder === "전체" ? "selected" : ""}`}
        to={"/folder"}
        onClick={() => handleClick(null)}
      >
        <div>전체</div>
      </Link>
      {folders?.map((folder) => (
        <Fragment key={folder.id}>
          <Link
            className={`folder_item ${
              selectedFolder === folder.name ? "selected" : ""
            }`}
            to={`?folderId=${folder.id}`}
            onClick={() => handleClick(folder.id, folder.name)}
          >
            <div>{folder.name}</div>
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default FolderNav;
