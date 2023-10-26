import CardList from "components/CardList";
import SearchBar from "components/SearchBar";
import FolderInfo from "components/FolderInfo";
import { useEffect, useState } from "react";
import { getFolder } from "api";
import * as S from "./SharedPage.style";

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
      <S.Main>
        <SearchBar />
        <CardList />
      </S.Main>
    </>
  );
}

export default SharedPage;
