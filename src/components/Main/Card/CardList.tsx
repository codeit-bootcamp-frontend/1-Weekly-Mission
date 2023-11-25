import { useSearchParams } from "react-router-dom";
import useData from "src/hooks/useData";
import { filterFolder, formatDate } from "src/utils/filterAndData";
import defaultFileImg from "src/assets/nofileimg.png";
import starImg from "src/assets/star.svg";
import TimeFlow from "src/components/Main/Card/TimeFlow";
import Kebab from "src/components/Main/Card/Kebab";
import { LinkData, SampleLink, URLS } from "src/utils/getData.type";
import {
  ButtonStar,
  CardImg,
  CardLink,
  CardText,
  ContainerCardList,
  EmptyBox,
  H3,
  WrapperCardImg,
  WrapperTime,
} from "src/components/Main/Card/CardList.styled";

interface PcardList {
  path: URLS.SHARED_FOLDER | URLS.FOLDER_LINKS;
}

function CardList({ path }: PcardList) {
  const CardData = useData(path);
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");
  const links = CardData?.path === URLS.FOLDER_LINKS ? filterFolder(CardData?.links, folderId) : CardData?.links;

  return links ? (
    <ContainerCardList>
      <CardSet links={links} />
    </ContainerCardList>
  ) : (
    <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
  );
}

export default CardList;

interface PcardSet {
  links: SampleLink[] | LinkData[];
}

function CardSet({ links }: PcardSet) {
  return links.map((link) => {
    return (
      <CardLink key={link.id} className="card" href={link.url} target="_blank" rel="noreferrer">
        <Card {...link} />
      </CardLink>
    );
  });
}

interface Pcard {
  url: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  createdAt?: string;
  created_at?: string;
}

function Card({ url, imageSource, image_source, title, description, createdAt = "", created_at = "" }: Pcard) {
  return (
    <>
      <WrapperCardImg>
        <CardImg src={imageSource || image_source || defaultFileImg} alt="카드 이미지" />
      </WrapperCardImg>
      <CardText>
        <WrapperTime>
          <TimeFlow createdAt={createdAt ?? created_at} />
          <Kebab url={url} />
        </WrapperTime>
        <H3>{title?.length > 40 ? title.slice(0, 40) + "..." : title}</H3>
        <p>{description?.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(createdAt ?? created_at)}</p>
      </CardText>
      <ButtonStar>
        <img src={starImg} alt="즐겨찾기에 추가하기" />
      </ButtonStar>
    </>
  );
}
