import '../styles/Intro.css';

function Intro({ name, img }) {
  return (
    <div class="intro-section">
      <img className="profile-img" src={img} alt="프로필 이미지" />
      <p className="name">@{name}</p>
      <p className="bookmark">⭐️ 즐겨찾기</p>
    </div>
  );
}

export default Intro;
