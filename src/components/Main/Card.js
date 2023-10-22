import LogoImg from '../../assets/logo.png'
import './Card.css';
import '../../style/style.css';

import moment from 'moment';
import { useEffect, useState } from 'react';

function calculateTimeAgo(createdAt) {
  const createdDate = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss[Z]');
  const currentDate = moment();
  const diff = currentDate.diff(createdDate, 'seconds');

  if (diff < 120) {
    return '1 minute ago';
  } else if (diff <= 3540) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 3600) {
    return '1 hour ago';
  } else if (diff <= 82800) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 86400) {
    return '1 day ago';
  } else if (diff <= 2592000) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff <= 28512000) {
    return `${Math.floor(diff / 2592000)} months ago`;
  } else if (diff <= 31536000) {
    return '1 year ago';
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
}

function Card({ link }) {
  const { createdAt, description, imageSource, title, url } = link;
  const [ago, setAgo] = useState(0);
  const [createdAtFormat, setCreatedAtFormat] = useState(createdAt);

  useEffect(() => {
    setAgo(calculateTimeAgo(createdAt))
    setCreatedAtFormat(moment(createdAt).format('YYYY.MM.DD'))
  }, [createdAt])

  return (
    <div className='Card'>
      {
        imageSource
          ? (
            <div className='card-image-container'>
              <img className='Card-image' src={imageSource} alt="고양이" />
            </div>)
          : (
            <div className='card-image-container Card-image'>
              <img src={LogoImg} alt='logoImg' className='no-img-logo' />
            </div>
          )
      }
      <div className='contentContainer'>
        <div className='contentAgo'>{ago}</div>
        <div >{title}</div>
        <div className='content'>{description}</div>
        <div className='contentAt'>{createdAtFormat}</div>
      </div>

    </div>
  )
}

export default Card;