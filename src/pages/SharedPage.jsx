import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { getSample } from "../api";
import Gnb from "../component/Gnb";
import SearchBar from "../component/SearchBar";
import CardSection from "../component/CardSection";
import * as Styled from "../style/SharedPage";

function SharedPage() {
  const [folderData, setFolderData] = useState({
    id: 0,
    name: "",
    owner: "",
    links: "",
  });

  async function getFolderData() {
    let folderData = {};
    try {
      folderData = await getSample();
      const { id, name, owner, links } = folderData;
      setFolderData({
        id,
        name,
        ownerId: owner["id"],
        ownerName: owner["name"],
        ownerProfile: owner["profileImageSource"],
        links,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getFolderData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Shared</title>
      </Helmet>
      <Gnb />
      <Styled.FolderInfo>
        <Styled.ProfileBox>
          <Styled.ProfileImg
            src={folderData.ownerProfile}
            alt="프로필 이미지"
          />
        </Styled.ProfileBox>
        <Styled.OwnerName>{`@${folderData.ownerName}`}</Styled.OwnerName>
        <Styled.FolderName>{folderData.name}</Styled.FolderName>
      </Styled.FolderInfo>

      <Styled.Section>
        <SearchBar size="large" />
        <CardSection data={folderData.links} />
      </Styled.Section>
    </>
  );
}

export default SharedPage;
