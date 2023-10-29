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

function MainContent() {
  const [cardListData, setCardListData] = useState([]); // cardContainer에서 이용
  const [folderTagBtnList, setfolderTagBtnList] = useState([defaultTagButton]); // TagBtnContainer에서 이용
  const [selectedTag, setSelectedTag] = useState("tag-");
  const [selectedTagText, setSelectedTagText] = useState("전체");

  // card content response 처리
  async function getCardListResponse() {
    const folderId = selectedTag.substring(4);
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

  useEffect(() => getFolderTagBtnList, []);
  useEffect(() => getCardListResponse, [selectedTag]);

  return (
    <section>
      <div>
        <SearchLinkInput />
        <TagButtonContainer
          folderTagBtnList={folderTagBtnList}
          getSelectedTag={setSelectedTag}
          getSelectedTagText={setSelectedTagText}
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
