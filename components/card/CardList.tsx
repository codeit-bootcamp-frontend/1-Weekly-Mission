import { LinksDataType, SampleLinksType } from "@/utils/types";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import useGetLinks from "../../hooks/useGetLinks";
import useGetSampleLinks from "../../hooks/useGetSampleLinks";
import Card from "./Card";

interface CardListProps {
  folderId?: number | null;
  searchTerm?: string;
}

const CardList = ({ folderId, searchTerm }: CardListProps) => {
  const sharedLinks = useGetSampleLinks();
  const folderLinks = useGetLinks(folderId);
  const links = folderId !== undefined ? folderLinks : sharedLinks;

  // useState를 사용하면 무한 렌더링 발생....
  // 타입 수정하기
  const filteredLinks = useRef<SampleLinksType[] | LinksDataType[] | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      filteredLinks.current = links;
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = links?.filter(
        (link) => link.title?.toLowerCase().includes(lowerCaseSearchTerm) || link.description?.toLowerCase().includes(lowerCaseSearchTerm) || link.url?.toLowerCase().includes(lowerCaseSearchTerm)
      );
      filteredLinks.current = filtered;
    }
  }, [searchTerm, links]);

  return (
    <Container>
      {filteredLinks.current?.length ? filteredLinks.current.map((link: SampleLinksType | LinksDataType) => <Card key={link.id} item={link} />) : <NoLink>검색 결과가 없습니다.</NoLink>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
`;

const NoLink = styled.div`
  display: flex;
  width: 106rem;
  height: 10rem;
  padding: 4.1rem 0 3.5rem 0;
  justify-content: center;
  align-items: center;

  color: var(--linkbrary-black);
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.4rem;

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 34rem;
  }
`;

export default CardList;
