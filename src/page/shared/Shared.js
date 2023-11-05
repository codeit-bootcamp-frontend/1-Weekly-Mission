import Card from "../../components/card/Card";
import SearchImg from "../../assets/folder/img_search.png";
import { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getSampleFolder } from "../../api/api";
import {
  CardContainer,
  ContentContainer,
  FolderContentContainer,
  SharedWrapper,
} from "./SharedStyledComponents";
import { Section } from "../../components/common/commonStyledComponents";
import Input from "../../components/input/Input";

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [user, setUser] = useState();
  const [folderName, setFolderName] = useState("");

  const [isLoading, error, getSampleFolderAsync] = useAsync(getSampleFolder);

  const handleFolder = useCallback(async () => {
    const result = await getSampleFolderAsync();
    if (!result) return;

    const { folder } = result;

    setCardData(folder.links);
    setUser(folder.owner);
    setFolderName(folder.name);
  }, [getSampleFolderAsync]);

  useEffect(() => {
    handleFolder();
  }, [handleFolder]);

  if (isLoading) {
    return <div>화면을 불러오는 중입니다.</div>;
  }

  if (error) {
    return <div>문제가 발생했습니다.</div>;
  }

  return (
    <SharedWrapper>
      <Section>
        <ContentContainer>
          <img
            id="userProfile"
            src={user?.profileImageSource}
            alt="profileImg"
          />
          <div id="userName">{user?.name}</div>
          <div id="folderName">{folderName}</div>
        </ContentContainer>
      </Section>
      <Section $bg="#fff">
        <FolderContentContainer>
          <Input src={SearchImg} placeholder="링크를 검색해보세요" />

          <CardContainer>
            {cardData?.map((e) => {
              return <Card key={e.id} cardData={e} />;
            })}
          </CardContainer>
        </FolderContentContainer>
      </Section>
    </SharedWrapper>
  );
};

export default Folder;
