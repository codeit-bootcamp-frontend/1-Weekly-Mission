import "./CardContainer.css";
import Card from "./Card";
import ShareImg from "../../assets/image/share.svg";
import PenImg from "../../assets/image/pen.svg";
import TrashcanImg from "../../assets/image/Group 36.svg";
import ShareFolder from "../../modals/contents/ShareFolder";
import EditFolderName from "../../modals/contents/EditFolderName";
import DeleteFolder from "../../modals/contents/DeleteFolder";
import getFolderTagListData from "../../utils/getFolderTagListData";
import { SetStateAction, useEffect, useState } from "react";
import { CardContainerProps, CardData } from "./types/Card.types";

const SHARE_ICON_TEXT = "공유";
const EDIT_NAME_ICON_TEXT = "이름 변경";
const DELETE_ICON_TEXT = "삭제";

function CardTitleText({ text }: { text: string }) {
  const [isOpen, setOpen] = useState("");

  type selectedIconType = "공유" | "이름 변경" | "삭제";

  const handleClick = (selectedIcon: selectedIconType) => {
    setOpen(selectedIcon);
  };
  const changeOpenState = (openState: string) => setOpen(openState);
  const selectedTagData = getFolderTagListData(true);
  return (
    <div className="card-title_text">
      <h2 className="tagName_text">{text}</h2>
      {text !== "전체" && (
        <div className="card-title_icon_container">
          <div
            className="card-title_icon"
            onClick={() => handleClick(SHARE_ICON_TEXT)}
          >
            <h5 className="card-title_icon_text">공유</h5>
            <img src={ShareImg} alt="share icon" />
          </div>
          <div
            className="card-title_icon"
            onClick={() => handleClick(EDIT_NAME_ICON_TEXT)}
          >
            <h5 className="card-title_icon_text">이름 변경</h5>
            <img src={PenImg} alt="pen icon" />
          </div>
          <div
            className="card-title_icon"
            onClick={() => handleClick(DELETE_ICON_TEXT)}
          >
            <h5 className="card-title_icon_text">삭제</h5>
            <img src={TrashcanImg} alt="trash can icon" />
          </div>

          <ShareFolder
            isOpen={isOpen === SHARE_ICON_TEXT}
            changeOpenState={changeOpenState}
            folderTagName={selectedTagData[0]?.name}
          />
          <EditFolderName
            isOpen={isOpen === EDIT_NAME_ICON_TEXT}
            changeOpenState={changeOpenState}
            folderTagName={selectedTagData[0]?.name}
          />
          <DeleteFolder
            isOpen={isOpen === DELETE_ICON_TEXT}
            changeOpenState={changeOpenState}
            folderTagName={selectedTagData[0]?.name}
          />
        </div>
      )}
    </div>
  );
}
function CardContainer({
  showTitle,
  cardListData,
  cardTitleText,
}: CardContainerProps) {
  return (
    <>
      {showTitle && <CardTitleText text={cardTitleText} />}
      <section className="cards">
        {cardListData.map((cardData) => (
          <Card cardData={cardData} />
        ))}
      </section>
    </>
  );
}

export default CardContainer;
