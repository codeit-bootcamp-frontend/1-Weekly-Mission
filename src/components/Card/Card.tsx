import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { timeForToday } from "utils/moment";
import { DropDown } from "components";
import noImageIMG from "assets/noImage.svg";
import starIMG from "assets/star.svg";
import chosenStarIMG from "assets/chosenStar.svg";
import * as Styled from "./StyledCard";

interface LinksData {
  id?: number;
  created_at?: string;
  createdAt?: string;
  updated_at?: string | null;
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
  imageSource?: string;
  folder_id?: number;
}

interface LinkCount {
  count: number;
}

interface FoldersData {
  id?: number;
  created_at?: string;
  name: string;
  user_id?: number;
  link: LinkCount;
}

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
      <Link to={URL} target="_blank">
        <Styled.CardImgBox>
          <Styled.CardImg
            src={IMG_SRC ? IMG_SRC : noImageIMG}
            alt={IMG_SRC ? "카드 이미지" : "이미지 없음"}
          />
        </Styled.CardImgBox>
        <Styled.InfoContainer>
          <Styled.AdditionalInfo>
            <span>{timeForToday(CREATED_AT)}</span>
            <DropDown url={URL} folderData={folderData} />
          </Styled.AdditionalInfo>
          <Styled.Description>{DESCRIPTION}</Styled.Description>
          <span>{formatDate(CREATED_AT)}</span>
        </Styled.InfoContainer>
        <Styled.Star
          onClick={handleStarClick}
          src={star ? chosenStarIMG : starIMG}
          alt="즐겨찾기 버튼"
        />
      </Link>
    </Styled.CardContainer>
  );
};

export default Card;
