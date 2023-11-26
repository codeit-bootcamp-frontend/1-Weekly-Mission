import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import useGetSampleLinks from "../../hooks/useGetSampleLinks";
import useGetLinks from "../../hooks/useGetLinks";

interface CardListProps {
  folderId?: number | null;
  searchTerm?: string;
}

interface LinkProps {
  id: number;
  createdAt?: string;
  created_at?: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  image_source?: string;
}

const CardList = ({ folderId, searchTerm }: CardListProps) => {
  const sharedLinks = useGetSampleLinks();
  const folderLinks = useGetLinks(folderId);
  const links = folderId !== undefined ? folderLinks : sharedLinks;

  const [filteredLinks, setFilteredLinks] = useState<LinkProps[] | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredLinks(links);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = links?.filter(
        (link: LinkProps) =>
          link.title?.toLowerCase().includes(lowerCaseSearchTerm) || link.description?.toLowerCase().includes(lowerCaseSearchTerm) || link.url?.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredLinks(filtered);
    }
  }, [searchTerm, links]);

  return <Container>{filteredLinks?.length ? filteredLinks.map((link: LinkProps) => <Card key={link.id} item={link} />) : <NoLink>검색 결과가 없습니다.</NoLink>}</Container>;
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
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;

  color: var(--linkbrary-black);
  text-align: center;
  font-size: 16px;
  line-height: 24px; /* 150% */

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 34rem;
  }
`;

export default CardList;
