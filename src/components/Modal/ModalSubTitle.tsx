import styled from "styled-components";

function ModalSubTitle({ subTitle }: SubTitleProps) {
  return <SubTitle>{subTitle}</SubTitle>;
}

export default ModalSubTitle;

const SubTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray9F);
`;
