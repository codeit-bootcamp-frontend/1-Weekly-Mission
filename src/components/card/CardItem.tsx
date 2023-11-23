import * as S from "./CardItemStyle";

import logo from "assets/logo.svg";
import Star from "components/icon/Star";

import { getCreatedDate, getDiffTime } from "common/utils/dateUtils";
import KebabMenu from "components/Kebabmenu";
import { LinkData } from "types/folder";

interface CardItemProps {
  link: LinkData;
}

export default function CardItem({ link }: CardItemProps) {
  const { description, image_source: imageSource, created_at: createdAt, url } = link;
  const { yyyy, mm, dd } = getCreatedDate(createdAt);

  // const defaultImageStyle = imageSource === null; // 확인하기

  return (
    <S.Wrapper>
      <S.Container>
        <S.CardImage src={imageSource ? imageSource : logo} $isImageurl={!!imageSource} />
        <S.Icon>
          <Star />
        </S.Icon>
      </S.Container>
      <S.CardInfo>
        <S.Info>
          {getDiffTime(createdAt)}
          <KebabMenu link={url} />
        </S.Info>
        <S.Description>{description}</S.Description>
        <S.CreatedAt>
          {yyyy}. {mm}. {dd}
        </S.CreatedAt>
      </S.CardInfo>
    </S.Wrapper>
  );
}
