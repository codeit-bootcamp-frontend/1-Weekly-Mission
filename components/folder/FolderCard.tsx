import { dateCalculator } from '../../utils/dateCalculator';
import { useEffect, useRef, useState, MouseEvent } from 'react';
import FolderDeleteModal from '../modal/FolderDeleteModal';
import ToFolderPlusModal from '../modal/ToFolderPlusModal';
import * as C from '../../style/styled-component/Card/CardStyledComponent';
import { LinksData } from './FolderMain';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  item: LinksData;
}

export default function FolderCard(link: Props) {
  const [clicked, setClicked] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showToFolderPlusModal, setShowToFolderPlusModal] = useState(false);

  const apiDate = new Date(link.item.created_at);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();
  const back = useRef<HTMLDivElement>(null);

  const kebabfunc = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const kebabClick = () => {
    setClicked((prev) => !prev);
  };

  const clickOutside = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (back.current && !back.current.contains(target)) {
      setClicked((prev) => !prev);
    }
  };
  const onClickDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const onClickToFolderModal = () => {
    setShowToFolderPlusModal((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside as () => void);
    return () =>
      document.removeEventListener('mousedown', clickOutside as () => void);
  }, [clickOutside]);
  return (
    <>
      <C.CardWrapperLink href={link.item.url} target="_blank">
        <C.CardBox>
          <C.CardImgDiv>
            <C.CardImg
              className="card-img"
              src={link.item.image_source || '/no-image.svg'}
              alt={link.item.title}
            />
          </C.CardImgDiv>
          <C.CardText>
            <C.CardTimeDIv>
              <C.CardTimeAgo>{elapsedTime}</C.CardTimeAgo>

              <C.KebabButton onClick={kebabfunc}>
                <Div onClick={kebabClick}>
                  <Image src="/kebab.svg" alt="kebabImg" fill />
                </Div>
                {clicked && (
                  <div>
                    <C.KebabDiv ref={back}>
                      <C.KebabPlus onClick={onClickDeleteModal}>
                        삭제하기
                      </C.KebabPlus>
                      <C.KebabDelete onClick={onClickToFolderModal}>
                        폴더에 추가
                      </C.KebabDelete>
                    </C.KebabDiv>
                  </div>
                )}
              </C.KebabButton>
            </C.CardTimeDIv>
            <C.TextDescription>{link.item.description}</C.TextDescription>
            <C.CardYear>{`${year}. ${month}. ${days}`}</C.CardYear>
          </C.CardText>
          <StarImg src="/star.svg" width={34} height={34} alt="starImg" />
        </C.CardBox>
      </C.CardWrapperLink>

      {showDeleteModal && (
        <FolderDeleteModal
          handleClick={onClickDeleteModal}
          cardLink={link.item.url}
          value={'링크 삭제'}
          title={''}
        />
      )}
      {showToFolderPlusModal && (
        <ToFolderPlusModal
          handleClick={onClickToFolderModal}
          cardLink={link.item.url}
        />
      )}
    </>
  );
}

const Div = styled.div`
  position: relative;
  width: 21px;
  height: 17px;
`;

const StarDiv = styled.div`
  width: 34px;
  height: 34px;
`;

const StarImg = styled(Image)`
  position: absolute;
  top: 15px;
  right: 15px;
`;
