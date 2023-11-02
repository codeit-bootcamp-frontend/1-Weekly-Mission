import TagBtnContainer from "./StyledButtons/TagBtn/TagBtnContainer";
import { SearchLinkInput } from "./TextInputs/searchLinkInput";
import CardContainer from "./CardContainer/CardContainer";
import { useState, useEffect } from "react";
import requestData from "../services/api";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const NoCardDataText = styled.h5`
  display: flex;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  font-weight: 400;
`;

const defaultTagButton = {
  id: "",
  created_at: "",
  name: "전체",
  user_id: 1,
};

function MainContent() {
  const Pagelocation = useLocation().pathname;
  const PAGE_TYPE_FOLDER = Pagelocation === "/folder";

  const [cardListData, setCardListData] = useState([]); // cardContainer에서 이용
  const [folderTagBtnList, setfolderTagBtnList] = useState([defaultTagButton]); // TagBtnContainer에서 이용
  const [selectedTagId, setSelectedTagId] = useState(defaultTagButton.id);
  const [selectedTagText, setSelectedTagText] = useState(defaultTagButton.name);

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

  function handleTagBtnClick(id, name) {
    setSelectedTagId(id);
    setSelectedTagText(name);
  }

  useEffect(() => getFolderTagBtnList, []);
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
    </section>
  );
}

export default MainContent;
