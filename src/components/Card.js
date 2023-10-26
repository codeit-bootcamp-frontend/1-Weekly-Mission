import '../styles/Card.css';
import defaultImg from '../assets/images/no-image.png';
import kebabImg from '../assets/images/kebab.svg';
import starImg from '../assets/images/star.svg';
import styled from 'styled-components';

const moment = require('moment');

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
    console.log('Kebab!');
  };
  return (
    <a
      href={value.url}
      className='card'
      target='_blank'
      rel='noreferrer noopener'
    >
      <Star src={starImg} alt='즐겨찾기' />
      <div style={imageStyle} className='card-image'></div>
      <div className='card-text'>
        <Box className='posting-box'>
          <div className='posting-time'>{ago}</div>
          <Kebab src={kebabImg} alt='케밥' onClick={handleKebab} />
        </Box>
        <div className='posting-description'>{value.description}</div>
        <div className='posting-date'>{date}</div>
      </div>
    </a>
  );
}
