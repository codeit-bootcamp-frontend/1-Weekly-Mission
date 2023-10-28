import { useState, useEffect } from "react";
import { FolderInfo, SearchBar, CardSection } from "components";
import { getFolder } from "utils/api";
import * as Styled from "./StyledSharedPage";

const SharedPage = () => {
  const [folderData, setFolderData] = useState({
    folderName: "",
    ownerName: "",
    ownerImage: "",
    data: [],
  });

  const handleFolderInfo = async () => {
    try {
      const folderInfo = await getFolder();
      const {
        folder: { name, links, owner },
      } = folderInfo;
      setFolderData((prevData) => ({
        ...prevData,
        folderName: name,
        ownerName: owner["name"],
        ownerImage: owner["profileImageSource"],
        data: links,
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
      <Styled.Header>
        <FolderInfo data={folderData} />
      </Styled.Header>
      <Styled.Article>
        <SearchBar />
        <CardSection data={folderData.data} />
      </Styled.Article>
    </>
  );
};

export default SharedPage;
