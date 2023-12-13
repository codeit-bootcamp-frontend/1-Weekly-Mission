import React from "react";
import { getTimePassed } from "@/utils/formatTimePassed";
import Image from "next/image";
import Link from "next/link";
import s from "./Card.module.css";

const Card = ({ data }: SharedPageCardProps) => {
  const {
    url,
    description,
    created_at: createdAt,
    image_source: imageSource,
  } = data;
  const timePassed = getTimePassed(url, description, createdAt, imageSource);
  const image_Source = imageSource ?? "/images/blank-image.png";

  return (
    <li className={s.li}>
      <Link href={url} target="_blank" rel="noreferrer" className={s.link}>
        <div className={s.imgContainer}>
          <Image
            src={image_Source}
            alt="card 이미지"
            className={s.cardImg}
            fill
            objectFit="cover"
          />
        </div>

        <button className={s.starButton}>
          <Image
            src="/images/star.svg"
            alt="즐겨찾기 이미지"
            width={30}
            height={30}
          />
        </button>
        <div className={s.textArea}>
          <span>{timePassed} ago</span>
          <button className={s.kebabButton}>
            <Image
              src="/images/kebab.svg"
              alt="케밥 버튼 이미지"
              width={25}
              height={25}
              className={s.kebabImg}
            />
          </button>
          <span>{description}</span>
          <span>{createdAt.slice(0, 10)}</span>
        </div>
      </Link>
    </li>
  );
};

export default Card;
