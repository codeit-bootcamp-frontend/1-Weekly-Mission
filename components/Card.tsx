import React from "react";
import { getTimePassed } from "@/utils/formatTimePassed";
import Image from "next/image";
import Link from "next/link";
interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

const Card = ({ data }: { data: Link }) => {
  const { url, description, createdAt, imageSource } = data;
  const timePassed = getTimePassed(url, description, createdAt, imageSource);

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
            src={imageSource}
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
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "1.5rem",
            zIndex: "999",
          }}
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
            style={{ position: "absolute", right: "2rem", top: "1.1rem" }}
          >
            <Image
              src="images/kebab.svg"
              alt="케밥 버튼 이미지"
              width={25}
              height={25}
              style={{ zIndex: "999" }}
            />
          </button>
          <span>{description}</span>
          <span>{createdAt.substring(0, 10)}</span>
        </div>
      </Link>
    </li>
  );
};

export default Card;
