import SearchLink from "./SearchLink";
import "./FolderList.css";
import { getUserLinkData } from "../../utils/api.js";
import { useEffect, useState } from "react";
import FolderCategory from "./FolderCategory";
import LinkItem from "./LinkItem";
import { Link } from "react-router-dom";
import shareIcon from "../../assets/images/shareIcon.png";
import editIcon from "../../assets/images/editIcon.png";
import deleteIcon from "../../assets/images/deleteIcon.png";
function FolderList() {
  const [linkData, setLinkData] = useState([]);
  const [folderId, setFolderId] = useState([]);
  const [folderName, setFolderName] = useState("전체");
  const [isLinkData, setIsLinkData] = useState(true);
  const handleLoad = async () => {
    let result;

    try {
      result = await getUserLinkData(folderId ? folderId : "");
      if (!result) return;
      setLinkData(result.data);

      if (result.data.length === 0) {
        setIsLinkData(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (folderId, folderName = "전체") => {
    setFolderId(folderId);
    setFolderName(folderName);
  };

  useEffect(() => {
    handleLoad();
  }, [folderId]);

  return (
    <div className="folderListContainer">
      <SearchLink />
      {isLinkData ? (
        <FolderCategory folderId={folderId} handleChange={handleChange} />
      ) : (
        <span className="noLink">저장된 링크 가 없습니다.</span>
      )}
      {isLinkData && (
        <div className="linkMenuContainer">
          <span className="linkMenuName">{folderName}</span>
          {folderName !== "전체" && (
            <ul className="linkMenu">
              <li>
                <img src={shareIcon} alt="공유 아이콘" />
                <Link className="shareLink">공유</Link>
              </li>
              <li>
                <img src={editIcon} alt="수정 아이콘" />
                <Link className="editLink">이름 변경</Link>
              </li>
              <li>
                <img src={deleteIcon} alt="삭제 아이콘" />
                <Link className="deleteLink">삭제</Link>
              </li>
            </ul>
          )}
        </div>
      )}
      {isLinkData && (
        <div className="linkListContainer">
          <ul className="linkList">
            {linkData.map((item) => (
              <li key={item.id}>
                <LinkItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FolderList;
