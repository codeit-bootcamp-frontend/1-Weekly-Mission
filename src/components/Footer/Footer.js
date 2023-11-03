import './Footer.css'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import { S } from './Footer.styled'

function Footer() {
  return (
    <S.Footer>
      <S.DivCopy>©codeit - 2023</S.DivCopy>
      <S.DivInfo>
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </S.DivInfo>
      <S.DivSns>
        <a target="_blank" rel='noreferrer' href="https://www.facebook.com">
          <img src={facebook} alt="페이스북 페이지로 연결" />
        </a>
        <a target="_blank" rel='noreferrer' href="https://twitter.com">
          <img src={twitter} alt="트위터 페이지로 연결" />
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.youtube.com">
          <img src={youtube} alt="유튜브 페이지로 연결" />
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.instagram.com">
          <img src={instagram} alt="인스타그램 페이지로 연결" />
        </a>
      </S.DivSns>
    </S.Footer>
  )
}

export default Footer