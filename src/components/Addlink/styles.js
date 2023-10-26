import styled from "styled-components"

const AddLinkBox = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const AddLinkInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const AddLinkInnerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const AddLinkImage = styled.img`
  width: 20px;
  height: 20px;
`

const AddLinkContentBox = styled.div`
  color: var(--linkbrary-gray-60, #9fa6b2);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`

export {
  AddLinkBox,
  AddLinkContentBox,
  AddLinkImage,
  AddLinkInnerBox,
  AddLinkInputBox,
}
