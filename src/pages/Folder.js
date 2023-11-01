import Nav from "../components/Nav";
import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import SortingFolder from "../components/SortingFolder";
import Option from "../components/Option";
import CardList from "../components/CardList";
import { useState, useEffect, useCallback } from "react";
import getData from "../services/api";
import { useLocation } from "react-router-dom";

const ENTIRE_FOLDER = {
  id: 0,
  name: "전체",
};

const Folder = () => {
  const [folderList, setFolderList] = useState([]);
  const [folderLink, setFolderLink] = useState([]);
  const [folderName, setFolderName] = useState("전체");
  const location = useLocation();
  const path = location.pathname;

  const getFolderList = useCallback(async () => {
    const folderList = await getData("users/1/folders");
    setFolderList([ENTIRE_FOLDER, ...folderList.data]);
  }, [getData]);

  const getFolderLink = useCallback(
    async (id = "") => {
      const idx = id === 0 ? "" : id;
      const folderLink = await getData(`users/1/links?folderId=${idx}`);
      setFolderLink(folderLink.data);
    },
    [getData]
  );

  const handleClick = ({ name, id }) => {
    setFolderName(name);
    getFolderLink(id);
  };

  useEffect(() => {
    getFolderList();
  }, [getFolderList]);
  //폴더 목록이 바뀔 때마다 재렌더링 되어야 한다고 생각해서 []배열 안에 [getFolderList]를 넣었더니
  //렌더링이 끊임없이 되었다,,, 이거 아닌가,,?

  useEffect(() => {
    getFolderLink();
  }, [getFolderLink]);

  return (
    <div>
      <Nav />
      <AddLink />
      <SearchBar />
      <div className="folder-wrapper">
        {folderList && folderList.length > 0 ? (
          <>
            {folderList.map((folder) => (
              <button
                onClick={() =>
                  handleClick({
                    name: folder.name,
                    id: folder.id,
                  })
                }
                className="folder-button"
                key={folder.id}
              >
                {folder.name}
              </button>
            ))}
          </>
        ) : (
          <p>저장된 링크가 없습니다</p>
        )}
      </div>
      <div className="folder-title">{folderName}</div>
      <CardList cards={folderLink} path={path}></CardList>
      {/* <SortingFolder folderList={folderList.name} /> */}
      <Option />
      <Footer />
    </div>
  );
};

export default Folder;
