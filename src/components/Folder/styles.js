import styled from "styled-components"

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
`
const FolderBoxText = styled.p`
  /* color: #000; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const FolderBox = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color);
  background: #fff;

  &:hover {
    border: 1px solid var(--linkbrary-primary-color);
    background: var(--linkbrary-primary-color);
    color: #fff;
  }
`

const FolderAddBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

const FolderAddText = styled.p`
  color: #6d6afe;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;
`

const FolderAddImage = styled.img`
  width: 1.6rem;
  height: 1.6rem;
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
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const FolderOptionItemParagraph = styled.p`
  color: var(--linkbrary-gray-60);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const FolderOptionItemImage = styled.img`
  display: flex;
  width: 1.8rem;
  height: 1.8rem;
  padding: 0.12rem 0.15rem 0.1rem 0.15rem;
  justify-content: center;
  align-items: center;
`

export {
  FolderBox,
  FolderAddBox,
  FolderAddText,
  FolderAddImage,
  FolderBoxText,
  FolderListBox,
  FolderListInnerBox,
  FolderNameHeader,
  FolderOptionsBox,
  FolderOptionItemBox,
  FolderOptionItemParagraph,
  FolderOptionItemImage,
}
