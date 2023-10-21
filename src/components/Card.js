import '../styles/Card.css';
import defaultImg from '../assets/no-image.png';
const moment = require('moment');

export default function Card({ value }) {
  const { imageSource = defaultImg } = value;
  const imageStyle = {
    backgroundImage: `url(${imageSource})`,
  };
  const ago = moment(value.createdAt).fromNow();
  const date = moment(value.createdAt).format('YYYY. MM. DD');
  return (
    <a
      href={value.url}
      className='card'
      target='_blank'
      rel='noreferrer noopener'
    >
      <div style={imageStyle} className='card-image'></div>
      <div className='card-text'>
        <div className='posting-box'>
          <div className='posting-time'>{ago}</div>
          <div className='kebob-button'></div>
        </div>
        <div className='posting-description'>{value.description}</div>
        <div className='posting-date'>{date}</div>
      </div>
    </a>
  );
}
