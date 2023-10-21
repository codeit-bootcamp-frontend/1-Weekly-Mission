import './GnB.css'
import linkbraryLogo from '../../assets/logo/linkbrary_logo.svg'

function GlobalNavBar() {
  return (
    <header>
    <div class="header_container">
      <a class="site_logo">
        <img src={linkbraryLogo} alt="링크브러리 로고 링크(랜딩페이지 이동)"/>
      </a>
      <a class="login link">
        로그인
      </a>
    </div>
    </header>
  )
}

export default GlobalNavBar