import Kebab from 'assets/icon/kebab.svg';
import { Link } from 'react-router-dom';
import './KebabButton.css';

function KebabButton() {
  return (
    <Link className="kebab-button">
      <img src={Kebab} alt="즐겨찾기 버튼" />
    </Link>
  );
}

export default KebabButton;
