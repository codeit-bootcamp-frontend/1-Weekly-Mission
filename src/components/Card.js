import defaultImg from '../assets/images/no-image.png';
import kebabImg from '../assets/images/kebab.svg';
import starImg from '../assets/images/star.svg';
import styled from 'styled-components';

const moment = require('moment');

export default function Card({ value }) {
  let { imageSource = defaultImg } = value;
  if (value.image_source) {
    imageSource = value.image_source;
  }
  const imageStyle = {
    backgroundImage: `url(${imageSource})`,
  };
  const ago = moment(value.createdAt).fromNow();
  const date = moment(value.createdAt).format('YYYY. MM. DD');

  const handleKebab = (e) => {
    e.preventDefault();
  };
  return (
    <Container href={value.url} target='_blank' rel='noreferrer noopener'>
      <Star src={starImg} alt='즐겨찾기' />
      <CardImg style={imageStyle} className='card-image'></CardImg>
      <TextBox className='card-text'>
        <Box className='posting-box'>
          <div className='posting-time'>{ago}</div>
          <Kebab src={kebabImg} alt='케밥' onClick={handleKebab} />
        </Box>
        <Description className='posting-description'>
          {value.description}
        </Description>
        <div className='posting-date'>{date}</div>
      </TextBox>
    </Container>
  );
}

const Kebab = styled.img`
  position: relative;
  z-index: 2;
`;

const Star = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 1;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.a`
  text-decoration: none;
  width: 340px;
  height: 334px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  overflow: hidden;
  background-color: var(--linkbrary-white);
  position: relative;
  &:hover {
    box-sizing: border-box;
    border: 2px solid var(--linkbrary-primary-color);
    border-color: var(--linkbrary-primary-color);
  }
`;

const CardImg = styled.div`
  width: 100%;
  height: 199px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.3);
    transition: 0.5s;
  }
`;

const Description = styled.div`
  width: 300px;
  height: 49px;
  margin: 10px 0;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 24px;
`;

const TextBox = styled.div`
  color: #000;
  padding: 15px 20px;
  background-color: var(--linkbrary-white);
  position: relative;
  z-index: 1;
`;
