import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { timeForToday } from "@/lib/utils/moment";
import { DropDown } from "@/components";
import { LinksData, FoldersData } from "@/lib/types/data";
import noImageImg from "@/public/noImage.svg";
import chosenStarImg from "@/public/chosenStar.svg";
import starImg from "@/public/star.svg";
import * as Styled from "./Card.styled";

interface Props {
  data: LinksData;
  folderData: FoldersData[];
}

const Card = ({ data, folderData }: Props) => {
  const CREATED_AT = data.created_at
    ? (data.created_at as string)
    : (data.createdAt as string);
  const IMG_SRC = data.image_source ? data.image_source : data.imageSource;
  const URL = data.url as string;
  const DESCRIPTION = data.description;
  const TITLE = data.title;
  const router = useRouter();
  const isSharedPage = router.pathname.startsWith("/share");

  const [star, setStar] = useState(false);

  const formatDate = (value: string) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  const handleStarClick = (e: MouseEvent) => {
    e.preventDefault();
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };

  return (
    <Styled.CardContainer>
      <Link href={URL} target="_blank">
        <Styled.CardImgBox>
          <Styled.CardImg
            src={IMG_SRC ? IMG_SRC : noImageImg}
            alt={IMG_SRC ? "카드 이미지" : "이미지 없음"}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Styled.CardImgBox>
        <Styled.InfoContainer>
          <Styled.AdditionalInfo>
            <span>{timeForToday(CREATED_AT)}</span>
            {isSharedPage ? null : (
              <DropDown url={URL} folderData={folderData} />
            )}
          </Styled.AdditionalInfo>
          <Styled.Title>{TITLE}</Styled.Title>
          <Styled.Description>{DESCRIPTION}</Styled.Description>
          <span>{formatDate(CREATED_AT)}</span>
        </Styled.InfoContainer>
        <Styled.Star
          onClick={handleStarClick}
          src={star ? chosenStarImg : starImg}
          alt="즐겨찾기 버튼"
          width="34"
          height="34"
        />
      </Link>
    </Styled.CardContainer>
  );
};

export default Card;
