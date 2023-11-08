import Kebab from 'assets/icon/kebab.svg';
import SelectMenu from 'components/SelectMenu/SelectMenu';
import { useState } from 'react';
import './KebabButton.css';

function KebabButton({ onClick, url }) {
  const [show, setShow] = useState(false);

  const handleKebab = () => {
    setShow((val) => !val);
  };

  return (
    <>
      <button className="kebab-button" onClick={handleKebab}>
        <img className="kebab-img" src={Kebab} alt="즐겨찾기 버튼" />
      </button>
      {show && <SelectMenu onClick={onClick} url={url} />}
    </>
  );
}

export default KebabButton;
