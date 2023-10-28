import Kebab from 'assets/icon/kebab.svg';
import SelectMenu from 'components/SelectMenu/SelectMenu';
import { useState } from 'react';
import './KebabButton.css';

function KebabButton() {
  const [show, setShow] = useState(false);
  const handleKebab = () => {
    show === false ? setShow(true) : setShow(false);
  };
  return (
    <>
      <button className="kebab-button" onClick={handleKebab}>
        <img src={Kebab} alt="즐겨찾기 버튼" />
      </button>
      {show && <SelectMenu />}
    </>
  );
}

export default KebabButton;
