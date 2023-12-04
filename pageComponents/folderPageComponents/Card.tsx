import React, { useState } from "react";
import { getTimePassed } from "@/utils/formatTimePassed";
import Image from "next/image";
import Link from "next/link";
import s from "./Card.module.css";

const Card = ({ data, fullFolderData }: FolderCardProps) => {
  let {
    created_at,
    description,
    folder_id,
    id,
    image_source,
    title,
    updated_at,
    url,
  } = data;
  const timePassed = getTimePassed(url, description, created_at, image_source);
  const [isClicked, setIsClicked] = useState(false);
  const [isKebabDeleteClicked, setIsKebabDeleteClicked] = useState(false);
  const [isKebabAddClicked, setIsKebabAddClicked] = useState(false);

  function handleKebabClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsClicked(!isClicked);
  }

  function handleKebabDeleteClick(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsKebabDeleteClicked(!isKebabDeleteClicked);
  }

  function handleKebabAddClick(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsKebabAddClicked(!isKebabAddClicked);
  }

  const selectList = fullFolderData.map((list) => {
    return `${list.name}  ${list.link.count}개 링크`;
  });
  if (image_source === null) {
    image_source = "/images/blank-image.png";
  }
  return (
    <li className={s.li}>
      <Link href={url} target="_blank" rel="noreferrer" className={s.link}>
        <div className={s.imgContainer}>
          <Image
            src={image_source}
            alt="card 이미지"
            className={s.cardImg}
            fill
            objectFit="cover"
          />
        </div>

        <button className={s.starButton}>
          <Image
            src="images/star.svg"
            alt="즐겨찾기 이미지"
            width={30}
            height={30}
          />
        </button>
        <div className={s.textArea}>
          <span>{timePassed} ago</span>
          <button className={s.kebabButton} onClick={handleKebabClick}>
            <Image
              src="images/kebab.svg"
              alt="케밥 버튼 이미지"
              width={25}
              height={25}
              className={s.kebabImg}
            />
          </button>
          {isClicked ? (
            <div className="kebab">
              <button className="kebab-delete" onClick={handleKebabDeleteClick}>
                삭제하기
              </button>
              <button className="kebab-add" onClick={handleKebabAddClick}>
                폴더에 추가
              </button>
            </div>
          ) : null}
          <span>{description}</span>
          <span>{created_at.substring(0, 10)}</span>
        </div>
      </Link>
      {isKebabDeleteClicked ? (
        <div className="modal-Background">
          <div className="modal">
            <b>링크 삭제</b>
            <div className={s.closeContainer}>
              <Image
                src="images/modalClose.svg"
                className={s.closeImg}
                alt="닫기 버튼 이미지"
                width={30}
                height={30}
                onClick={handleKebabDeleteClick}
              />
            </div>

            <div>{url}</div>
            <button className={s.deleteButton}>삭제하기</button>
          </div>
        </div>
      ) : null}
      {isKebabAddClicked ? (
        <div className="modal-background">
          <div className="modal">
            <b>폴더에 추가</b>
            <p>{url}</p>
            <div className={s.closeContainer}>
              <Image
                src="images/modalClose.svg"
                className={s.closeImg2}
                alt="닫기 버튼 이미지"
                width={30}
                height={30}
                onClick={handleKebabAddClick}
              />
            </div>
            <div>
              {selectList.map((item) => (
                <div className="Modal-list-input" key={item}>
                  <label htmlFor="item">{item}</label>
                  <input type="checkbox" name={item} id={item} />
                </div>
              ))}
            </div>
            <button className={s.addButton}>추가하기</button>
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default Card;
