import Moment from 'react-moment';
import '@/styles/card.module.css';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

type OpenPopoverFunc = (e: any) => void;

function Card({ card }: { card: any }): JSX.Element {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const OpenPopover: OpenPopoverFunc = (e) => {
    e.stopPropagation();
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <>
      <div className="card-wrapper" ref={card.url} rel="noreferrer noopener">
        <div className="card-image-box">
          <img
            className="card-image"
            src={card.image_source ? card.image_source : `/assets/image/no-img-card.svg`}
            alt={card.title}
          />
          <button className="star-mark-button">
            <img className="star-mark" src="/assets/image/star.png" alt="카드 즐겨찾기 버튼" />
          </button>
        </div>
        <div className="card-info-box">
          <div className="card-info-top">
            <Moment className="card-passed-time" fromNow>
              {card.createdAt ? card.createdAt : card.created_at}
            </Moment>
          </div>
          <p className="card-description">{card.description}</p>
          <Moment format="YYYY.MM.DD">{card.createdAt}</Moment>
        </div>
      </div>
    </>
  );
}

export default Card;
