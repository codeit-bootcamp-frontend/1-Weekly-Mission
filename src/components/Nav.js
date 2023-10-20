import library from './img/linkbrary.svg';
import humanImg from './img/humanImg.svg';
import smile from './img/smile.svg';
import star from './img/star.svg';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav1-container">
      <div className="nav1-wrapper">
        <div className="nav1-logo">
          <img className="nav1-logoImg" src={library} />
        </div>
        <div className="nav1-div">
          <div className="nav1-div-logo">
            <img src={humanImg} />
          </div>
          <div className="nav1-div-mail">Codeit@codeit.com</div>
        </div>
      </div>
      <div className="nav2-wrapper">
        <div className="nav2-logo">
          <img src={smile} />
          <div className="nav2-div">@코드잇</div>
        </div>
        <div className="nav2-starDiv">
          <img src={star} />
        </div>
      </div>
    </div>
  );
}
