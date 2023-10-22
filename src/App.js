import "./assets/css/App.css";
import Gnb from "./component/Gnb";
import SearchBar from "./component/SearchBar";
import Footer from "./component/Footer";
import { getFolder } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [folderData, setFolderData] = useState([]);

  async function getFolderData() {
    const { id, name, owner, links } = await getFolder();
    setFolderData([id, name, owner, links]);
  }

  useEffect(() => {
    getFolderData();
  }, []);

  const folderId = folderData[0];

  return (
    <div className="body">
      <header className="header">
        <Gnb />
      </header>

      <div className="folderInfo">
        <div>프로필사진</div>
        <div>프로필이름</div>
        <div>폴더이름</div>
      </div>

      <section className="section">
        <SearchBar size="large" />
        <div>
          <p>여기에 컴포넌트 넣으세요</p>
        </div>
      </section>

      <Footer size="large" />
    </div>
  );
}

export default App;
