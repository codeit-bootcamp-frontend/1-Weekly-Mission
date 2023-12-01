import useData from "@/hooks/useData";
import { filterFolder, formatDate } from "@/utils/filterAndData";
import starImg from "@/public/star.svg";
import TimeFlow from "@/components/Main/Card/TimeFlow";
import Kebab from "@/components/Main/Card/Kebab";
import { FolderData, LinkData, SampleLink, URLS } from "@/utils/getData.type";
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
} from "@/components/Main/Card/CardList.styled";
import { useRouter } from "next/router";
import Image from "next/image";

interface PcardList {
  id?: number;
  path: URLS.SHARED_FOLDER | URLS.FOLDER_LINKS;
}

let prev: string | null;

function CardList({ id, path }: PcardList) {
  const cardData = useData(path, id);
  const folderData = useData(URLS.FOLDER_CATEGORY, id);

  const router = useRouter();
  const folderId = router.query["folderId"] as string;
  const links =
    cardData?.path === URLS.FOLDER_LINKS
      ? filterFolder(cardData?.links, folderId === null ? null : folderId === "" ? prev : folderId)
      : cardData?.links;
  if (Number(folderId)) {
    prev = folderId;
  }

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
        <CardImg src={imageSource || image_source || "/nofileimg.png"} alt="카드 이미지" />
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
        <Image src={starImg} alt="즐겨찾기에 추가하기" />
      </ButtonStar>
    </>
  );
}
