import { ButtonStar, CardImg, CardText, H3, WrapperCardImg, WrapperTime } from "@/components/Main/CardList/Card.styled";
import { CardProps } from "@/components/Main/CardList/CardList.type";
import Kebab from "@/components/Main/CardList/Kebab";
import TimeFlow from "@/components/Main/CardList/TimeFlow";
import { formatDate } from "@/utils/filterAndData";
import Image from "next/image";
import starImg from "@/public/star.svg";

export default function Card({ folder, url, imageSource, image_source, title, description, createdAt, created_at }: CardProps) {
  return (
    <>
      <WrapperCardImg>
        <CardImg src={imageSource || image_source || "/nofileimg.png"} alt="카드 이미지" />
      </WrapperCardImg>
      <CardText>
        <WrapperTime>
          <TimeFlow createdAt={createdAt ?? (created_at as string)} />
          {folder && <Kebab folder={folder} url={url} />}
        </WrapperTime>
        <H3>{title?.length > 40 ? title.slice(0, 40) + "..." : title}</H3>
        <p>{description?.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(createdAt ?? (created_at as string))}</p>
      </CardText>
      <ButtonStar>
        <Image src={starImg} alt="즐겨찾기에 추가하기" />
      </ButtonStar>
    </>
  );
}
