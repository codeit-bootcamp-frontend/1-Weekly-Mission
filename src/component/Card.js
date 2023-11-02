import { useState } from "react";
import noImg from "../assets/noImg.svg";
import starImg from '../assets/Star.svg';
import selectedStarImg from '../assets/selectedStar.svg';
import kebabMenuImg from '../assets/kebab.svg';
import PastTime from "../utils/date.js";

export function Card({ link }) {
  const {image_source, imageSource, description, url, createdAt, created_at } = link;

  const {message, cardDate} = PastTime(createdAt || created_at);
  const [selected, setSelected ] = useState(starImg)
  const HandleClick = (e) => {
    e.preventDefault();
    setSelected((prevSelected) => {
      if (prevSelected === starImg) {
        return selectedStarImg;
      } else {
        return starImg;
      }
    });
  }

  return (
    <a href={url} className="card">
      <div className="card-image-container">
        <img className="card-image" src={imageSource || image_source || noImg} alt="사진" />
        <img className='star' src={selected} alt={selected} onClick={HandleClick} />  
      </div>
      <div className="card-description">
        <div className="card-option">
          <span>{message}</span>  
          <img src={kebabMenuImg} alt='option'></img>
        </div>
        <span className="description">{description}</span>
        <span>{cardDate}</span>
      </div>
    </a>
  );
}
