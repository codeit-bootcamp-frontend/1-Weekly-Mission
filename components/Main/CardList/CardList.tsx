import Card from "@/components/Main/CardList/Card";
import { CardLink, ContainerCardList, EmptyBox } from "@/components/Main/CardList/CardList.styled";
import axiosInstance from "@/lib/axios";
import { filterLinks } from "@/utils/filterAndData";
import { getCookie } from "@/utils/getCookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function CardList() {
  const router = useRouter();
  const searchKeyword = router.query["q"] as string;
  const folderId = router.query["folderId"] as string;
  const linkFetch = useQuery({
    queryKey: ["linkData", folderId],
    queryFn: async () => {
      const accessToken = getCookie("accessToken");
      if (folderId) {
        const res = await axiosInstance.get(`/folders/${folderId}/links`, { headers: { Authorization: accessToken } });
        return res.data;
      }
      const res = await axiosInstance.get(`/links`, { headers: { Authorization: accessToken } });
      return res.data;
    },
  });

  const linkData = linkFetch.data ?? [];

  const filteredLinks = filterLinks(linkData, searchKeyword);

  return filteredLinks?.length ? (
    <ContainerCardList>
      {filteredLinks.map((link) => (
        <CardLink key={link.id} className="card" href={link.url} target="_blank" rel="noreferrer">
          <Card {...link} />
        </CardLink>
      ))}
    </ContainerCardList>
  ) : (
    <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
  );
}
