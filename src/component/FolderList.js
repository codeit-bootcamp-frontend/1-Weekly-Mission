import { NavLink } from "react-router-dom";

function getActiveStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : "",
  };
}

function FolderChip({ name, id, onClick }) {
  return (
    <NavLink style={getActiveStyle} to={`/folder/${id}`} onClick={onClick}>
      {name}
    </NavLink>
  );
}

function FolderList({ folders, onClick }) {
  return (
    <ul>
      {folders.map((folder) => {
        const { id, name } = folder;

        return (
          <li key={folder.id}>
            <FolderChip name={name} id={id} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}

export default FolderList;
