import styled from "styled-components"

const AddLinkOuterBox = styled.div`
  display: flex;
  padding: 0 32rem 9rem 32rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background: var(--linkbrary-bg);
  justify-content: center;

  @media screen and (max-width: 1124px) {
    padding: 60px 32.5px 90px 32.5px;
    align-self: stretch;
  }

  @media screen and (max-width: 767px) {
    padding: 24px 32px 40px 32px;
    align-self: stretch;
  }
`

const AddLinkBox = styled.div`
  display: flex;
  width: 80rem;
  height: 6.9rem;
  padding: 1.6rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 1.5rem;
  border: 1px solid var(--linkbrary-primary-color);
  background: var(--linkbrary-white);

  @media screen and (max-width: 1124px) {
    width: 70rem;
    height: 6.9rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
    height: 5.3rem;
  }
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

const AddLinkInputInnerBox = styled.div`
  display: flex;
  align-items: center;
`

const AddLinkImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.4rem;
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
  AddLinkInputInnerBox,
}
