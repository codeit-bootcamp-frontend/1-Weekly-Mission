import './CardList.css'
import TimeFlow from './TimeFlow';
import defaultFileImg from '../../assets/nofileimg.png'
import starImg from '../../assets/star.svg'
import kebabImg from '../../assets/kebab.svg'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getData } from '../../utils/api';
import { reduceData, useReduce } from '../../hooks/useReduce';
import { filterFolder, formatDate } from '../../utils/utils';
import S from '../styled'

function Card({ imageSource, image_source, title, description, createdAt, created_at }) {
  return (
    <>
      <div className='card__imgbox'>
        <img className="card__img" src={imageSource ?? (image_source ?? defaultFileImg)} alt='카드 이미지' />
      </div>
      <div className="card__text">
        <div className="card__timeDiff">
          <TimeFlow createdAt={createdAt ?? created_at} />
          <button className='card__kebab'>
            <img src={kebabImg} alt='즐겨찾기에 추가하기' />
          </button>
        </div>
        <h3 className='font-size14'>{title?.length > 40 ? title.slice(0, 40) + "..." : title}</h3>
        <p>{description?.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(createdAt ?? created_at)}</p>
      </div>
      <button className='card__star'>
        <img src={starImg} alt='즐겨찾기에 추가하기' />
      </button>
    </>
  )
}

function CardSet({ links }) {
  return links.map(link => (
    <a key={link.id} className="card" href={link.url} target='_blank' rel='noreferrer' >
      <Card {...link} />
    </a>
  ))
}

function CardList({ page, type }) {
  const [data, dispatch] = useReduce(reduceData, undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");
  const links = filterFolder(data, folderId);

  useEffect(() => {
    (async function () {
      dispatch(await getData(page, type));
    })();
  }, [page, type])

  return (
    links?.length ?
      <div className="cardlist">
        <CardSet links={links} />
      </div>
      : <S.Empty>저장된 링크가 없습니다.</S.Empty>
  )
}

export default CardList