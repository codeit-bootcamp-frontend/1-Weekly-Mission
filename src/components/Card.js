import { formatDateDifference, formatDate } from '../global/utils';
import EmptyCardImg from '../assets/Card_img.svg'
import kebab from '../assets/kebab.svg';
import styled from 'styled-components';
import starIcon from '../assets/star.svg'

const CardContainer = styled.a`
  display: block;
  width: 34rem;
  height: 33.4rem;
  flex-shrink: 0;
  box-shadow: 0rem 0.5rem 2.5rem 0rem rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
`;

const ImgArea = styled.div`
  width: 34rem;
  height: 20rem;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
`;

const StarIcon = styled.img`
  position: absolute;
  width: 3.4rem;
  height: 3.4rem;
  flex-shrink: 0;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 1;
`;

const CardImg = styled.img`
  width: 34rem;
  height: 20rem;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
  }
`;

const EmptyImg = styled.img`
  width: 34rem;
  height: 20rem;
  object-fit: cover;
`;

const InfoArea = styled.div`
  display: flex;
  width: 34rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0rem 0rem 1.5rem 1.5rem;
  background: #FFF;
`;

const CardExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
`;

const UploadTime = styled.p`
  color: #666;
  font-size: 1.3rem;
`;

const Kebab = styled.img`
  width: 2.1rem;
  height: 1.7rem;
`;

const Text = styled.p`
  height: 4.9rem;
  align-self: stretch;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Date = styled.p`
  height: 1.9rem;
  align-self: stretch;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.4rem;
`;


const Cards = ( { folderCards } ) => {
  return (
    <>
      {folderCards?.map((item) => {
        return (
          <div key={item.id}>
            <Card item={item} />
          </div>
        );
      })}
    </>
  )
}

const Card = ( { item } ) => {
  let folderId, createdAt, url, description, imageSource;

  if (item.created_at) {({folder_id:folderId, created_at:createdAt, url, description, image_source:imageSource} = item)}
  else {({createdAt, url, description, imageSource} = item)}
 
  const uploadDate = formatDate(createdAt)
  const dateDifference = formatDateDifference(createdAt);

  return (
    <CardContainer href={url}>
      <ImgArea>
        <StarIcon src={starIcon} alt="즐겨찾기 아이콘"/>
        {imageSource ? (
          <CardImg src={imageSource} alt="이미지" />
        ) : ( 
          <EmptyImg src={EmptyCardImg} alt="이미지 없음" />
        )}
      </ImgArea>
      <InfoArea>
        <CardExtraInfo>
          <UploadTime>{dateDifference}</UploadTime>
          <Kebab src={kebab} alt="더보기 아이콘"></Kebab>
        </CardExtraInfo>
        <Text>{description}</Text>
        <Date>{uploadDate}</Date>
      </InfoArea>
    </CardContainer>
  );
};

export default Cards;
