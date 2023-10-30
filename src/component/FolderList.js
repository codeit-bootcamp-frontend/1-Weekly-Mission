import { NavLink } from "react-router-dom";

function getActiveStyle({ isActive }) {
  return {
    backgroundColor: isActive ? `skyblue` : `#fff`,
  };
}

function FolderChip({ name, id }) {
  return (
    <NavLink style={getActiveStyle} to={`/folder/${id}`}>
      <button>{name}</button>
    </NavLink>
  );
}

function FolderList({ folders, onClick }) {
  return (
    <ul>
      <li>
        <FolderChip name={"전체"} id={""} />
      </li>
      {folders.map((folder) => {
        const { id, name } = folder;

        return (
          <li key={folder.id}>
            <FolderChip name={name} id={id} />
          </li>
        );
      })}
    </ul>
  );
}

export default FolderList;
