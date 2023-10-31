import styled from "styled-components"

const CardContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 4rem auto;
  padding: 0 clamp(3.2rem, 5%, 19rem);
`

const FolderContainerBox = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1124px) {
    width: 70.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
  }
`

const FolderNameBox = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1124px) {
    width: 70.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
`

const NoLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.9rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 50rem;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40rem;
  }
`

const NoLinkInnerBox = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  padding: 4.1rem 0 3.5rem 0;
  justify-content: center;
  align-items: center;
`
const NoLinkParagraph = styled.p`
  color: #000;
  text-align: center;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem; /* 150% */
`

export {
  CardContainerBox,
  FolderContainerBox,
  FolderNameBox,
  NoLinkBox,
  NoLinkInnerBox,
  NoLinkParagraph,
}
