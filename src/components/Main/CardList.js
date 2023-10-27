import './CardList.css'
import TimeFlow from './TimeFlow';
import defaultFileImg from '../../assets/nofileimg.png'
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import styled from 'styled-components';

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
`

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ imageSource, image_source, title, description, createdAt, created_at }) {
  return (
    <>
      <div className='card__imgbox'>
        <img className="card__img" src={imageSource ?? (image_source ?? defaultFileImg)} alt='카드 이미지' />
      </div>
      <div className="card__text">
        <div className="card__timeDiff"><TimeFlow createdAt={createdAt ?? created_at} /></div>
        <h3 className='font-size14'>{title?.length > 40 ? title.slice(0, 40) + "..." : title}</h3>
        <p>{description?.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(createdAt ?? created_at)}</p>
      </div>
    </>
  )
}

function CardList({ page, type }) {
  const [links, setLinks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const filterFolder = (links) => {
    if (!links) return;
    if (!folderId) return links;
    if (folderId * 1) return links.filter(link => link['folder_id'] == folderId);
    return links.filter(link => link['title']?.includes(folderId));
  }

  const loadData = async (...option) => {
    const result = await getData(...option);
    if (!result) return;
    if (page === 'folder') {
      const newFolder = result.data;
      setLinks(newFolder)
      return;
    }
    const newFolder = result.folder.links;
    setLinks(newFolder);
  }

  useEffect(() => {
    loadData(page, type);
  }, [page, type])

  return (
    filterFolder(links)?.length ?
      <div className="cardlist">
        {filterFolder(links)
          ?.map(link => (
            <a key={link.id} className="card" href={link.url} target='_blank' rel='noreferrer' >
              <Card {...link} />
            </a>
          ))}
      </div>
      : <Empty>
        저장된 링크가 없습니다.
      </Empty>
  )
}

export default CardList