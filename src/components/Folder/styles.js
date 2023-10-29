import styled from "styled-components"
import IMAGES from "../../assets/images"

const FolderListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
`

const FolderListInnerBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`
const FolderBoxText = styled.p`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 1124px) {
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    display: flex;
  }
`

const FolderBox = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color);
  background-color: ${({ selected }) =>
    selected ? "var(--linkbrary-primary-color);" : "#fff"};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};

  &:hover {
    border: 1px solid var(--linkbrary-primary-color);
    background: var(--linkbrary-primary-color);
    color: #fff;
  }
`

const FolderAddBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    position: fixed;
    padding: 8px 16px;
    align-items: flex-start;
    gap: 0.8rem;
    right: 38%;
    bottom: 10.1rem;
    transition: 0.5s;
    z-index: 2;
    /* bottom: -1.2rem; */
    border-radius: 20px;
    border: 1px solid var(--linkbrary-white);
    background: var(--linkbrary-primary-color);
    color: var(--linkbrary-white);
  }

  &:hover {
    transform: scale(1.1);
  }
`

const FolderAddText = styled.p`
  color: #6d6afe;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;

  @media screen and (max-width: 1124px) {
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
    color: var(--linkbrary-white);
  }
`

const FolderAddImage = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const FolderAddWhiteImage = styled.img`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
  }
`

const FolderNameHeader = styled.h1`
  color: #000;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`

const FolderOptionsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`

const FolderOptionItemBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  &:hover {
    text-decoration: underline;
    text-decoration-color: gray;
  }

  img {
    display: flex;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.12rem 0.15rem 0.1rem 0.15rem;
    justify-content: center;
    align-items: center;
  }

  p {
    color: var(--linkbrary-gray-60);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`

export {
  FolderBox,
  FolderAddBox,
  FolderAddText,
  FolderAddImage,
  FolderAddWhiteImage,
  FolderBoxText,
  FolderListBox,
  FolderListInnerBox,
  FolderNameHeader,
  FolderOptionsBox,
  FolderOptionItemBox,
}
