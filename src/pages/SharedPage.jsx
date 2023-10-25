import { useState, useEffect } from "react";
import { FolderInfo, SearchBar, CardSection } from "components";
import { getFolder } from "utils/api";
import "./SharedPage.css";

const SharedPage = () => {
  const [folderData, setFolderData] = useState({
    folderName: "",
    ownerName: "",
    ownerImage: "",
    datas: [],
  });

  const handleFolderInfo = async () => {
    try {
      let folderInfo = await getFolder();
      const {
        folder: { name, links, owner },
      } = folderInfo;
      setFolderData((prevData) => ({
        ...prevData,
        folderName: name,
        ownerName: owner["name"],
        ownerImage: owner["profileImageSource"],
        datas: links,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFolderInfo();
  }, []);

  return (
    <>
      <header>
        <FolderInfo data={folderData} />
      </header>
      <article>
        <SearchBar />
        <CardSection data={folderData.datas} />
      </article>
    </>
  );
};

export default SharedPage;
