import "../css/banner.css";
import { useState, useEffect } from "react";
import { getFolderData } from "../api";

function Banner() {
  const [hasData, setHasData] = useState(false);
  const [folderData, setFolderData] = useState();

  const load = async () => {
    let result;
    try {
      result = await getFolderData();
      result = result.folder;
      setHasData(true);
      setFolderData(result);
    } catch (error) {
      setHasData(false);
      return;
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      {hasData && (
        <div className="bannerContainer">
          <div className="bannerProfile">
            <img
              src={folderData.owner.profileImageSource}
              id="profileImg"
              alt="Profile Img"
            />
            <p>@{folderData.owner.name}</p>
          </div>
          <p>{folderData.name}</p>
        </div>
      )}
    </>
  );
}

export default Banner;
