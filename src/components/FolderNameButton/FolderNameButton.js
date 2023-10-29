/* 사용자의 folder list 각 요소를 버튼으로 보여주는 컴포넌트 */

/* css 모듈 방식 적용
   파라미터로 folder 객체와 FolderButtonList.js의 handleButton 함수를 받는다.
 */

import styles from "./FolderNameButton.module.css";

function FolderNameButton({ folder, onChange }) {
  const { id = "", name = "전체" } = folder;

  const handleButtonClick = (e) => {
    onChange(name, id);
    e.target.className = `${styles["folder-name-button"]} ${styles["clicked-folder-button"]}`;
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={styles["folder-name-button"]}
    >
      {name}
    </button>
  );
}

export default FolderNameButton;
