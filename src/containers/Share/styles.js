import styled from "styled-components"

const ShareBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 4rem auto;
  padding: 0 clamp(3.2rem, 5%, 19rem);
`

const OwnerContainerBox = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0 6rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background: var(--linkbrary-bg, #f0f6ff);
`

const OwnerInnerContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    height: 6rem;
    border-radius: 4.7rem;
    object-fit: cover;
  }
`

const OwnerNameParagraph = styled.p`
  color: var(--text-color-light-mode, #000);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`

const OwnerFolderParagraph = styled.p`
  color: #000;
  text-align: center;
  vertical-align: middle;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export {
  ShareBox,
  OwnerContainerBox,
  OwnerInnerContainerBox,
  OwnerNameParagraph,
  OwnerFolderParagraph,
}
