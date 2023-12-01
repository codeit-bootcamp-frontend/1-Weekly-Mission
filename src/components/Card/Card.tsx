import { ReactNode, useContext, useState } from "react";
import { formatDate, prettyFormatTimeDiff } from "../../util/dateUtil";
import kebabImg from "../../assets/img/kebab.png";
import noImg from "../../assets/img/no-image.svg";
import style from "./Card.module.css";
import clsx from "clsx";
import Kebab from "../Kebab/Kebab";
import Modal from "../Modal/Modal";
import AddLinkModal, { Folder } from "../Modal/AddLinkModal";
import { FolderPageContext } from "@/pages/folder";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  url: string;
  imageSource: string;
  createdAt: string;
}
function Card({ title, description, url, imageSource, createdAt }: CardProps) {
  const [hover, setHover] = useState(false);
  const [isShowKebab, setIsShowKebab] = useState(false);
  const [modal, setModal] = useState<ReactNode>(null);
  const folders: Folder[] | null = useContext(FolderPageContext);
  console.log(folders);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  const handleKebabClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    isShowKebab ? setIsShowKebab(false) : setIsShowKebab(true);
  };
  const handleKebabBlur = () => {
    setIsShowKebab(false);
  };
  const handleExitClick = () => {
    setModal(null);
  };
  const handleKebabDeleteClick = () => {
    setModal(
      <Modal title="링크 삭제" data={url} onExitClick={handleExitClick} />
    );
  };
  const handleKebabAddClick = () => {
    setModal(
      <AddLinkModal url={url} folders={folders} onExitClick={handleExitClick} />
    );
  };

  return (
    <div
      className={clsx(style.container, { [style.hoverBgColor]: hover })}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a className={style.card} href={url}>
        <div
          className={clsx(style.image, { [style.hoverImage]: hover })}
          style={{ backgroundImage: `url(${imageSource || noImg})` }}
        ></div>
        <div className={style.explanation}>
          <div className={style.header}>
            <div>{prettyFormatTimeDiff(new Date(createdAt))}</div>
            <button
              className={style.kebabContainer}
              onClick={handleKebabClick}
              onBlur={handleKebabBlur}
            >
              <Image src={kebabImg} alt="kebab image" />
              {isShowKebab && (
                <div className={style.kebab}>
                  <Kebab>
                    <li className="li" onClick={handleKebabDeleteClick}>
                      삭제하기
                    </li>
                    <li className="li" onClick={handleKebabAddClick}>
                      폴더에 추가
                    </li>
                  </Kebab>
                </div>
              )}
            </button>
          </div>
          <div className={style.text}>
            <div>{title}</div>
            <div>{description}</div>
          </div>

          <div className={style.footer}>{formatDate(new Date(createdAt))}</div>
        </div>
      </a>
      {modal}
    </div>
  );
}

export default Card;
