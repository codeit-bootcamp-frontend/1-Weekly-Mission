import { Fragment } from "react";
import styled from "styled-components";
import Card from "./Card";
import useGetSampleLinks from "../../hooks/useGetSampleLinks";
import useGetLinks from "../../hooks/useGetLinks";

interface CardListProps {
  folderId?: number | null;
}

interface LinkProps {
  id: number;
  createdAt?: string;
  created_at?: string;
  url: string;
  description: string;
  imageSource?: string;
  image_source?: string;
}

const CardList = ({ folderId }: CardListProps) => {
  const sharedLinks = useGetSampleLinks();
  const folderLinks = useGetLinks(folderId);
  const links = folderId ? folderLinks : sharedLinks;

  return (
    <Container>
      {links?.length ? (
        links.map((link: LinkProps) => (
          <Fragment key={link.id}>
            <Card item={link} />
          </Fragment>
        ))
      ) : (
        <NoLink>저장된 링크가 없습니다.</NoLink>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
