import "../../styles/landing.css";
import FolderListItem from "./FolderListItem";
const FolderList = ({ fullData, handleFolderClick }) => {
  return (
    <>
      {fullData.map((data) => (
        <FolderListItem
          key={data?.id}
          data={data}
          handleFolderClick={handleFolderClick}
        />
      ))}
    </>
  );
};

export default FolderList;
