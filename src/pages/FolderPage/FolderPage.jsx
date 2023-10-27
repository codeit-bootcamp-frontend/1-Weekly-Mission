import { getFolder } from "api";
import AddLinkForm from "components/AddLinkForm";
import CardList from "components/CardList";
import FolderList from "components/FolderList";
import SearchBar from "components/SearchBar";
import { useEffect, useState } from "react";
import { MainDiv } from "styles/MainDiv";

function FolderPage() {
  const [folder, setFolder] = useState([]);
  // const [folderId, setFolderId] = useState("");

  const handleLoadFolder = async (folderIdQuery) => {
    const { data } = await getFolder(folderIdQuery);
    setFolder(data);
  };

  useEffect(() => {
    handleLoadFolder();
  }, []);

  return (
    <>
      <AddLinkForm />
      <MainDiv>
        <SearchBar />
        <FolderList />
        <CardList data={folder} />
      </MainDiv>
    </>
  );
}

export default FolderPage;
