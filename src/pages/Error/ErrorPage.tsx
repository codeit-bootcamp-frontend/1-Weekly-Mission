import logoImg from "src/assets/logo.svg";
import { Link } from "react-router-dom";
import { Container, H1, Img } from "src/pages/Error/ErroPage.styled";

function ErrorPage() {
  return (
    <Container>
      <Link to="/">
        <Img src={logoImg} alt="로고 이미지" />
      </Link>
      <H1>
        찾는 페이지가 존재하지 않습니다.
        <br />
        로고를 눌러 홈페이지로 돌아가세요.
      </H1>
    </Container>
  );
}

export default ErrorPage;
