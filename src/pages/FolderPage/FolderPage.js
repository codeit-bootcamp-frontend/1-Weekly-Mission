import Layout from "commons/components/Layout/Layout";
import { SearchBar } from "commons/components/index";
import { LinkAddBar } from "./components/index";
import "./FolderPage.css";
import FolderViewer from "./components/FolderViewer/FolderViewer";

//모바일 환경에서 보이는 버튼
function MobileFolderButton() {
  return <button className="mobild-float-button">폴더 추가+</button>;
}

function FolderPage() {
  return (
    <Layout isSticky={false}>
      <MobileFolderButton />
      <LinkAddBar />
      <SearchBar />
      <FolderViewer />
    </Layout>
  );
}

export default FolderPage;
