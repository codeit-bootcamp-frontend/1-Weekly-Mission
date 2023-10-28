import "../../styles/landing.css";
import FolderListItem from "./FolderListItem";

const FolderList = ({ fullData, handleFolderClick }) => {
  return (
    <li
      style={{
        listStyle: "none",
      }}
    >
      {fullData.map((data) => (
        <FolderListItem
          key={data?.id}
          data={data}
          handleFolderClick={handleFolderClick}
        />
      ))}
    </li>
  );
};

export default FolderList;
