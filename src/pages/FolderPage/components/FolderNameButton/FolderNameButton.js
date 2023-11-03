/* 사용자의 folder list 각 요소를 버튼으로 보여주는 컴포넌트 */

import styles from "./FolderNameButton.module.css";
let prev = null;
function FolderNameButton({ folder, onChange }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    onChange(folder.id, folder.name);
    e.target.className = `${styles["folder-name-button"]} ${styles["clicked-folder-button"]}`;
    if (!prev) prev = e;
    else {
      prev.target.className = `${styles["folder-name-button"]}`;
      prev = e;
    }
  };

  return (
    <button
      type="submit"
      onClick={handleButtonClick}
      className={styles["folder-name-button"]}
    >
      {folder.name}
    </button>
  );
}

export default FolderNameButton;
