import styled from "styled-components"

const AddLinkOuterBox = styled.div`
  display: flex;
  padding: 6rem 32rem 9rem 32rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  background: var(--linkbrary-bg);
`

const AddLinkBox = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color);
  background: var(--linkbrary-white);
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

const AddLinkContentInput = styled.input`
  color: var(--linkbrary-gray-60, #9fa6b2);

  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:focus {
    outline: none;
  }
`

export {
  AddLinkBox,
  AddLinkContentInput,
  AddLinkImage,
  AddLinkInnerBox,
  AddLinkInputBox,
  AddLinkOuterBox,
}
