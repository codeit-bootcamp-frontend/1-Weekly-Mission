import React, { useState } from "react";
import { getTimePassed } from "@/utils/formatTimePassed";
import Image from "next/image";
import Link from "next/link";
import s from "./Card.module.css";
import { MouseEvent } from "react";

const Card = ({ data }: FolderCardProps) => {
  const {
    created_at,
    description,
    folder_id,
    id,
    image_source,
    title,
    updated_at,
    url,
  } = data;
  const imageSource = image_source ?? "/images/blank-image.png";
  const timePassed = getTimePassed(url, description, created_at, imageSource);
  const [isKebabClicked, setIsKebabClicked] = useState(false);
  const [isKebabDeleteClicked, setIsKebabDeleteClicked] = useState(false);
  const [isKebabAddClicked, setIsKebabAddClicked] = useState(false);

  function handleKebabClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsKebabClicked(!isKebabClicked);
  }

  function handleKebabDeleteClick(
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsKebabDeleteClicked(!isKebabDeleteClicked);
  }

  function handleKebabAddClick(
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsKebabAddClicked(!isKebabAddClicked);
  }

  return (
    <li className={s.li}>
      <Link href={url} target="_blank" rel="noreferrer" className={s.link}>
        <div className={s.imgContainer}>
          <Image
            src={imageSource}
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
          {isKebabClicked ? (
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
          <span>{created_at.slice(0, 10)}</span>
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
            <button className={s.addButton}>추가하기</button>
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default Card;
