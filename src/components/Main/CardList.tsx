import defaultFileImg from "../../assets/nofileimg.png";
import starImg from "../../assets/star.svg";
import kebabImg from "../../assets/kebab.svg";
import { useSearchParams } from "react-router-dom";
import useData from "../../hooks/useReduce";
import { TimeFlow, filterFolder, formatDate } from "../../utils/utils";
import { useRef } from "react";
import useModal from "../../hooks/useModal";
import { KebabContainer, PopOver } from "src/components/Main/CardList.styled";
import { URLS } from "src/utils/getData.type";

function Kebab({ url }) {
  const folderData = useData(URLS.FOLDER_CATEGORY);
  const [modal, dispatch] = useModal(null);
  const popOver = useRef();

  const handleFocus = (e) => {
    popOver.current.classList.toggle("active");
    e.preventDefault();
  };
  const handleMouseLeave = () => {
    popOver.current.classList.remove("active");
  };

  const handleModal = (e) => {
    const type = e.target.textContent;
    if (folderData?.path === URLS.FOLDER_CATEGORY) {
      dispatch({ type, title: url, data: folderData.data });
    }
  };

  const stop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <KebabContainer onClick={stop}>
      <button onClick={handleFocus} onMouseLeave={handleMouseLeave}>
        <img src={kebabImg} alt="즐겨찾기에 추가하기" />
        <PopOver ref={popOver}>
          <p onClickCapture={handleModal}>삭제하기</p>
          <p onClick={handleModal}>폴더에 추가</p>
        </PopOver>
      </button>
      {modal}
    </KebabContainer>
  );
}

function Card({ url, imageSource, image_source, title, description, createdAt, created_at }) {
  return (
    <>
      <S.DivImgCard>
        <S.ImgCard src={imageSource || image_source || defaultFileImg} alt="카드 이미지" />
      </S.DivImgCard>
      <S.DivTextCard>
        <S.DivTimeDiff>
          <TimeFlow createdAt={createdAt ?? created_at} />
          <Kebab url={url} />
        </S.DivTimeDiff>
        <S.H3>{title?.length > 40 ? title.slice(0, 40) + "..." : title}</S.H3>
        <p>{description?.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(createdAt ?? created_at)}</p>
      </S.DivTextCard>
      <S.ButtonStar>
        <img src={starImg} alt="즐겨찾기에 추가하기" />
      </S.ButtonStar>
    </>
  );
}

function CardSet({ links }) {
  return links.map((link) => (
    <S.ACard key={link.id} className="card" href={link.url} target="_blank" rel="noreferrer">
      <Card {...link} />
    </S.ACard>
  ));
}

function CardList({ type }) {
  const [data] = useData(type);
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");
  const links = filterFolder(data, folderId);

  return links?.length ? (
    <S.DivCardList>
      <CardSet links={links} />
    </S.DivCardList>
  ) : (
    <S.DivEmpty>저장된 링크가 없습니다.</S.DivEmpty>
  );
}

export default CardList;
