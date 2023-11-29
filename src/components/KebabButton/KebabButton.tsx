import Image from "next/image";
import { useState } from "react";
import Kebab from "src/assets/icon/kebab.svg";
import styles from "src/components/KebabButton/KebabButton.module.css";
import SelectMenu from "src/components/SelectMenu/SelectMenu";

function KebabButton({ onClick, url }: KebabButtonProps) {
  const [show, setShow] = useState(false);

  const handleKebab = () => {
    setShow((val) => !val);
  };

  return (
    <>
      <button className={styles.kebabButton} onClick={handleKebab}>
        <Image src={Kebab} alt="즐겨찾기 버튼" />
      </button>
      {show && <SelectMenu onClick={onClick} url={url} />}
    </>
  );
}

export default KebabButton;
