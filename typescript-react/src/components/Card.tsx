import Moment from 'react-moment';
import '../css/card.css';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import styled from 'styled-components';
import RemoveLinkModal from './Modal/RemoveLinkModal';
import InsertFolderModal from './Modal/InsertFolderModal';

type OpenPopoverFunc = (e: any) => void;

function Card({ card }: { card: any }): JSX.Element {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLinkRemoveModal, setIsLinkRemoveModal] = useState(false);
  const [isInsertFolderModal, setIsInsertFolderModal] = useState(false);

  const OpenPopover: OpenPopoverFunc = (e) => {
    e.stopPropagation();
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <>
      <div className="card-wrapper" ref={card.url} target="_blank" rel="noreferrer noopener">
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
                  <PopoverButton onClick={(): void => setIsLinkRemoveModal(true)}>삭제하기</PopoverButton>
                  <PopoverButton onClick={(): void => setIsInsertFolderModal(true)}>폴더에 추가</PopoverButton>
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
      {isLinkRemoveModal && <RemoveLinkModal setIsLinkRemoveModal={setIsLinkRemoveModal} />}
      {isInsertFolderModal && <InsertFolderModal setIsInsertFolderModal={setIsInsertFolderModal} />}
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
