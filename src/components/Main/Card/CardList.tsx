import { useSearchParams } from "react-router-dom";
import useData from "src/hooks/useData";
import { filterFolder, formatDate } from "src/utils/filterAndData";
import defaultFileImg from "src/assets/nofileimg.png";
import starImg from "src/assets/star.svg";
import TimeFlow from "src/components/Main/Card/TimeFlow";
import Kebab from "src/components/Main/Card/Kebab";
import { FolderData, LinkData, SampleLink, URLS } from "src/utils/getData.type";
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
  id?: number;
  path: URLS.SHARED_FOLDER | URLS.FOLDER_LINKS;
}

function CardList({ id, path }: PcardList) {
  const cardData = useData(path, id);
  const folderData = useData(URLS.FOLDER_CATEGORY, id);
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");
  const links = cardData?.path === URLS.FOLDER_LINKS ? filterFolder(cardData?.links, folderId) : cardData?.links;

  return links?.length ? (
    <ContainerCardList>
      <CardSet folder={folderData?.data} links={links} />
    </ContainerCardList>
  ) : (
    <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
  );
}

export default CardList;

interface PcardSet {
  folder?: FolderData[];
  links: SampleLink[] | LinkData[];
}

function CardSet({ folder, links }: PcardSet) {
  return links.map((link) => {
    return (
      <CardLink key={link.id} className="card" href={link.url} target="_blank" rel="noreferrer">
        <Card folder={folder} {...link} />
      </CardLink>
    );
  });
}

interface Pcard {
  folder?: FolderData[];
  url: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  createdAt?: string;
  created_at?: string;
}

function Card({ folder, url, imageSource, image_source, title, description, createdAt, created_at }: Pcard) {
  return (
    <>
      <WrapperCardImg>
        <CardImg src={imageSource || image_source || defaultFileImg} alt="카드 이미지" />
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
        <img src={starImg} alt="즐겨찾기에 추가하기" />
      </ButtonStar>
    </>
  );
}
