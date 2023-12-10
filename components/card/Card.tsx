import * as S from "@/components/card/Card.style";
import KebabMenu from "@/components/kebabMenu/KebabMenu";
import kebabImageSrc from "@/images/kebab.png";
import { Folder, MappedLink } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface CardProps {
  link: MappedLink;
  folders?: Folder[];
  isShared: boolean;
}

const Card = ({ link, folders, isShared }: CardProps) => {
  const { elapsedTime, createdAt, url, title, imageSource } = link;

  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const kebabButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (kebabButtonRef.current && !kebabButtonRef.current.contains(event.target as Node)) setIsKebabOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [kebabButtonRef]);

  return (
    <S.CardWrap>
      <S.CardImageWrap>
        <Link href={url} target="_blank">
          <S.CardImage src={imageSource} alt={title} />
        </Link>
        <S.StarIconButton>
          <S.StarImage />
        </S.StarIconButton>
      </S.CardImageWrap>
      <S.CardTextWrap>
        <S.TimeDiff>{elapsedTime}</S.TimeDiff>
        {!isShared && (
          <>
            <S.KebabButton onClick={() => setIsKebabOpen((prev) => !prev)} ref={kebabButtonRef}>
              <Image src={kebabImageSrc} alt="메뉴 열기" />
            </S.KebabButton>
            <KebabMenu
              linkUrl={url}
              folderId={link.id}
              isKebabOpen={isKebabOpen}
              setIsKebabOpen={setIsKebabOpen}
              folders={folders}
            />
          </>
        )}

        <S.CardTitle href={url} target="_blank">
          {title ?? "제목 없는 링크"}
        </S.CardTitle>
        <S.CardCreatedDate>{createdAt}</S.CardCreatedDate>
      </S.CardTextWrap>
    </S.CardWrap>
  );
};

export default Card;
