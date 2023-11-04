import { Fragment } from "react";

const FolderNav = ({ folders, selectedFolderId, handleClick }) => {
  return (
    <div className="folder_buttons">
      <button
        className={`folder_item ${selectedFolderId === null ? "selected" : ""}`}
        onClick={() => handleClick(null)}
      >
        <div>전체</div>
      </button>
      {folders?.map((folder) => (
        <Fragment key={folder.id}>
          <button
            className={`folder_item ${
              selectedFolderId === folder.id ? "selected" : ""
            }`}
            onClick={() => handleClick(folder.id, folder.name)}
          >
            <div>{folder.name}</div>
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default FolderNav;
