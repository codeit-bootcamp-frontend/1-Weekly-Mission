import Lottie from "react-lottie-player";
import lottieJson from "public/animation-404.json";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <Container>
      <Text>
        찾을 수 없는 페이지입니다. <br />
        {"요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다. :)"}
      </Text>
      <Button onClick={() => router.push("/")}>링크브러리 홈페이지</Button>
      <Lottie loop animationData={lottieJson} play style={{ width: 450, height: 550 }} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-10);
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--color-gray);
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 500;
  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;
  background: var(--color-white);
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    background: var(--color-primary);
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;
