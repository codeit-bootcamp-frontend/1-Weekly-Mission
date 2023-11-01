import * as S from "./Card.style";
import noImage from "images/no-image.svg";
import star from "images/star.svg";
import kebab from "images/kebab.svg";
import { formatDate, formatTimeDiff } from "utils";
import { Popover } from "react-tiny-popover";
import { useState } from "react";

function Card({ item }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { image_source, created_at, title, description, url } = item;
  const timeDiff = formatTimeDiff(created_at);
  const date = formatDate(created_at);

  const moveUrl = () => {
    window.open(url);
  };

  const popoverOpen = (e) => {
    e.stopPropagation();
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div onClick={moveUrl}>
      <S.ImageContainer>
        <S.Image src={image_source ?? noImage} alt={title} />
        <S.StarButton src={star} alt="별모양 버튼" />
      </S.ImageContainer>
      <S.Info>
        <Popover
          isOpen={isPopoverOpen}
          positions={"bottom"}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={
            <S.PopoverContainer>
              <S.PopoverButton>삭제하기</S.PopoverButton>
              <S.PopoverButton>폴더에 추가</S.PopoverButton>
            </S.PopoverContainer>
          }>
          <S.KebabButton onClick={popoverOpen}>
            <img src={kebab} alt="케밥 버튼" />
          </S.KebabButton>
        </Popover>
        <S.TimeDiff>{timeDiff}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{date}</S.Date>
      </S.Info>
    </div>
  );
}

export default Card;
