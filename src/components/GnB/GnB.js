import '../../Global.css'
import './GnB.css'
import linkbraryLogo from '../../assets/logo/linkbrary_logo.svg'

function GlobalNavBar() {
  return (
    <header>
      <div className="header_container">
        <a className="site_logo">
          <img src={linkbraryLogo} alt="링크브러리 로고 링크(랜딩페이지 이동)"/>
        </a>
        <a className="login link">
          로그인
        </a>
      </div>
      <div className="header">
      </div>    
    </header>
  )
}

export default GlobalNavBar