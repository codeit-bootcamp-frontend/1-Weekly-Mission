import { MouseEvent, useRef, useState, RefObject } from "react";
import styled from "styled-components";
import Image from "next/image";

import { convertCreatedAt, formatDate } from "@/utils/dateFormat";
import KebabImage from "@/public/images/kebab.svg";
import NoImage from "@/public/images/noImage.png";
import FilledStarImage from "@/public/images/filledStar.svg";
import EmptyStarImage from "@/public/images/emptyStar.svg";
import { mapCardData } from "@/utils/mapFetch";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import ModalDelete from "../Modal/ModalDelete";
import { MODAL_NAME } from "@/constants/constant";
import ModalAddTo from "../Modal/ModalAddTo";
import { FolderItem } from "@/types/api";

interface CardProps {
  item: {
    id: number;
    createdAt?: string;
    created_at?: string;
    updated_at?: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
    image_source?: string;
    folder_id?: number;
  };
  folderData?: FolderItem[];
}

interface CardImageProps {
  imgUrl: string;
}

interface CardInfoProps {
  createdAt: string;
  description: string;
  handleSelectMenuOpen: () => void;
}

interface SelectMenuModalProps {
  selectMenuRef: RefObject<HTMLDivElement>;
  handleSelectMenuClose: (e: MouseEvent<HTMLDivElement>) => void;
  setDeleteModalOpen: (value: boolean) => void;
  setAddModalOpen: (value: boolean) => void;
}

const SelectMenuModal = ({
  selectMenuRef,
  handleSelectMenuClose,
  setDeleteModalOpen,
  setAddModalOpen,
}: SelectMenuModalProps) => {
  const handleDeleteClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDeleteModalOpen(true);
    handleSelectMenuClose(e);
  };

  const handleAddClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setAddModalOpen(true);
    handleSelectMenuClose(e);
  };

  return (
    <StyledSelectMenuBox ref={selectMenuRef}>
      <StyledSelectMenuInnerBox>
        <StyledSelectMenuButtonBox onClick={(e) => handleDeleteClick(e)}>
          <p>삭제하기</p>
        </StyledSelectMenuButtonBox>
        <StyledSelectMenuButtonBox onClick={(e) => handleAddClick(e)}>
          <p>폴더에 추가</p>
        </StyledSelectMenuButtonBox>
      </StyledSelectMenuInnerBox>
    </StyledSelectMenuBox>
  );
};

const CardInfo = ({
  createdAt,
  description,
  handleSelectMenuOpen,
}: CardInfoProps) => {
  const text = description || "내용 없음";

  const handleKebabClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    handleSelectMenuOpen();
  };

  return (
    <StyledCardInfoBox>
      <StyledCardInfoInnerBox>
        <StyledCardTimeDiffParagraph>
          {convertCreatedAt(createdAt)}
        </StyledCardTimeDiffParagraph>
        <StyledCardKebabImage onClick={handleKebabClick}>
          <KebabImage width={21} height={17} alt="더보기" />
        </StyledCardKebabImage>
      </StyledCardInfoInnerBox>
      <StyledCardDescriptionParagraph>{text}</StyledCardDescriptionParagraph>
      <StyledCardCreatedAtParagraph>
        {formatDate(createdAt)}
      </StyledCardCreatedAtParagraph>
    </StyledCardInfoBox>
  );
};

const CardImage = ({ imgUrl }: CardImageProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleStarClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsLiked((prev) => !prev);
  };
  return (
    <StyledCardImageContainerBox>
      <StyledCardStyledImage
        src={imgUrl || NoImage}
        fill
        sizes="100%"
        alt="카드"
      />
      <StyledCardStarImageBox onClick={handleStarClick}>
        {isLiked ? (
          <FilledStarImage width={34} height={34} alt="즐겨찾기 있음" />
        ) : (
          <EmptyStarImage width={34} height={34} alt="즐겨찾기 없음" />
        )}
      </StyledCardStarImageBox>
    </StyledCardImageContainerBox>
  );
};

const Card = ({ item, folderData }: CardProps) => {
  const { image_source, created_at, description, url } = mapCardData(item);

  const selectMenuRef = useRef<HTMLDivElement>(null);
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);
  useOnClickOutside(selectMenuRef, setIsSelectMenuOpen);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleSelectMenuClose = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsSelectMenuOpen(false);
  };
  const handleSelectMenuOpen = () => setIsSelectMenuOpen(true);
  if (image_source === undefined || created_at === undefined) return null;
  return (
    <>
      <StyledCardHref href={url} target="_blank" rel="noreferrer">
        <CardImage imgUrl={image_source} />
        <CardInfo
          createdAt={created_at}
          description={description}
          handleSelectMenuOpen={handleSelectMenuOpen}
        />
        {isSelectMenuOpen && (
          <SelectMenuModal
            selectMenuRef={selectMenuRef}
            handleSelectMenuClose={handleSelectMenuClose}
            setDeleteModalOpen={setDeleteModalOpen}
            setAddModalOpen={setAddModalOpen}
          />
        )}
      </StyledCardHref>
      <ModalDelete
        modalOpen={deleteModalOpen}
        title={MODAL_NAME["deleteLink"]["title"]}
        btnColor={MODAL_NAME["deleteLink"]["buttonColor"]}
        btnText={MODAL_NAME["deleteLink"]["buttonText"]}
        description={url}
        setModalOpen={setDeleteModalOpen}
      />
      <ModalAddTo
        modalOpen={addModalOpen}
        title={MODAL_NAME["add"]["title"]}
        btnColor={MODAL_NAME["add"]["buttonColor"]}
        btnText={MODAL_NAME["add"]["buttonText"]}
        description={MODAL_NAME["add"]["description"]}
        setModalOpen={setAddModalOpen}
        folderData={folderData}
      />
    </>
  );
};

export default Card;

const StyledCardInfoBox = styled.div`
  position: relative;
  margin: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  gap: 1rem;
`;
const StyledCardInfoInnerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StyledCardTimeDiffParagraph = styled.p`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.7rem;
  text-overflow: ellipsis;
`;

const StyledCardStarImageBox = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const StyledCardImageContainerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 19.9rem;
  overflow: hidden;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

const StyledCardKebabImage = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

const StyledCardDescriptionParagraph = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  height: 4.9rem;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const StyledCardCreatedAtParagraph = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.9rem;
`;

const StyledCardStyledImage = styled(Image)`
  /* width: 100%; */
  /* height: 100%; */
  object-fit: cover;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  transition: 0.5s;
`;

const StyledCardHref = styled.a`
  position: relative;
  display: block;
  width: 34rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    ${StyledCardStyledImage} {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;

const StyledSelectMenuBox = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 4rem;
  right: -6rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const StyledSelectMenuInnerBox = styled.div`
  display: flex;
  width: 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;

const StyledSelectMenuButtonBox = styled.div`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;

  &:hover {
    color: var(--linkbrary-primary-color);
    background: var(--linkbrary-gray-10);
  }

  p {
    color: var(--gray-light-gray-100);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
