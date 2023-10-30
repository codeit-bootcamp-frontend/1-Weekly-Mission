import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFolderData, getFolderListData } from "../api.js";
import "../css/folderbar.css";
import FolderBox from "./FolderBox.js";
import FolderList from "./FolderList.js";
import EditButton from "./EditButton.js";
import addImg from "../images/add.svg";

function FolderBar() {
  const [hasData, setHasData] = useState(false);
  const [listData, setListData] = useState();
  const [folderData, setFolderData] = useState([]);
  const [folderId, setFolderId] = useState(-1);
  const [folderName, setFolderName] = useState("전체");
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
        <div className="folderBar">
          <FolderBox
            item="전체"
            onClick={() => {
              setFolderId(-1);
              setFolderName("전체");
            }}
            isSelected={folderId === -1}
          />
          {folderData.map((item) => (
            <FolderBox
              item={item.name}
              onClick={() => {
                setFolderId(item.id);
                setFolderName(item.name);
              }}
              key={item.id}
              isSelected={folderId === item.id}
            />
          ))}
        </div>
        <div className="addFolder">
          <p>폴더 추가</p>
          <img src={addImg} alt="+ 이미지" />
        </div>
      </div>
      <div className="folderListHeader">
        <div className="folderName">{folderName}</div>
        {folderId !== -1 && (
          <div className="editButtonList">
            <EditButton item="shared" />
            <EditButton item="edit" />
            <EditButton item="delete" />
          </div>
        )}
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
