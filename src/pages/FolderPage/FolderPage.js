import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "commons/components/Layout/Layout";
import { SearchBar } from "commons/components/index";
import useAsync from "apis/useAsync";
import { FolderHeader, LinkAddBar } from "./components/index";
import { getFolderList } from "apis/getFolderList";
import "./FolderPage.css";

//모바일 환경에서 보이는 버튼
function MobileFolderButton() {
  return <button className="mobild-float-button">폴더 추가+</button>;
}

function FolderPage() {
  const param = useParams();
  const [folderList, setFolderList] = useState([]);

  // 내가 가지고 있는 모든 폴더 목록들을 받아서 folderList 배열에 저장.
  const [pending, error, getAllFoldersAsync] = useAsync(getFolderList);
  const getter = async () => {
    const allFolders = await getAllFoldersAsync();
    setFolderList(allFolders?.data);
  };

  useEffect(() => {
    getter();
  }, []);

  return (
    <Layout isSticky={false}>
      <div>
        <MobileFolderButton />
        <LinkAddBar />
        <SearchBar />
        <button type="button" className="add-folder-button">
          폴더 추가+
        </button>
        <div className="folder-buttons">
          <FolderHeader folderList={folderList} />
        </div>
      </div>
    </Layout>
  );
}

export default FolderPage;
