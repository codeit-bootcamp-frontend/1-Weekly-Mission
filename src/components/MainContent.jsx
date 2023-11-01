import TagButtonContainer from "./StyledButtons/TagBtnContainer";
import { SearchLinkInput } from "./TextInputs/TextInputs";
import CardContainer from "./CardContainer/CardContainer";
import { useState, useEffect } from "react";
import requestData from "../services/api";

const defaultTagButton = {
  id: "",
  created_at: "",
  name: "전체",
  user_id: 1,
};

/**
 * @todo state (folderId, folderName을 받는)
 */
function MainContent() {
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

  /**
   * @todo 렌더시점 맞추기
   */
  useEffect(() => {
    getCardListResponse();
  }, [selectedTagId]);

  return (
    <section>
      <div>
        <SearchLinkInput />
        <TagButtonContainer
          folderTagBtnList={folderTagBtnList}
          handleOnClick={handleTagBtnClick}
          selectedTag={selectedTagId}
        />
      </div>
      <CardContainer
        showTitle
        cardListData={cardListData}
        cardTitleText={selectedTagText}
      />
    </section>
  );
}

export default MainContent;
