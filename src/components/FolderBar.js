import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFolderData, getFolderListData } from "../api.js";
import "../css/folderbar.css";
import FolderBox from "./FolderBox.js";
import FolderList from "./FolderList.js";

function FolderBar() {
  const [hasData, setHasData] = useState(false);
  const [listData, setListData] = useState();
  const [folderData, setFolderData] = useState([]);
  const [folderId, setFolderId] = useState(-1);
  const navigate = useNavigate();

  const handleLoad = async () => {
    let result;
    let response;
    try {
      response = await getFolderData();
      result = response.data;
      setFolderData(result);
    } catch (error) {
      navigate("/nodata");
      return;
    }
    try {
      response = await getFolderListData(folderId);
      result = response.data;
      if (result !== undefined && result.length > 0) {
        setHasData(true);
      } else {
        setHasData(false);
      }
      setListData(result);
    } catch (error) {
      setHasData(false);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
  }, [folderId]);

  return (
    <>
      <div className="folderBarContainer">
        <FolderBox
          item="전체"
          onClick={() => setFolderId(-1)}
          isSelected={folderId === -1}
        />
        {folderData.map((item) => (
          <FolderBox
            item={item.name}
            onClick={() => setFolderId(item.id)}
            key={item.id}
            isSelected={folderId === item.id}
          />
        ))}
      </div>
      {hasData && <FolderList item={listData} />}
      {!hasData && (
        <div className="nodataContainer">
          <p>저장된 값이 없습니다.</p>
        </div>
      )}
    </>
  );
}

export default FolderBar;
