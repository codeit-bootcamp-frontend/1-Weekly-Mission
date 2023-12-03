import React, { useState } from "react";
import { getTimePassed } from "@/utils/formatTimePassed";
import Image from "next/image";
import Link from "next/link";

interface SingleDataOfTotalData {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}

interface Link {
  count: number;
}

interface SingleData {
  created_at: string;
  id: number;
  link: Link;
  name: string;
  user_id: number;
}

interface Props {
  data: SingleDataOfTotalData;
  fullFolderData: SingleData[];
}

const Card = ({ data, fullFolderData }: Props) => {
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
    <li
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100rem",
        height: "auto",
      }}
    >
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "1rem",
          position: "relative",
        }}
      >
        <div
          style={{ position: "relative", maxWidth: "70rem", height: "30rem" }}
        >
          <Image
            src={image_source}
            alt="card 이미지"
            style={{
              boxShadow: "0px 5px 25px 0px rgba(0, 0, 0, 0.08)",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
            fill
            objectFit="cover"
          />
        </div>

        <button
          style={{ position: "absolute", right: "1.5rem", top: "1.5rem" }}
        >
          <Image
            src="images/star.svg"
            alt="즐겨찾기 이미지"
            width={30}
            height={30}
          />
        </button>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            padding: "1rem",
            position: "relative",
          }}
        >
          <span>{timePassed} ago</span>
          <button
            style={{
              position: "absolute",
              right: "2rem",
              top: "1.1rem",
              zIndex: "999",
            }}
            onClick={handleKebabClick}
          >
            <Image
              src="images/kebab.svg"
              alt="케밥 버튼 이미지"
              width={25}
              height={25}
              style={{ zIndex: "999" }}
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
            <div style={{ position: "relative" }}>
              <Image
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-6rem",
                }}
                alt="닫기 버튼 이미지"
                width={30}
                height={30}
                onClick={handleKebabDeleteClick}
              />
            </div>

            <div>{url}</div>
            <button
              style={{
                background: "var(--linkbrary-red, #FF5B56)",
                borderRadius: "8px",
                width: "28rem",
                height: "2rem",
                padding: "1.6rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              삭제하기
            </button>
          </div>
        </div>
      ) : null}
      {isKebabAddClicked ? (
        <div className="modal-background">
          <div className="modal">
            <b>폴더에 추가</b>
            <p>{url}</p>
            <div style={{ position: "relative" }}>
              <Image
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-9rem",
                }}
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
            <button
              style={{
                background:
                  "var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%))",
                borderRadius: "8px",
                width: "28rem",
                height: "2rem",
                padding: "1.6rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              추가하기
            </button>
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default Card;
