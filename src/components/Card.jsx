import Moment from 'react-moment';
import '../css/card.css';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import styled from 'styled-components';

function Card({ card }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const OpenPopover = (e) => {
    e.stopPropagation(); // 이벤트가 상위 엘리먼트에 전달되지 않게 막아 준다.
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <>
      <div className="card-wrapper" href={card.url} target="_blank" rel="noreferrer noopener">
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
            <Popover
              isOpen={isPopoverOpen}
              positions={'bottom'}
              onClickOutside={() => setIsPopoverOpen(false)}
              content={
                <PopoverContainer>
                  <PopoverButton>삭제하기</PopoverButton>
                  <PopoverButton>폴더에 추가</PopoverButton>
                </PopoverContainer>
              }
            >
              <button onClick={OpenPopover}>
                <img src="/assets/image/kebab.svg" alt="카드 설정 버튼" />
              </button>
            </Popover>
          </div>
          <p className="card-description">{card.description}</p>
          <Moment format="YYYY.MM.DD">{card.createdAt}</Moment>
        </div>
      </div>
    </>
  );
}

export default Card;

const PopoverContainer = styled.div`
  display: flex;
  width: 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  background: var(--white, #fff);
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
`;

const PopoverButton = styled.button`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  font-size: 1.4rem;
  &:hover {
    color: var(--primary);
    background: var(--gray10);
  }
`;
