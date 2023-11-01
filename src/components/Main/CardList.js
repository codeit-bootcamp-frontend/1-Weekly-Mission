import defaultFileImg from '../../assets/nofileimg.png'
import starImg from '../../assets/star.svg'
import kebabImg from '../../assets/kebab.svg'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getData } from '../../utils/api';
import useData, { reduceData, useReduce } from '../../hooks/useReduce';
import { TimeFlow, filterFolder, formatDate } from '../../utils/utils';
import S from '../styled'

function Card({ imageSource, image_source, title, description, createdAt, created_at }) {
  return (
    <>
      <S.DivImgCard >
        <S.ImgCard src={imageSource ?? (image_source ?? defaultFileImg)} alt='카드 이미지' />
      </S.DivImgCard>
      <S.DivTextCard>
        <S.DivTimeDiff>
          <TimeFlow createdAt={createdAt ?? created_at} />
          <button><img src={kebabImg} alt='즐겨찾기에 추가하기' /></button>
        </S.DivTimeDiff>
        <S.H3>{title?.length > 40 ? title.slice(0, 40) + "..." : title}</S.H3>
        <p>{description?.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(createdAt ?? created_at)}</p>
      </S.DivTextCard>
      <S.ButtonStar><img src={starImg} alt='즐겨찾기에 추가하기' /></S.ButtonStar>
    </>
  )
}

function CardSet({ links }) {
  return links.map(link => (
    <S.ACard key={link.id} className="card" href={link.url} target='_blank' rel='noreferrer' >
      <Card {...link} />
    </S.ACard>
  ))
}

function CardList({ type }) {
  const [data] = useData(type);
  const [searchParams, setSearchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");
  const links = filterFolder(data, folderId);

  return (
    links?.length ?
      <S.DivCardList >
        <CardSet links={links} />
      </S.DivCardList>
      : <S.DivEmpty>저장된 링크가 없습니다.</S.DivEmpty>
  )
}

export default CardList