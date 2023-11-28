import "./CardContainer.css";
import Card from "./Card";
import ShareImg from "../../assets/image/share.svg";
import PenImg from "../../assets/image/pen.svg";
import TrashcanImg from "../../assets/image/Group 36.svg";
import ShareFolder from "../../modals/contents/ShareFolder";
import EditFolderName from "../../modals/contents/EditFolderName";
import DeleteFolder from "../../modals/contents/DeleteFolder";
import getFolderTagListData from "../../utils/getFolderTagListData";
import { useState } from "react";
import { ICardContainerProps } from "./types/Card.types";
import { IFolderTagData } from "../../utils/types/common.types";

function CardTitleText({ text }: { text: string }) {
  const [isShareOpen, setShareOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setDeleteOpen] = useState<boolean>(false);

  const changeShareOpenState = (openState: boolean) => setShareOpen(openState);

  const changeEditOpenState = (openState: boolean) => setEditOpen(openState);

  const changeDeleteOpenState = (openState: boolean) =>
    setDeleteOpen(openState);

  const selectedTagData: IFolderTagData[] = getFolderTagListData(true);
  return (
    <div className="card-title_text">
      <h2 className="tagName_text">{text}</h2>
      {text !== "전체" && (
        <div className="card-title_icon_container">
          <div className="card-title_icon" onClick={() => setShareOpen(true)}>
            <h5 className="card-title_icon_text">공유</h5>
            <img src={ShareImg} alt="share icon" />
          </div>
          <div className="card-title_icon" onClick={() => setEditOpen(true)}>
            <h5 className="card-title_icon_text">이름 변경</h5>
            <img src={PenImg} alt="pen icon" />
          </div>
          <div className="card-title_icon" onClick={() => setDeleteOpen(true)}>
            <h5 className="card-title_icon_text">삭제</h5>
            <img src={TrashcanImg} alt="trash can icon" />
          </div>

          <ShareFolder
            isOpen={isShareOpen}
            changeOpenState={changeShareOpenState}
            folderTagName={selectedTagData[0]?.name}
          />
          <EditFolderName
            isOpen={isEditOpen}
            changeOpenState={changeEditOpenState}
            folderTagName={selectedTagData[0]?.name}
          />
          <DeleteFolder
            isOpen={isDeleteOpen}
            changeOpenState={changeDeleteOpenState}
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
}: ICardContainerProps) {
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
