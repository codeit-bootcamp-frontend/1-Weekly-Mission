import TagBtnContainer from "./Buttons/TagBtn/TagBtnContainer";
import { SearchLinkInput } from "./TextInputs/SearchLinkInput/searchLinkInput";
import CardContainer from "./CardContainer/CardContainer";
import { useState, useEffect } from "react";
import requestData from "../services/api";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import AddLinkToFolder from "../modals/contents/AddLinkToFolder";
import { ICardData } from "./CardContainer/types/Card.types";
import { IFolderTagData } from "../utils/types/common.types";

const NoCardDataText = styled.h5`
  display: flex;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  font-weight: 400;
`;

const defaultTagButton: IFolderTagData = {
  id: "",
  created_at: "",
  name: "전체",
  user_id: 1,
  link: {
    count: 10,
  },
};

function MainContent() {
  const Pagelocation = useLocation().pathname;
  const PAGE_TYPE_FOLDER = Pagelocation === "/folder";

  const [cardListData, setCardListData] = useState<ICardData[]>([]); // cardContainer에서 이용
  const [folderTagBtnList, setfolderTagBtnList] = useState<IFolderTagData[]>([
    defaultTagButton,
  ]); // TagBtnContainer에서 이용
  const [selectedTagId, setSelectedTagId] = useState<string | number>(
    defaultTagButton.id
  );
  const [selectedTagText, setSelectedTagText] = useState<string>(
    defaultTagButton.name
  );

  // card content response 처리
  async function getCardListResponse() {
    const folderId = selectedTagId;
    const { data: cardListDataResponse } = await requestData(
      null,
      `users/1/links${folderId ? "?folderId=" + folderId : ""}`,
      "GET"
    );
    setCardListData(cardListDataResponse);
  }

  // folderpage response 처리
  async function getFolderTagBtnList() {
    // get folder's name tag list response
    const { data: tagBtnResponse } = await requestData(
      null,
      "users/1/folders",
      "GET"
    );
    setfolderTagBtnList((defaultTagBtn) => [
      ...defaultTagBtn,
      ...tagBtnResponse,
    ]);
  }

  function handleTagBtnClick(id: string | number, name: string): void {
    setSelectedTagId(id);
    setSelectedTagText(name);
  }

  useEffect(() => {
    getFolderTagBtnList();
  }, []);
  useEffect(() => {
    getCardListResponse();
  }, [selectedTagId]);

  return (
    <section>
      <div>
        <SearchLinkInput />
        {PAGE_TYPE_FOLDER && (
          <TagBtnContainer
            folderTagBtnList={folderTagBtnList}
            handleOnClick={handleTagBtnClick}
            selectedTag={selectedTagId}
          />
        )}
      </div>
      <CardContainer
        showTitle={PAGE_TYPE_FOLDER}
        cardListData={cardListData}
        cardTitleText={selectedTagText}
      />
      {cardListData.length === 0 && (
        <NoCardDataText>저장된 링크가 없습니다</NoCardDataText>
      )}
      <AddLinkToFolder TagListData={folderTagBtnList}></AddLinkToFolder>
    </section>
  );
}

export default MainContent;
