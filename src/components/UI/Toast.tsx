import CLOSE_IMG from "@/assets/close.svg";
import COMPLETED_IMG from "@/assets/completed.svg";
import { CloseIcon, CompletedImg } from "@/public/assets";
import { TABLET_SIZE } from "@/src/global/mediaQuery";
import styled from "styled-components";

function Toast({ ...props }) {
  return (
    <Container>
      <CompletedImg alt="완료" />
      <p>URL이 복사 되었습니다.</p>
      <button {...props}>
        <CloseIcon alt="안내창을 닫는 버튼" />
      </button>
    </Container>
  );
}

export default Toast;

const Container = styled.div`
  width: 52.4rem;
  height: 6.4rem;

  padding: 2rem 3.2rem;
  border-radius: 0.8rem;

  display: grid;
  grid-template-columns: 2.4rem 1fr 2.4rem;
  align-items: center;

  background-color: #00000080;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  p {
    margin-left: 1.2rem;

    font-size: 1.6rem;
    color: var(--White);
  }

  button {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: ${TABLET_SIZE}) {
    width: 32rem;
  }
`;
