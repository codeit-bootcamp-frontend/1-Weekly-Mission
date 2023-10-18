import '../styles/Intro.css';
import Avatar from '../assets/images/Avatar.png';

function Intro() {
  return (
    <div class="intro-section">
      <img src={Avatar} alt="프로필 이미지" />
      <p className="bookmark">⭐️ 즐겨찾기</p>
    </div>
  );
}

export default Intro;
