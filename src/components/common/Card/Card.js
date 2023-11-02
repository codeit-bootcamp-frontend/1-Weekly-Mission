import styled, { css } from 'styled-components';
import { noDiscriptMsg } from 'constants/default';
import { timeFlow, formatDate } from 'utils/timeFlow.js';
import Kebab from 'components/common/Kebab.js';
import defaultImg from 'assets/images/no-Image.svg';
import starIcon from 'assets/images/star.svg';

function Card({ imageSource, image_source, title, description, createdAt, url, created_at }) {
  return (
    <Container href={url} target="_blank" rel="noopener noreferrer">
      <ImgBox>
        <StarIcon src={starIcon} alt="즐겨찾기 아이콘" />
        <Img src={imageSource || image_source || defaultImg} alt="카드 이미지" />
      </ImgBox>
      <TextBox>
        <Wrapper>
          <TimeDiff>{timeFlow(createdAt || created_at)}</TimeDiff>
          <Kebab url={url} />
        </Wrapper>
        {title && <Title>{title}</Title>}
        <Description>{description || noDiscriptMsg}</Description>
        <CreatedAt>{formatDate(createdAt || created_at)}</CreatedAt>
      </TextBox>
    </Container>
  );
}

export default Card;

const font = css`
  font-size: 1.4rem;
`;

const mainText = css`
  height: 3.333rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
`;

const Img = styled.img`
  width: 340px;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  height: 150px;
  gap: 7px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Container = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  width: 340px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    ${TextBox} {
      background-color: var(--bg);
    }
    ${Img} {
      transform: scale(1.3);
    }
  }
`;

const ImgBox = styled.div`
  position: relative;
  height: 200px;
  margin: 0 auto;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;
`;

const StarIcon = styled.img`
  z-index: 1;
  width: 34px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TimeDiff = styled.div`
  color: var(--grey);
  font-size: 1.3rem;
`;

const Title = styled.div`
  ${font};
  ${mainText};
`;

const Description = styled.div`
  ${font};
  ${mainText};
`;

const CreatedAt = styled.div`
  font-size: 1.3rem;
`;
