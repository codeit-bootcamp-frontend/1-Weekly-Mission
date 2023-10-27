import React, { useEffect, useState } from "react";
import "../../styles/landing.css";
import Search from "../../components/Search/Search";
import AddLink from "../../components/addLink/AddLink";
import { getFolderList, getTotalFolder } from "../../api/folderListApi";
import FolderList from "./FolderList";
import "./folderList.css";
import Cards from "./Cards";

const Header = () => {
  const [fullList, setFullList] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const getFolderLists = async () => {
    const temp = await getFolderList();
    setFullList(temp?.data);
  };

  const getTotalData = async () => {
    const temp = await getTotalFolder();
    setTotalData(temp?.data);
  };

  useEffect(() => {
    getFolderLists();
    getTotalData();
  }, []);

  function handleTotalClick() {
    setIsClicked(true);
  }

  return (
    <>
      <header style={{ padding: "6rem 0 9rem 0" }}>
        <AddLink />
      </header>

      <Search />

      <ul className="folder-list">
        <li style={{ listStyle: "none" }}>
          <button
            onClick={handleTotalClick}
            style={{ width: "6rem", height: "5rem" }}
          >
            전체
          </button>
        </li>
        {fullList && <FolderList fullData={fullList} />}
      </ul>
      {totalData && isClicked && <Cards fullData={totalData} />}
    </>
  );
};

export default Header;
