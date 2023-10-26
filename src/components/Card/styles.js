import styled from "styled-components"

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
`

const CardInfoBox = styled.div`
  margin: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  gap: 1rem;
`
const CardInfoInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardTimeDiffParagraph = styled.p`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.7rem;
  text-overflow: ellipsis;
`

const CardStarImage = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`

const CardImageContainerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 19.9rem;
  overflow: hidden;
`

const CardKebabImage = styled.img`
  cursor: pointer;
`

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
`

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
`

const CardStyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  transition: 0.5s;
`

const CardHref = styled.a`
  display: block;
  width: 34rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    ${CardStyledImage} {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`

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
}
