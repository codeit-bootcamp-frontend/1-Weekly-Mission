import FolderInfo from "components/FolderInfo";
import SearchBar from "components/SearchBar";
import SampleCardList from "components/SampleCardList";
import { useEffect, useState } from "react";
import fetch from "api";
import { MainDiv } from "styles/MainDiv";

function SharedPage() {
  const [folder, setFolder] = useState({});

  const handleLoadFolder = async () => {
    const result = await fetch({ url: "/sample/folder" });
    setFolder(result);
  };

  useEffect(() => {
    handleLoadFolder();
  }, []);

  return (
    <>
      <FolderInfo data={folder} />
      <MainDiv>
        <SearchBar />
        <SampleCardList />
      </MainDiv>
    </>
  );
}

export default SharedPage;
