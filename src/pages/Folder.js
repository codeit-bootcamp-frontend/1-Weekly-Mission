import { useEffect, useState, useCallback } from "react";
import getData from "../utils/api";
import SearchBar from "../components/SearchBar";
import LinkAdd from "../components/LinkAdd";
import Cards from "../components/Cards";

const INIT_FOLDER = {
  name: "전체",
  id: "",
};

const Folder = () => {
  const [userFolder, setUserFolder] = useState(null);
  const [links, setLinks] = useState();
  const [currentFolder, setCurrentFolder] = useState(INIT_FOLDER);

  const getFolderData = useCallback(async () => {
    const { data } = await getData("users/1/folders");
    const linkData = await getData(
      "users/1/links?folderId=" + currentFolder.id
    );
    setUserFolder(data);
    setLinks(linkData.data);
  }, [currentFolder.id]);

  const handleCurrentFolder = (id) => {
    setCurrentFolder(id);
  };

  useEffect(() => {
    getFolderData();
  }, [getFolderData]);

  return (
    <div>
      <LinkAdd />
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Folder;
