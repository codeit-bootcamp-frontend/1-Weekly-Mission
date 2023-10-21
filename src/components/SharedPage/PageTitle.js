import { useEffect, useState } from "react";
import { getFolderData } from "../../utils/api";
import "./PageTitle.css";
const PageTitle = () => {
  const [hasData, setHasData] = useState(false);
  const [folderData, setFolderData] = useState([]);

  const handleFolderData = async () => {
    let result;
    try {
      result = await getFolderData();
      if (result?.folder) {
        setHasData(true);
        setFolderData(result.folder);
      }
    } catch (error) {
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    handleFolderData();
  }, []);

  return (
    <>
      {hasData && (
        <div className="wrapper">
          <div className="titleUserProfile">
            <img
              className="titleUserProfileImg"
              src={folderData.owner.profileImageSource}
              alt="프로필 사진"
            />
            <span className="ownerName">@{folderData.owner.name}</span>
          </div>

          <span className="folderName">{folderData.name}</span>
        </div>
      )}
    </>
  );
};

export default PageTitle;
