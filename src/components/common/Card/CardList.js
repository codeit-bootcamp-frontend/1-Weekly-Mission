import styled from 'styled-components';
import useGetLinks from 'hooks/useGetLinks';
import useGetSampleLinks from 'hooks/useGetSampleLinks';
import Card from './Card.js';
import { Fragment } from 'react';
import { SAMPLE_ID } from 'constants/default';

/**
 * @param {*} folderId 현재 링크를 불러 올 폴더 Id.
 */
function CardList({ folderId }) {
  const sampleLinks = useGetSampleLinks();
  const userLinks = useGetLinks(1, folderId);
  const links = folderId === SAMPLE_ID ? sampleLinks : userLinks;
  if (!links) return;

  return (
    <Container>
      {links.map((link) => (
        <Fragment key={link.id}>
          <Card {...link} />
        </Fragment>
      ))}
    </Container>
  );
}

export default CardList;

const Container = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
