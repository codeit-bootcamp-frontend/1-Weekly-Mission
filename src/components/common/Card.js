import defaultImg from '../../assets/images/no-image.png';
import starImg from '../../assets/images/star.svg';
import kebabImg from '../../assets/images/kebab.svg';
import styled from 'styled-components';
import KebabPopOver from '../Folder/KebabPopOver';
import { useEffect, useRef, useState } from 'react';

const moment = require('moment');

export default function Card({ value, urlPath, onModalOpen }) {
  const [kebabMenuShow, setKebabMenuShow] = useState(false);
  const kebabRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (kebabRef.current !== null) {
        if (!kebabRef.current.contains(e.target)) {
          setKebabMenuShow(false);
        }
      }
    });
  });

  const handleKebabClick = (e) => {
    e.preventDefault();
    setKebabMenuShow(true);
    if (kebabMenuShow) {
      setKebabMenuShow(false);
    }
  };
  let { imageSource = defaultImg, createdAt } = value;
  if (value.image_source) {
    imageSource = value.image_source;
    createdAt = value.created_at;
  }
  const imageStyle = {
    backgroundImage: `url(${imageSource})`,
  };
  const ago = moment(createdAt).fromNow();
  const date = moment(createdAt).format('YYYY. MM. DD');

  const show = urlPath === '/folder';

  return (
    <Container href={value.url} target='_blank' rel='noreferrer noopener'>
      {show && <Star src={starImg} alt='즐겨찾기' />}
      <CardImgBox>
        <CardImg style={imageStyle}></CardImg>
      </CardImgBox>
      <TextBox>
        <Box>
          <div>{ago}</div>
          {show && (
            <KebabBox>
              <img
                src={kebabImg}
                alt='리스트 메뉴'
                onClick={handleKebabClick}
              />
              {kebabMenuShow && (
                <KebabPopOver
                  kebabRef={kebabRef}
                  onModalOpen={onModalOpen}
                  link={value.url}
                />
              )}
            </KebabBox>
          )}
        </Box>
        <Description>{value.description}</Description>
        <div>{date}</div>
      </TextBox>
    </Container>
  );
}

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

const CardImgBox = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardImg = styled.div`
  width: 100%;
  height: 199px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const TextBox = styled.div`
  color: #000;
  padding: 15px 20px;
  position: relative;
  background-color: var(--linkbrary-white);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Container = styled.a`
  text-decoration: none;
  width: 340px;
  height: 334px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  border-radius: 15px;
  &:hover ${CardImg} {
    transform: scale(1.3);
    transition: 0.5s;
  }

  &:hover ${TextBox} {
    background-color: var(--linkbrary-bg);
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

const KebabBox = styled.div``;
