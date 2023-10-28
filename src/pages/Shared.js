import { useEffect, useState } from "react";
import getData from "../utils/api";
import Main from "../components/Main";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

const Shared = () => {
  const [folderInfo, setfolderInfo] = useState({});

  const handleLoad = async () => {
    const {
      folder: { links, name: title },
    } = await getData("/sample/folder");
    setfolderInfo({ links, title });
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <>
      <Main folderInfo={folderInfo} />
      <SearchBar />
      <Cards folderInfo={folderInfo} />
    </>
  );
};

export default Shared;
