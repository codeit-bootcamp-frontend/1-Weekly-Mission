import Nav from "../components/Nav";
import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import SortingFolder from "../components/SortingFolder";
import Option from "../components/Option";
import CardList from "../components/CardList";
import { useState, useEffect } from "react";
import getData from "../services/api";

const Folder = () => {
  const [folderList, setFolderList] = useState([]);

  const getFolderList = async () => {
    const folderList = await getData("users/1/folders");
    setFolderList(folderList.data);
  };

  useEffect(() => {
    getFolderList();
  }, []);

  return (
    <div>
      <Nav />
      <AddLink />
      <SearchBar />
      <div className="folder-wrapper">
        {folderList && folderList.length > 0 ? (
          folderList.map((folder) => (
            <button className="folder-button" key={folder.id}>
              {folder.name}
            </button>
          ))
        ) : (
          <p>저장된 링크가 없습니다</p>
        )}
      </div>
      {/* <SortingFolder folderList={folderList.name} /> */}
      <Option />
      <Footer />
    </div>
  );
};

export default Folder;
