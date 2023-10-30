import { useEffect, useState, useCallback } from "react";
import getData from "../utils/api";
import "./Folder.css";
import SearchBar from "../components/SearchBar";
import LinkAdd from "../components/LinkAdd";
import Cards from "../components/Cards";
import Folders from "../components/Folders";
import Option from "../components/Option";

const INIT_FOLDER = {
  name: "전체",
  id: "",
};

const Folder = () => {
  const [userFolder, setUserFolder] = useState(null);
  const [links, setLinks] = useState();
  const [currentFolder, setCurrentFolder] = useState(INIT_FOLDER);

  const getFolderData = useCallback(async () => {
    const { data } = await getData("/users/1/folders");
    const linkData = await getData(
      `/users/1/links?folderId=${currentFolder.id}`
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
    <div className="folder">
      <LinkAdd />
      <div>
        <SearchBar />
        {userFolder ? (
          <div>
            <Folders
              userFolder={userFolder}
              onCurrentFolder={handleCurrentFolder}
            />
            <Option currentFolder={currentFolder} />
            {links.length === 0 ? (
              <div className="no-data-inform">저장된 링크가 없습니다</div>
            ) : (
              <Cards folderInfo={{ links: links }} />
            )}
          </div>
        ) : (
          <div className="no-data-inform">저장된 폴더가 없습니다</div>
        )}
      </div>
    </div>
  );
};

export default Folder;
