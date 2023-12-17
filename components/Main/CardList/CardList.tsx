import Card from "@/components/Main/CardList/Card";
import { CardLink, ContainerCardList, EmptyBox } from "@/components/Main/CardList/CardList.styled";
import { CardListProps } from "@/components/Main/CardList/CardList.type";
import { PATHS } from "@/constants/path";
import useData from "@/hooks/useData";
import { filterFolder } from "@/utils/filterAndData";
import { useRouter } from "next/router";

export default function CardList({ id, path }: CardListProps) {
  const cardData = useData(path, id);
  const folderData = useData(PATHS.FOLDER_CATEGORY, id);

  const router = useRouter();
  const searchKeyword = router.query["q"] as string;
  const folderId = router.query["folderId"] as string;
  const links = filterFolder(cardData, searchKeyword, folderId);

  return links?.length ? (
    <ContainerCardList>
      {links.map((link) => (
        <CardLink key={link.id} className="card" href={link.url} target="_blank" rel="noreferrer">
          <Card folder={folderData?.data} {...link} />
        </CardLink>
      ))}
    </ContainerCardList>
  ) : (
    <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
  );
}
