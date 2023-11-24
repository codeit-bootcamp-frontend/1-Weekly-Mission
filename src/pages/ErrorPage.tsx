import styled from "styled-components"
import bgImg from "../assets/errorbg.png"
import logoImg from '../assets/logo.svg'
import { Link } from "react-router-dom"

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Gray1);
  background-image: url(${bgImg});
  background-size: cover;
`

const Img = styled.img`
  width: 30rem;
  height: auto;
  padding-top: 20rem;
`

const H1 = styled.h1`
  padding-top: 4rem;
  color: var(--Black);
  font-size: 3rem;
  text-align: center;
  line-height: 200%;
`

function ErrorPage() {
  return (
    <Div>
      <Link to="/">
        <Img src={logoImg} alt="로고 이미지" />
      </Link>
      <H1>찾는 페이지가 존재하지 않습니다.<br />
        로고를 눌러 홈페이지로 돌아가세요.</H1>
    </Div >
  )
}

export default ErrorPage