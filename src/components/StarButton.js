import { Link } from 'react-router-dom';
import Star from '../assets/icon/star.svg';
import './StarButton.css';

function StarButton() {
  return (
    <Link className="star-button">
      <img src={Star} alt="즐겨찾기 버튼" />
    </Link>
  );
}
export default StarButton;
