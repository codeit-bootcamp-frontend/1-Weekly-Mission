import Card from "../../components/card/Card";
import SearchImg from "../../assets/folder/img_search.png";
import { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getFolder, getLinks } from "../../api/api";
import {
  AddFloatingBtn,
  AddLinkInputContainer,
  CardContainer,
  ContentContainer,
  FolderBtnItemContainer,
  FolderContainer,
  FolderContentContainer,
  LinkHeaderContainer,
  LinkToolContainer,
  SearchInputContainer,
  Section,
  Wrapper,
} from "./FolderStyledComponents";
import FolderAddIcon from "../../assets/folder/img_folderAdd.svg";
import FolderAddWhIcon from "../../assets/folder/img_linkAddWh.svg";
import LinkAddIcon from "../../assets/shared/img_linkAdd.svg";
import ShareIcon from "../../assets/shared/img_shareIcon.svg";
import EditIcon from "../../assets/shared/img_editIcon.svg";
import DeleteIcon from "../../assets/shared/img_deleteIcon.svg";

const LinkToolArr = [
  {
    src: ShareIcon,
    title: "공유",
  },
  {
    src: EditIcon,
    title: "이름 변경",
  },
  {
    src: DeleteIcon,
    title: "삭제",
  },
];

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [folderData, setFolderData] = useState([]);
  const [isSelectedFolder, setIsSelectedFolder] = useState({
    id: 1,
    title: "전체",
  });

  const [isFolderLoading, isFolderError, getFolderAsync] = useAsync(getFolder);
  const [isLinkLoading, isLinkError, getLinksAsync] = useAsync(getLinks);

  const handleFolder = useCallback(async () => {
    const result = await getFolderAsync();
    if (!result) return;

    const { data } = result;

    setFolderData(data);
  }, [getFolderAsync]);

  useEffect(() => {
    handleFolder();
  }, [handleFolder]);

  const handleLinks = useCallback(async () => {
    const result = await getLinksAsync(isSelectedFolder.id);
    if (!result) return;

    const { data } = result;

    setCardData(data);
  }, [getLinksAsync, isSelectedFolder]);

  useEffect(() => {
    handleLinks();
  }, [handleLinks]);

  if (isFolderLoading && isLinkLoading) {
    return <div>화면을 불러오는 중입니다.</div>;
  }

  if (isFolderError && isLinkError) {
    return <div>문제가 발생했습니다.</div>;
  }

  return (
    <Wrapper>
      <Section>
        <ContentContainer>
          <AddLinkInputContainer>
            <img src={LinkAddIcon} alt="linkImg" id="linkImg" />
            <input
              className="inputContainer"
              placeholder="링크를 추가해 보세요"
            ></input>
            <button className="linkAddBtn">추가하기</button>
          </AddLinkInputContainer>
        </ContentContainer>
      </Section>

      <Section bg="#fff">
        <FolderContentContainer>
          <SearchInputContainer>
            <img src={SearchImg} alt="searchImg" id="searchImg" />
            <input
              className="inputContainer"
              placeholder="링크를 검색해보세요."
            ></input>
          </SearchInputContainer>

          {cardData.length > 0 ? (
            <>
              <FolderContainer>
                <div className="folderBtnContainer">
                  <FolderBtnItemContainer
                    isSelected={isSelectedFolder.id === 1}
                    onClick={() =>
                      setIsSelectedFolder({
                        id: 1,
                        title: "전체",
                      })
                    }
                  >
                    전체
                  </FolderBtnItemContainer>

                  {folderData?.map((e) => {
                    return (
                      <FolderBtnItemContainer
                        key={e.id}
                        isSelected={e.id === isSelectedFolder}
                        onClick={() =>
                          setIsSelectedFolder({
                            id: e.id,
                            title: e.name,
                          })
                        }
                      >
                        {e.name}
                      </FolderBtnItemContainer>
                    );
                  })}
                </div>

                <div className="folderAddBtnContainer">
                  <div className="folderAddTitle">폴더 추가</div>
                  <img
                    src={FolderAddIcon}
                    className="folderAddIcon"
                    alt="folderAddIcon"
                  />
                </div>
              </FolderContainer>

              <LinkHeaderContainer>
                <div className="linkTitle">{isSelectedFolder.title}</div>

                <LinkToolContainer display={isSelectedFolder.id === 1}>
                  {LinkToolArr.map((e, index) => {
                    return (
                      <div className="linkToolItemContainer" key={index}>
                        <img src={e.src} alt={e.title} />
                        <div className="linkToolTitle">{e.title}</div>
                      </div>
                    );
                  })}
                </LinkToolContainer>
              </LinkHeaderContainer>

              <CardContainer>
                {cardData?.map((e) => {
                  return <Card key={e.id} cardData={e} />;
                })}
              </CardContainer>
            </>
          ) : (
            <div className="noLinkContainer">저장된 링크가 없습니다</div>
          )}
        </FolderContentContainer>

        <AddFloatingBtn>
          <div className="floatingBtnTitle">폴더 추가</div>
          <img
            className="floatingBtnIcon"
            src={FolderAddWhIcon}
            alt="folderAddIcon"
          />
        </AddFloatingBtn>
      </Section>
    </Wrapper>
  );
};

export default Folder;
