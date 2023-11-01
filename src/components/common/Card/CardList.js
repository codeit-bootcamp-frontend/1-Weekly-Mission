import 'styles/cardlist.css';
import { Fragment } from 'react';
import { SAMPLE_ID } from 'constants/default';
import useGetLinks from 'hooks/useGetLinks';
import useGetSampleLinks from 'hooks/useGetSampleLinks';
import Card from './Card.js';

/**
 * @param {*} folderId 현재 링크를 불러 올 폴더 Id.
 */
function CardList({ folderId }) {
  const sampleLinks = useGetSampleLinks();
  const userLinks = useGetLinks(1, folderId);
  const links = folderId === SAMPLE_ID ? sampleLinks : userLinks;
  if (!links) return;

  return (
    <div className="card_list">
      {links.map((link) => (
        <Fragment key={link.id}>
          <Card {...link} />
        </Fragment>
      ))}
    </div>
  );
}

export default CardList;
