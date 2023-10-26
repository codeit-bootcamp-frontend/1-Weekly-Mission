import CardList from "components/CardList";
import SearchBar from "components/SearchBar";
import "./SharedPage.css";
import FolderInfo from "components/FolderInfo";
import { useEffect, useState } from "react";
import { getFolder } from "api";

function SharedPage() {
  const [folder, setFolder] = useState({});

  const handleLoadFolder = async () => {
    const result = await getFolder();
    setFolder(result);
  };

  useEffect(() => {
    handleLoadFolder();
  }, []);

  return (
    <>
      <FolderInfo data={folder} />
      <main>
        <SearchBar />
        <CardList />
      </main>
    </>
  );
}

export default SharedPage;
