import { getFolder } from "api";
import AddLinkForm from "components/AddLinkForm";
import CardList from "components/CardList";
import FolderList from "components/FolderList";
import SearchBar from "components/SearchBar";
import { useEffect, useState } from "react";
import { MainDiv } from "styles/MainDiv";

function FolderPage() {
  const [folder, setFolder] = useState([]);
  const [folderId, setFolderId] = useState("");

  const getFolderId = (folderId) => {
    setFolderId(folderId);
  };

  const handleLoadFolder = async (folderIdQuery) => {
    const { data } = await getFolder(folderIdQuery);
    setFolder(data);
  };

  useEffect(() => {
    handleLoadFolder(folderId);
  }, [folderId]);

  return (
    <>
      <AddLinkForm />
      <MainDiv>
        <SearchBar />
        <FolderList getFolderId={getFolderId} />
        <CardList data={folder} folderId={folderId} />
      </MainDiv>
    </>
  );
}

export default FolderPage;
