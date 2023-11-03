import { useEffect, useState } from "react";
import Layout from "commons/components/Layout/Layout";
import { SearchBar } from "commons/components/index";
import useAsync from "apis/useAsync";
import { LinkAddBar } from "./components/index";
import { getFolderList } from "apis/getFolderList";
import "./FolderPage.css";
import FolderViewer from "./components/FolderViewer/FolderViewer";

//모바일 환경에서 보이는 버튼
function MobileFolderButton() {
  return <button className="mobild-float-button">폴더 추가+</button>;
}

function FolderPage() {
  const [folderList, setFolderList] = useState([]);

  // 내가 가지고 있는 모든 폴더 목록들을 받아서 folderList 배열에 저장.
  const [pending, error, getFolderListAsync] = useAsync(getFolderList);
  const getter = async () => {
    const allFolders = await getFolderListAsync();
    setFolderList(allFolders?.data);
  };

  useEffect(() => {
    getter();
  }, []);

  return (
    <Layout isSticky={false}>
      <MobileFolderButton />
      <LinkAddBar />
      <SearchBar />
      <FolderViewer />
      <button type="button" className="add-folder-button">
        폴더 추가+
      </button>
    </Layout>
  );
}

export default FolderPage;
