import "./SharedHero.css";
import { useEffect, useState } from "react";
import requestData from "../../../services/api";
import noUserImg from "../../../assets/image/icon-myprofile.svg";

function SharedHero() {
  const [folderInfoData, setFolderInfoData] = useState({});

  async function getFolderInfoResponse() {
    const { folder } = await requestData(null, "sample/folder", "GET");
    const { name: folderName, owner } = await folder;
    const { name: userName, profileImageSource: userImg } = await owner;
    setFolderInfoData({ folderName, userName, userImg });
  }

  useEffect(() => getFolderInfoResponse, []);

  return (
    <>
      <div className="folder-container">
        <img
          className="folder-image"
          alt="folder icon"
          src={folderInfoData.userImg ? folderInfoData.userImg : noUserImg}
        />
        <h4 className="folder-userName">{folderInfoData.userName}</h4>
      </div>
      <div
        className="folder-folderName"
        // style="width: 800px; position: relative"
      >
        {folderInfoData.folderName}
      </div>
    </>
  );
}
export default SharedHero;
