import styled from 'styled-components';

const CardListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 2.5rem;

  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;

const CardInfoBox = styled.div`
  position: relative;
  margin: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  gap: 1rem;
`;
const CardInfoInnerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const CardTimeDiffParagraph = styled.p`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.7rem;
  text-overflow: ellipsis;
`;

const CardStarImage = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const CardImageContainerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 19.9rem;
  overflow: hidden;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

const CardKebabImage = styled.img`
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

const CardDescriptionParagraph = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  height: 4.9rem;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const CardCreatedAtParagraph = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.9rem;
`;

const CardStyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  transition: 0.5s;
`;

const CardHref = styled.a`
  position: relative;
  display: block;
  width: 34rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    ${CardStyledImage} {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;

const SelectMenuBox = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 4rem;
  right: -6rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const SelectMenuInnerBox = styled.div`
  display: flex;
  width: 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;

const SelectMenuButtonBox = styled.div`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;

  &:hover {
    color: var(--linkbrary-primary-color);
    background: var(--linkbrary-gray-10);
  }

  p {
    color: var(--gray-light-gray-100);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export {
  CardListBox,
  CardHref,
  CardInfoBox,
  CardInfoInnerBox,
  CardTimeDiffParagraph,
  CardStarImage,
  CardImageContainerBox,
  CardKebabImage,
  CardDescriptionParagraph,
  CardCreatedAtParagraph,
  CardStyledImage,
  SelectMenuBox,
  SelectMenuInnerBox,
  SelectMenuButtonBox,
};
