import styled from 'styled-components';
import useGetLinks from '@/hooks/useGetLinks';
import useGetSampleLinks from '@/hooks/useGetSampleLinks';
import Card from './Card';
import { Fragment } from 'react';
import { NO_LINK_MSG, SAMPLE_ID } from '@/lib/constants/default';
import { filterLink } from '@/lib/utils/filterLink';
import { DEVICE_SIZE } from '@/lib/styles/DeviceSize';

interface Props {
  folderId: number;
  search: boolean;
  keyword: string;
}

/**
 * @param {*} folderId 현재 링크를 불러 올 폴더 Id.
 */
function CardList({ folderId, search, keyword }: Props) {
  const sampleLinks = useGetSampleLinks();
  const userLinks = useGetLinks(1, folderId);
  let links = folderId === SAMPLE_ID ? sampleLinks : userLinks;
  if (!links) return;
  links = filterLink(links, search, keyword);

  return (
    <>
      {links.length ? (
        <Container>
          {links.map((link) => (
            <Fragment key={link.id}>
              <Card link={link} />
            </Fragment>
          ))}
        </Container>
      ) : (
        <NoLinkText>{NO_LINK_MSG}</NoLinkText>
      )}
    </>
  );
}

export default CardList;

const Container = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const NoLinkText = styled.div`
  width: 100%;
  padding: 40px 0;

  font-size: 1.6rem;
  text-align: center;
`;
