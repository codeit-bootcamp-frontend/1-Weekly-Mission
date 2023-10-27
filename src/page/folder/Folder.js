import Card from "../../components/card/Card";
import SearchImg from "../../assets/folder/img_search.png";
import { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getFolder } from "../../api/api";
import {
  CardContainer,
  ContentContainer,
  FolderContentContainer,
  SearchInputContainer,
  Section,
  Wrapper,
} from "./FolderStyledComponents";

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [user, setUser] = useState();
  const [folderName, setFolderName] = useState("");
  const [isLoading, error, getFolderAsync] = useAsync(getFolder);

  const handleFolder = useCallback(async () => {
    const result = await getFolderAsync();
    if (!result) return;

    const { folder } = result;

    setCardData(folder.links);
    setUser(folder.owner);
    setFolderName(folder.name);
  }, [getFolderAsync]);

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
    <Wrapper>
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
      <Section bg="#fff">
        <FolderContentContainer>
          <SearchInputContainer>
            <img src={SearchImg} alt="searchImg" id="searchImg" />
            <input
              id="searchContainer"
              placeholder="링크를 검색해보세요."
            ></input>
          </SearchInputContainer>
          <CardContainer>
            {cardData?.map((e) => {
              return <Card key={e.id} cardData={e} />;
            })}
          </CardContainer>
        </FolderContentContainer>
      </Section>
    </Wrapper>
  );
};

export default Folder;
