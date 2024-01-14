import { ButtonStar, CardImg, CardText, H3, WrapperCardImg, WrapperTime } from "@/components/Main/CardList/Card.styled";
import { CardProps } from "@/components/Main/CardList/CardList.type";
import Kebab from "@/components/Main/CardList/Kebab";
import TimeFlow from "@/components/Main/CardList/TimeFlow";
import starImg from "@/public/star.svg";
import { formatDate } from "@/utils/filterAndData";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({ id, url, imageSource, image_source, title, description, createdAt, created_at }: CardProps) {
  const router = useRouter();
  const isFolderPage = router.pathname === "/folder";

  return (
    <>
      <WrapperCardImg>
        <CardImg src={imageSource || image_source || "/nofileimg.png"} alt="카드 이미지" />
      </WrapperCardImg>
      <CardText>
        <WrapperTime>
          <TimeFlow createdAt={createdAt ?? (created_at as string)} />
          {isFolderPage && <Kebab id={id} url={url} />}
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
