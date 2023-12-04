import Button from "@/components/button/Button";
import { ButtonContainer } from "@/components/button/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NotFound() {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <NotFoundWrapper>
      <div className="contentContainer">
        찾을 수 없는 페이지입니다.
        <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :)
      </div>
      <Button onClick={handleBtn} type="primary">
        홈으로 이동
      </Button>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  display: flex;
  background: var(--background);
  margin-top: 9.4rem;
  height: calc(100vh - 25.4rem);
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  .contentContainer {
    text-align: center;
    color: var(--black);
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 8rem;
  }

  ${ButtonContainer} {
    width: 20rem;
  }
`;
